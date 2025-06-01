import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { logoImg } from '../utils';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Services', path: '/services' },
  { label: 'Why us?', path: '/why-us' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className='w-full py-5 sm:px-10 px-5 bg-black backdrop-blur-lg z-50'>
      <nav className='relative flex items-center justify-between screen-max-width mx-auto'>
        {/* Logo */}
        <Link to='/'>
          <img src={logoImg} alt='Logo' width={32} height={32} />
        </Link>

        {/* Desktop Nav */}
        <div className='hidden md:flex flex-1 items-center justify-center gap-8'>
          {navItems.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              className={`relative text-sm font-light tracking-wide text-gray hover:text-white transition-all pb-1 group ${
                location.pathname === path ? 'text-white font-normal' : ''
              }`}
            >
              {label}
              <span className='absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full'></span>
            </Link>
          ))}
        </div>

        {/* CTA Contact */}
        <div className='hidden md:flex'>
          <Link
            to='/contact'
            className='border border-white px-6 py-2 rounded-full text-sm text-white font-medium hover:bg-white hover:text-black transition-all duration-300'
          >
            Contact us
          </Link>
        </div>

        {/* Hamburger for mobile */}
        <button
          onClick={() => setMenuOpen(open => !open)}
          className='md:hidden flex items-center z-50'
          aria-label='Toggle menu'
        >
          <div className='space-y-1'>
            <span
              className={`block w-6 h-0.5 bg-white transform transition-transform duration-300 ease-in-out ${
                menuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ease-in-out ${
                menuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transform transition-transform duration-300 ease-in-out ${
                menuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            ></span>
          </div>
        </button>

        {/* Mobile dropdown */}
        <div
          className={`absolute top-full left-0 w-full bg-black backdrop-blur-md border-t border-white/10 md:hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
          } origin-top`}
        >
          <div className='flex flex-col items-center py-6 gap-3'>
            {navItems.map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                onClick={() => setMenuOpen(false)}
                className='text-sm text-gray hover:text-white transition'
              >
                {label}
              </Link>
            ))}
            <Link
              to='/contact'
              onClick={() => setMenuOpen(false)}
              className='mt-4 border border-white px-6 py-2 rounded-full text-sm text-white font-medium hover:bg-white hover:text-black transition-all duration-300'
            >
              Contact us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
