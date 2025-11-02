import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { routes } from './lib/routes';

const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Work = lazy(() => import('./pages/Work'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Quote = lazy(() => import('./pages/Quote'));
const NotFound = lazy(() => import('./pages/NotFound'));

const styles: Record<string, React.CSSProperties> = {
  app: {
    minHeight: '100dvh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  main: {
    flex: 1,
  },
  loading: {
    padding: '64px 24px',
    textAlign: 'center',
    color: '#222',
    fontSize: '16px',
    lineHeight: 1.6,
  },
};

export default function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={styles.app}>
        <Header />
        <main style={styles.main}>
          <Suspense fallback={<div style={styles.loading}>Loading...</div>}>
            <Routes>
              <Route path={routes.home} element={<Home />} />
              <Route path={routes.services} element={<Services />} />
              <Route path={routes.work} element={<Work />} />
              <Route path={routes.about} element={<About />} />
              <Route path={routes.contact} element={<Contact />} />
              <Route path={routes.privacy} element={<Privacy />} />
              <Route path={routes.quote} element={<Quote />} />
              <Route path="/home" element={<Navigate to={routes.home} replace />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}