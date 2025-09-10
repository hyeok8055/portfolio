import './App.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/home.jsx';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
