import './App.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from '@/pages/home.jsx';
import Resume from '@/pages/Resume.jsx';
import Projects from '@/pages/Project.jsx';
import PdfView from '@/pages/PdfView.jsx';

function AppLayout() {
  const location = useLocation();
  const isPdf = location.pathname === '/pdf';

  if (isPdf) {
    return <PdfView />;
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>
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
