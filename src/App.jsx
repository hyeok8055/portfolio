import './App.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/home.jsx';
import Resume from '@/pages/Resume.jsx';
import Projects from '@/pages/Project.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
