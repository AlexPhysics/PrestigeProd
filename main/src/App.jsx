// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// pages
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Contact from './pages/Contact';
import SmiProject from './pages/SmiProject';
import PenthouseZurichProject from './pages/PenthouseZurichProject';

const App = () => {
  return (
    <BrowserRouter>
      <div className='bg-black min-h-screen flex flex-col scroll-smooth'>
        <Navbar />

        {/* content area */}
        <div className='flex-1'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />

            {/* individual project routes */}
            <Route path='/portfolio/smi' element={<SmiProject />} />
            <Route
              path='/portfolio/penthouse-zurich'
              element={<PenthouseZurichProject />}
            />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
