// src/App.jsx
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import Particles from './components/Particles';

// pages
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Contact from './pages/Contact';
import SmiProject from './pages/SmiProject';
import PenthouseZurichProject from './pages/PenthouseZurichProject';
import WhyUs from './pages/WhyUs';

/* ---- composant fond ---- */
const Background = () => {
  const { pathname } = useLocation();
  if (pathname !== '/why-us') return null; // n’affiche rien ailleurs

  return (
    <div className='pointer-events-none fixed inset-0 -z-10 w-full h-full'>
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollProgress />
      <Background />

      <div className='bg-black min-h-screen flex flex-col scroll-smooth'>
        <Navbar />

        {/* content area */}
        <div className='flex-1'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/why-us' element={<WhyUs />} />

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
