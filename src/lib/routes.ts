import React, { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

export const siteName = 'Linked';

export const paths = {
  home: '/',
  services: '/services',
  work: '/work',
  about: '/about',
  quote: '/quote',
  contact: '/contact',
  privacy: '/privacy',
};

type RouteMeta = {
  title: string;
  description?: string;
};

export type AppRouteObject = RouteObject & {
  meta?: RouteMeta;
  breadcrumb?: string;
};

const Home = lazy(() => import('../pages/Home'));
const Services = lazy(() => import('../pages/Services'));
const Work = lazy(() => import('../pages/Work'));
const About = lazy(() => import('../pages/About'));
const Quote = lazy(() => import('../pages/Quote'));
const Contact = lazy(() => import('../pages/Contact'));
const Privacy = lazy(() => import('../pages/Privacy'));
const NotFound = lazy(() => import('../pages/NotFound'));

const baseDescription =
  'Linked is a senior software & AI development studio. We design and ship production-ready web apps, automations, e-commerce, and AI-powered services.';

export const routes: AppRouteObject[] = [
  {
    path: paths.home,
    element: React.createElement(Home),
    meta: {
      title: `${siteName} — Senior Software & AI Studio`,
      description:
        `${baseDescription} Banking-grade solutions, fast iteration, automation-first mindset, and reliable senior engineering.`,
    },
    breadcrumb: 'Home',
  },
  {
    path: paths.services,
    element: React.createElement(Services),
    meta: {
      title: `Services — ${siteName}`,
      description:
        'Web apps, client portals, order workflows, dashboards, custom automations, 3rd‑party integrations, marketing sites, e‑commerce, and AI assistants.',
    },
    breadcrumb: 'Services',
  },
  {
    path: paths.work,
    element: React.createElement(Work),
    meta: {
      title: `Portfolio — ${siteName}`,
      description:
        'Selected work: Kaya – AI Business Assistant, Cashing in on AI, and Nancy Atanasova Dental Lab with patient intake and ordering.',
    },
    breadcrumb: 'Work',
  },
  {
    path: paths.about,
    element: React.createElement(About),
    meta: {
      title: `About — ${siteName}`,
      description:
        'We ship clear-scoped projects with fast iteration and automation-first mindset, backed by senior engineering with banking-grade experience.',
    },
    breadcrumb: 'About',
  },
  {
    path: paths.quote,
    element: React.createElement(Quote),
    meta: {
      title: `Request a Quote — ${siteName}`,
      description: 'Tell us about your project to receive a fast, clear, fixed-scope quote.',
    },
    breadcrumb: 'Request a quote',
  },
  {
    path: paths.contact,
    element: React.createElement(Contact),
    meta: {
      title: `Book a Free Consult — ${siteName}`,
      description: 'Book a free consult to discuss your goals, scope options, timelines, and budget.',
    },
    breadcrumb: 'Contact',
  },
  {
    path: paths.privacy,
    element: React.createElement(Privacy),
    meta: {
      title: `Privacy Policy — ${siteName}`,
      description: 'How Linked handles data, cookies, and inquiries submitted through our site.',
    },
    breadcrumb: 'Privacy',
  },
  {
    path: '*',
    element: React.createElement(NotFound),
    meta: {
      title: `Page Not Found — ${siteName}`,
    },
  },
];

type NavItem = {
  to: string;
  label: string;
  cta?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost';
};

export const primaryNav: NavItem[] = [
  { to: paths.services, label: 'Services' },
  { to: paths.work, label: 'Work' },
  { to: paths.about, label: 'About' },
];

export const actionNav: NavItem[] = [
  { to: paths.quote, label: 'Request a quote', cta: true, variant: 'primary' },
  { to: paths.contact, label: 'Book a free consult', cta: true, variant: 'ghost' },
];

export const footerNav: NavItem[] = [
  { to: paths.services, label: 'Services' },
  { to: paths.work, label: 'View portfolio' },
  { to: paths.about, label: 'About' },
  { to: paths.contact, label: 'Contact' },
  { to: paths.privacy, label: 'Privacy' },
];

export const ctas = {
  bookConsult: { to: paths.contact, label: 'Book a free consult' },
  requestQuote: { to: paths.quote, label: 'Request a quote' },
  viewPortfolio: { to: paths.work, label: 'View portfolio' },
};

export function getRouteMeta(pathname: string): RouteMeta | undefined {
  const match = routes.find((r) => r.path === pathname);
  return match?.meta;
}