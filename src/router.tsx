import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';


import Home from './pages/Home';
import Services from './pages/Services';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Quote from './pages/Quote';
import NotFound from './pages/NotFound';

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
    <Router>
      <ScrollToTop />
      <div style={styles.app}>
        <Header />
        <main style={styles.main}>
          <Suspense fallback={<div style={styles.loading}>Loading...</div>}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/services' element={<Services />} />
              <Route path='/work' element={<Work />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/privacy' element={<Privacy />} />
              <Route path='/quote' element={<Quote />} />
              <Route path="/home" element={<Navigate to='/' replace />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}