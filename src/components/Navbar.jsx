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
    <header className='w-full py-5 sm:px-10 px-5 bg-black backdrop-blur-lg z-50 sticky top-0 left-0'>
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
          className='md:hidden flex items-center justify-center p-2 z-50 active:bg-white/10 rounded-md transition-colors'
          aria-label='Toggle menu'
          aria-expanded={menuOpen}
        >
          <div className='space-y-1.5 w-6'>
            <span
              className={`block w-6 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                menuOpen ? 'opacity-0 translate-x-3' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </div>
        </button>

        {/* Mobile dropdown */}
        <div
          className={`fixed top-[70px] left-0 right-0 w-full bg-black/95 backdrop-blur-md border-t border-white/10 md:hidden transition-all duration-300 ease-in-out ${
            menuOpen
              ? 'opacity-100 visible h-auto max-h-[500px]'
              : 'opacity-0 invisible max-h-0'
          } overflow-hidden z-50`}
        >
          <div className='flex flex-col items-center py-6 gap-4 w-full px-6'>
            {navItems.map(({ label, path }) => {
              // Extraire le chemin relatif sans le préfixe de langue
              const relativePath = path.split('/').slice(2).join('/');

              return (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className={`text-base text-gray hover:text-white transition px-4 py-2 w-full max-w-[200px] text-center ${
                    formattedCurrentPath === relativePath
                      ? 'text-white font-normal'
                      : ''
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <Link
              to={`/${currentLang}/contact`}
              onClick={() => setMenuOpen(false)}
              className='mt-2 border border-white px-8 py-2 rounded-full text-base text-white font-medium hover:bg-white hover:text-black transition-all duration-300 w-full max-w-[200px] text-center'
            >
              {t('nav.contact')}
            </Link>
            <div className='pt-3 border-t border-white/10 w-full flex justify-center mt-2'>
              <div className='max-w-[200px] w-full flex justify-center'>
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
