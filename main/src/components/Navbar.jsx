import { useState } from 'react';
import { Link } from 'react-router-dom';
import { logoImg } from '../utils';
import { navLists } from '../constants';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full py-5 sm:px-10 px-5 bg-black">
      <nav className="relative flex items-center justify-between screen-max-width mx-auto">
        {/* Logo */}
        <Link to="/">
          <img src={logoImg} alt="Logo" width={32} height={32} />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-4">
          {navLists.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen((open) => !open)}
          className="md:hidden flex items-center z-20"
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
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

        {/* Mobile Menu with dropdown animation */}
        <div
          className={`absolute top-full left-0 w-full bg-black md:hidden origin-top transform transition-transform duration-400 ease-out ${
            menuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
          }`
        }
        >
          <div className="flex flex-col items-center py-4">
            {navLists.map(({ label, path }, idx) => (
              <Link
                key={label}
                to={path}
                onClick={() => setMenuOpen(false)}
                className="w-full text-center py-3 text-sm text-gray hover:text-white border-t border-gray-700 transition-colors"
                style={{ transitionDelay: menuOpen ? `${idx * 300}ms` : '0ms' }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
