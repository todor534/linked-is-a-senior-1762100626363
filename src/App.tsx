import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';

const styles: Record<string, React.CSSProperties> = {
  app: {
    minHeight: '100svh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#0b0c10',
    color: '#eaf0f6',
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', Arial, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    lineHeight: 1.5,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  fallbackWrap: {
    flex: 1,
    display: 'grid',
    placeItems: 'center',
    padding: '48px 16px',
  },
  spinner: {
    width: 28,
    height: 28,
    borderRadius: '50%',
    border: '3px solid rgba(255,255,255,0.15)',
    borderTopColor: '#7dd3fc',
    animation: 'spin 0.8s linear infinite',
  },
  // Keyframes via inline <style> tag appended once
};

function Spinner() {
  React.useEffect(() => {
    const id = 'app-inline-keyframes';
    if (document.getElementById(id)) return;
    const style = document.createElement('style');
    style.id = id;
    style.textContent = `
@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    `;
    document.head.appendChild(style);
  }, []);
  return <div aria-hidden="true" style={styles.spinner} />;
}

function App() {
  return (
    <div style={styles.app}>
      <Suspense
        fallback={
          <div style={styles.fallbackWrap} role="status" aria-live="polite">
            <Spinner />
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

export default App;