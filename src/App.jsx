import { lazy, Suspense } from 'react';
import './App.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

const Home = lazy(() => import('@/pages/home.jsx'));
const Resume = lazy(() => import('@/pages/Resume.jsx'));
const Projects = lazy(() => import('@/pages/Project.jsx'));
const PdfView = lazy(() => import('@/pages/PdfView.jsx'));

function AppLayout() {
  const location = useLocation();
  const isPdf = location.pathname === '/pdf';

  if (isPdf) {
    return (
      <Suspense fallback={<div />}>
        <PdfView />
      </Suspense>
    );
  }

  return (
    <>
      <Header />
      <Suspense fallback={<div />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
