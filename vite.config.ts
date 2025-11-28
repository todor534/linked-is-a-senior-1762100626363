import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import type { IncomingMessage } from 'node:http'

function serverlessApiDevPlugin(): Plugin {
  return {
    name: 'serverless-api-dev',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        try {
          if (!req.url || !req.url.startsWith('/api/')) return next()

          const url = new URL(req.url, 'http://local')
          const parts = url.pathname.split('/').filter(Boolean)
          const name = parts[1] // ['api', ':name', ...]
          if (!name) return next()

          let mod: any
          try {
            mod = await server.ssrLoadModule(`/server/handlers/${name}.ts`)
          } catch (e) {
            return next()
          }
          const handle = mod?.handle
          if (typeof handle !== 'function') return next()

          const headers = new Headers()
          for (const [k, v] of Object.entries(req.headers)) {
            if (typeof v === 'string') headers.set(k, v)
            else if (Array.isArray(v)) headers.set(k, v.join(', '))
          }

          const method = req.method || 'GET'
          const body = await readBodyIfNeeded(req, method)

          const request = new Request(url.toString(), { method, headers, body: body ? new Uint8Array(body) : undefined })
          const response: Response = await handle(request)

          res.statusCode = response.status
          response.headers.forEach((value, key) => {
            // Vite dev simplicity; not handling multi-value headers explicitly
            res.setHeader(key, value)
          })

          if (method === 'HEAD') {
            res.end()
            return
          }

          const ab = await response.arrayBuffer()
          res.end(Buffer.from(ab))
        } catch (err: any) {
          server.ssrFixStacktrace?.(err)
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'Internal Server Error' }))
        }
      })
    }
  }
}

async function readBodyIfNeeded(req: IncomingMessage, method: string) {
  if (method === 'GET' || method === 'HEAD') return undefined
  const chunks: Buffer[] = []
  return await new Promise<Buffer>((resolve, reject) => {
    req.on('data', (c) => chunks.push(Buffer.isBuffer(c) ? c : Buffer.from(c)))
    req.on('end', () => resolve(Buffer.concat(chunks)))
    req.on('error', reject)
  })
}

export default defineConfig({
  plugins: [react(), serverlessApiDevPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    target: 'es2020',
    sourcemap: true,
    assetsInlineLimit: 0
  },
  server: {
    port: 5173,
    strictPort: false
  }
})