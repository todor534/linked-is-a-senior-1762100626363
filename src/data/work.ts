export type WorkItem = {
  id: string;
  title: string;
  client?: string;
  year?: number;
  summary: string;
  description?: string;
  services: string[];
  categories: string[];
  stack: string[];
  image: string;
  images?: string[];
  url?: string;
  featured?: boolean;
  status?: 'launched' | 'in-progress' | 'internal' | 'confidential';
  metrics?: { label: string; value: string }[];
  testimonial?: { quote: string; author: string; role?: string };
};

export const work: WorkItem[] = [
  {
    id: 'kaya-ai-business-assistant',
    title: 'Kaya – AI Business Assistant',
    client: 'Internal Product',
    year: 2024,
    summary:
      'An AI assistant that connects to your docs, CRM, and operations to answer questions, draft content, and automate routine tasks.',
    description:
      'Kaya centralizes knowledge across Google Drive, Notion, and your CRM, then uses retrieval-augmented generation to deliver grounded answers and trigger automations. It drafts proposals, summarizes calls, files tickets, and can run playbooks with approvals in the loop.',
    services: [
      'AI product design',
      'RAG (retrieval-augmented generation)',
      'Agent workflows & automations',
      'Auth & multi-tenant architecture',
      'Web app UX/UI'
    ],
    categories: ['AI', 'Automation', 'Web App'],
    stack: [
      'React',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'OpenAI API',
      'Vector DB',
      'OAuth',
      'Serverless'
    ],
    image: 'https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762099246241-img-kaya-hero.png',
    images: ['https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762099500230-img-kaya-dashboard.png', 'https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762099536483-img-kaya-sources.png', 'https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762099577494-img-kaya-playbooks.png'],
    status: 'internal',
    featured: true,
    metrics: [
      { label: 'Time-to-answer', value: 'Sub-5s grounded responses' },
      { label: 'Automations', value: 'Dozens of reusable playbooks' }
    ]
  },
  {
    id: 'cashing-in-on-ai',
    title: 'Cashing in on AI',
    client: 'Linked Studio',
    year: 2024,
    summary:
      'An interactive microsite and ROI model that helps teams prioritize high-ROI AI opportunities and prototype quickly.',
    description:
      'A lean, content-forward experience with a calculator that quantifies impact from automation and augmentation. Includes scenario toggles, sensitivity ranges, and a lead-gen flow tied to consult bookings.',
    services: ['Strategy & content', 'Interactive calculators', 'Marketing site', 'Lead capture'],
    categories: ['AI', 'Marketing Site'],
    stack: ['React', 'TypeScript', 'Vite', 'Serverless Functions', 'Recharts'],
    image: 'https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762099629399-img-cashing-in-on-ai-hero.png',
    images: ['https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762099683321-img-cashing-in-on-ai-calc.png', 'https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762099719637-img-cashing-in-on-ai-sections.png'],
    status: 'launched',
    featured: true,
    metrics: [
      { label: 'Prototype speed', value: '< 2 weeks from concept to launch' },
      { label: 'Conversion', value: 'High-intent consult requests' }
    ]
  },
  {
    id: 'nancy-atanasova-dental-lab',
    title: 'Nancy Atanasova Dental Lab',
    client: 'Nancy Atanasova Dental Lab',
    year: 2023,
    summary:
      'Marketing site with patient intake and ordering flows for a boutique dental lab. Clean UX, fast, and easy to maintain.',
    description:
      'We designed and built a performant site with secure intake forms and an ordering workflow. Includes file uploads, email notifications, and a simple admin for managing submissions.',
    services: ['Web design & build', 'Secure forms', 'Ordering workflow', 'Hosting & analytics'],
    categories: ['Healthcare', 'E‑commerce', 'Web App'],
    stack: ['React', 'TypeScript', 'Serverless', 'Postmark', 'reCAPTCHA'],
    image: 'https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762099801476-img-nancy-lab-hero.png',
    images: ['https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762099840873-img-nancy-lab-forms.png', 'https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762099903533-img-nancy-lab-order.png'],
    url: 'https://nancyatanasova.com',
    status: 'launched',
    featured: true,
    metrics: [
      { label: 'Page speed', value: 'A-grade performance' },
      { label: 'Submission UX', value: 'Frictionless multi-step forms' }
    ],
    testimonial: {
      quote:
        'Clear plan, fast delivery, and thoughtful details. Our patients and partners love how simple it is.',
      author: 'Nancy Atanasova',
      role: 'Owner'
    }
  },
  {
    id: 'consumer-lending-origination-bpa',
    title: 'Consumer Lending – Credit Origination & BPA',
    client: 'Confidential (Banking)',
    year: 2022,
    summary:
      'Banking-grade credit origination with business-process automation for consumer lending. Role-based access, audit trails, and integrations.',
    description:
      'We delivered a secure workflow system for intake, underwriting, and decisioning. Includes configurable checklists, document collection, audit logs, and integrations for KYC/AML and credit bureaus.',
    services: [
      'Secure portal',
      'Workflow automation',
      '3rd‑party integrations',
      'Role-based access control',
      'Compliance & auditability'
    ],
    categories: ['Fintech', 'Automation', 'Web App'],
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'S3', 'OIDC'],
    image: 'https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762099959096-img-lending-banking-hero.png',
    images: ['https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762100017567-img-lending-workflows.png', 'https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762100052535-img-lending-audit.png'],
    status: 'confidential',
    featured: false,
    metrics: [
      { label: 'Throughput', value: 'Significant reduction in cycle time' },
      { label: 'Compliance', value: 'Full audit trail + granular permissions' }
    ]
  },
  {
    id: 'client-portal-order-workflows',
    title: 'Client Portal & Order Workflows',
    client: 'Multiple SMEs',
    year: 2024,
    summary:
      'A reusable client portal foundation with secure login, order tracking, and 3rd‑party integrations (payments, shipping, and CRM).',
    description:
      'We productized a portal stack that covers auth, RBAC, orders, notifications, and webhooks. Connects to Stripe, Shopify, Shippo, and HubSpot. Ships fast with clear scopes and iteration loops.',
    services: [
      'Portal UX',
      'Order management',
      'Integrations (Stripe, Shopify, Shippo, HubSpot)',
      'Notifications & webhooks',
      'Deployment & monitoring'
    ],
    categories: ['E‑commerce', 'Automation', 'Web App'],
    stack: ['React', 'TypeScript', 'Serverless', 'Stripe', 'Shopify', 'Webhooks'],
    image: 'https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762100112121-img-portal-orders-hero.png',
    images: ['https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762100176009-img-portal-orders-list.png', 'https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762100228452-img-portal-orders-detail.png'],
    status: 'launched',
    featured: false,
    metrics: [
      { label: 'Time to value', value: 'MVPs launched in weeks' },
      { label: 'Ops efficiency', value: 'Automation-first order handling' }
    ]
  }
];

export default work;