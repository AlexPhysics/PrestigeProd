import { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { logoImg } from '../utils';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'en';

  // Liste des éléments de navigation avec traduction
  const navItems = [
    { label: t('nav.home'), path: `/${currentLang}/` },
    { label: t('nav.portfolio'), path: `/${currentLang}/portfolio` },
    { label: t('nav.services'), path: `/${currentLang}/services` },
    { label: t('nav.whyUs'), path: `/${currentLang}/why-us` },
  ];

  // Déterminer le chemin actuel sans le préfixe de langue pour la comparaison
  const currentPath = location.pathname.split('/').slice(2).join('/');
  const formattedCurrentPath = currentPath || '';

  return (
    <header className='w-full py-5 sm:px-10 px-5 bg-black backdrop-blur-lg z-50'>
      <nav className='relative flex items-center justify-between screen-max-width mx-auto'>
        {/* Logo */}
        <Link to={`/${currentLang}/`}>
          <img src={logoImg} alt='Logo' width={32} height={32} />
        </Link>

        {/* Desktop Nav */}
        <div className='hidden md:flex flex-1 items-center justify-center gap-8'>
          {navItems.map(({ label, path }) => {
            // Extraire le chemin relatif sans le préfixe de langue
            const relativePath = path.split('/').slice(2).join('/');

            return (
              <Link
                key={path}
                to={path}
                className={`relative text-sm font-light tracking-wide text-gray hover:text-white transition-all pb-1 group ${
                  formattedCurrentPath === relativePath
                    ? 'text-white font-normal'
                    : ''
                }`}
              >
                {label}
                <span className='absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full'></span>
              </Link>
            );
          })}

          {/* Ajouter le sélecteur de langue ici */}
          <LanguageSwitcher />
        </div>

        {/* CTA Contact */}
        <div className='hidden md:flex'>
          <Link
            to={`/${currentLang}/contact`}
            className='border border-white px-6 py-2 rounded-full text-sm text-white font-medium hover:bg-white hover:text-black transition-all duration-300'
          >
            {t('nav.contact')}
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
                key={path}
                to={path}
                onClick={() => setMenuOpen(false)}
                className='text-sm text-gray hover:text-white transition'
              >
                {label}
              </Link>
            ))}
            <Link
              to={`/${currentLang}/contact`}
              onClick={() => setMenuOpen(false)}
              className='mt-4 border border-white px-6 py-2 rounded-full text-sm text-white font-medium hover:bg-white hover:text-black transition-all duration-300'
            >
              {t('nav.contact')}
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
