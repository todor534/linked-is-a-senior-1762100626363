export type Service = {
  id: string;
  title: string;
  description: string;
  tagline?: string;
  features?: string[];
  deliverables?: string[];
  icon?: string;
  image?: string;
  badges?: string[];
  timeframe?: string;
  startingPrice?: string;
  ctaPrimary?: { label: string; to: string };
  ctaSecondary?: { label: string; to: string };
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  examples?: string[];
} & { [key: string]: any };

export const services: Service[] = [
  {
    id: "web-apps",
    title: "Web Apps & Client Portals",
    tagline: "Production-ready, secure, and fast.",
    description:
      "We design and ship full‑stack web applications and client portals with secure login, RBAC, and audit trails. From internal tools to customer‑facing portals, we build for reliability and scale.",
    features: [
      "Authentication (SAML/OAuth, passwordless)",
      "Role‑based access control and audit logs",
      "Complex forms, file uploads, and approvals",
      "Dashboards, reporting, and exports",
      "Accessibility and responsive UI",
      "CI/CD, observability, and error tracking"
    ],
    deliverables: [
      "Clear scope and architecture plan",
      "Component library and design tokens",
      "Automated tests (unit/E2E)",
      "Deployment pipeline and runbooks",
      "Handover with documentation"
    ],
    badges: ["Senior engineering", "Banking‑grade quality"],
    timeframe: "4–12 weeks for an MVP",
    startingPrice: "from $15k",
    icon: "@@img_icon_webapps@@",
    image: "@@img_service_webapps@@",
    ctaPrimary: { label: "Request a quote", to: "/quote?service=web-apps" },
    ctaSecondary: { label: "Book a free consult", to: "/contact?type=consult" },
    primaryCta: { label: "Request a quote", to: "/quote?service=web-apps" },
    secondaryCta: { label: "Book a free consult", to: "/contact?type=consult" }
  },
  {
    id: "ai-automation",
    title: "AI & Process Automation",
    tagline: "Automation‑first mindset for measurable ROI.",
    description:
      "Custom AI assistants, document processing, and end‑to‑end automations that reduce manual work and improve accuracy. We prioritize safety, evaluation, and observability from day one.",
    features: [
      "Retrieval‑augmented generation (RAG) and chat",
      "Document intake, parsing, and enrichment",
      "Email/chat automation and smart routing",
      "Agentic workflows, schedulers, and queues",
      "Human‑in‑the‑loop review and approvals",
      "Telemetry, evals, and guardrails"
    ],
    deliverables: [
      "Use‑case discovery and measurable KPIs",
      "Prototype and evaluation harness",
      "Production pipeline with fallbacks",
      "Monitoring, cost controls, and alerts",
      "Playbooks and team enablement"
    ],
    examples: ["Kaya – AI Business Assistant", "Cashing in on AI"],
    badges: ["OpenAI, Anthropic, local models", "Observability‑first"],
    timeframe: "2–8 weeks to production",
    startingPrice: "from $8k",
    icon: "@@img_icon_ai@@",
    image: "@@img_service_ai@@",
    ctaPrimary: { label: "Request a quote", to: "/quote?service=ai-automation" },
    ctaSecondary: { label: "View portfolio", to: "/work" },
    primaryCta: { label: "Request a quote", to: "/quote?service=ai-automation" },
    secondaryCta: { label: "View portfolio", to: "/work" }
  },
  {
    id: "ecommerce",
    title: "E‑commerce Shops",
    tagline: "Composable storefronts that convert.",
    description:
      "Headless or traditional stores with secure checkout, order workflows, and 3rd‑party integrations. Built for speed, SEO, and maintainability.",
    features: [
      "Product catalogs, variants, and inventory",
      "Payments (Stripe, Adyen), taxes, and shipping",
      "Checkout flows and fraud checks",
      "Order management and notifications",
      "ERP/CRM/fulfillment integrations",
      "Analytics, pixels, and performance budgets"
    ],
    deliverables: [
      "Design system and reusable blocks",
      "Content modeling and CMS setup",
      "Staging/preview environments",
      "Data import/migration plan",
      "Playbooks for ops and support"
    ],
    timeframe: "3–10 weeks depending on scope",
    startingPrice: "from $12k",
    icon: "@@img_icon_ecommerce@@",
    image: "@@img_service_ecommerce@@",
    ctaPrimary: { label: "Request a quote", to: "/quote?service=ecommerce" },
    ctaSecondary: { label: "View portfolio", to: "/work" },
    primaryCta: { label: "Request a quote", to: "/quote?service=ecommerce" },
    secondaryCta: { label: "View portfolio", to: "/work" }
  },
  {
    id: "marketing-sites",
    title: "Marketing Sites & Landing Pages",
    tagline: "Fast, SEO‑friendly pages that convert.",
    description:
      "Custom marketing websites and landing pages with CMS, animations, and analytics. Built with performance and editorial workflow in mind.",
    features: [
      "Design system and component library",
      "SEO foundations and Core Web Vitals",
      "CMS editing and preview (your choice)",
      "Analytics, A/B testing, and pixels",
      "Localization and accessibility",
      "Forms, leads, and CRM automations"
    ],
    deliverables: [
      "Sitemap, wireframes, and content plan",
      "Reusable blocks and sections",
      "Performance budget and audits",
      "CMS training and handover docs",
      "Hosting and deployment setup"
    ],
    timeframe: "1–4 weeks for typical launches",
    startingPrice: "from $5k",
    icon: "@@img_icon_marketing@@",
    image: "@@img_service_marketing@@",
    ctaPrimary: { label: "Book a free consult", to: "/contact?type=consult" },
    ctaSecondary: { label: "Request a quote", to: "/quote?service=marketing-sites" },
    primaryCta: { label: "Book a free consult", to: "/contact?type=consult" },
    secondaryCta: { label: "Request a quote", to: "/quote?service=marketing-sites" }
  },
  {
    id: "dashboards",
    title: "Dashboards & Analytics",
    tagline: "Real‑time visibility for your business.",
    description:
      "KPI dashboards, embeddable analytics, and data pipelines that bring clarity to your operations. Secure by default with row‑level permissions.",
    features: [
      "Interactive charts and visualizations",
      "Row‑level security and RBAC",
      "Audit logs and data lineage",
      "ETL ingestion and transformations",
      "Scheduled reports and alerts",
      "SSO/SAML and multi‑tenant support"
    ],
    deliverables: [
      "Data model and schema design",
      "Widget library and theming",
      "ETL/ELT pipelines and jobs",
      "Monitoring and cost control",
      "Runbooks and documentation"
    ],
    timeframe: "3–8 weeks for first release",
    startingPrice: "from $10k",
    icon: "@@img_icon_dashboards@@",
    image: "@@img_service_dashboards@@",
    ctaPrimary: { label: "Request a quote", to: "/quote?service=dashboards" },
    ctaSecondary: { label: "Book a free consult", to: "/contact?type=consult" },
    primaryCta: { label: "Request a quote", to: "/quote?service=dashboards" },
    secondaryCta: { label: "Book a free consult", to: "/contact?type=consult" }
  },
  {
    id: "integrations",
    title: "3rd‑party Integrations & APIs",
    tagline: "Connect your stack, reduce manual work.",
    description:
      "We integrate CRMs, ERPs, payment gateways, and more. We also design and harden APIs and webhooks with monitoring and retries.",
    features: [
      "QuickBooks, HubSpot, Salesforce, and more",
      "Payments, invoicing, and subscriptions",
      "Webhooks, OAuth, and rate limiting",
      "Data sync, reconciliation, and backfills",
      "Idempotency, retries, and DLQs",
      "Monitoring, alerting, and dashboards"
    ],
    deliverables: [
      "Integration design and mapping",
      "Robust error handling and retries",
      "Observability and alerting setup",
      "Security review and hardening",
      "Documentation and handover"
    ],
    timeframe: "1–6 weeks per integration",
    startingPrice: "from $4k",
    icon: "@@img_icon_integrations@@",
    image: "@@img_service_integrations@@",
    ctaPrimary: { label: "Request a quote", to: "/quote?service=integrations" },
    ctaSecondary: { label: "Book a free consult", to: "/contact?type=consult" },
    primaryCta: { label: "Request a quote", to: "/quote?service=integrations" },
    secondaryCta: { label: "Book a free consult", to: "/contact?type=consult" }
  },
  {
    id: "lending",
    title: "Credit & Lending Solutions",
    tagline: "Banking‑grade origination and workflows.",
    description:
      "We’ve delivered consumer lending portals with credit origination, underwriting workflows, and document management for regulated environments.",
    features: [
      "KYC/KYB, e‑signature, and secure document vaults",
      "Scoring, decisioning, and risk controls",
      "Queue‑based underwriting workflows",
      "Role‑based permissions and audit trails",
      "Notifications, SLAs, and escalations",
      "Compliance, logging, and reporting"
    ],
    deliverables: [
      "Discovery, risk assessment, and scope",
      "Security and compliance plan",
      "MVP implementation and rollout",
      "Operational dashboards and alerts",
      "Knowledge transfer and training"
    ],
    examples: ["Credit origination & BPA for consumer lending"],
    badges: ["Banking‑grade", "Security‑focused"],
    timeframe: "Timeline set by discovery",
    startingPrice: "custom",
    icon: "@@img_icon_lending@@",
    image: "@@img_service_lending@@",
    ctaPrimary: { label: "Book a free consult", to: "/contact?type=consult" },
    ctaSecondary: { label: "View portfolio", to: "/work" },
    primaryCta: { label: "Book a free consult", to: "/contact?type=consult" },
    secondaryCta: { label: "View portfolio", to: "/work" }
  }
];

export const serviceMap: Record<string, Service> = services.reduce((acc, s) => {
  acc[s.id] = s;
  return acc;
}, {} as Record<string, Service>);

export function getServiceById(id: string): Service | undefined {
  return serviceMap[id];
}

export default services;