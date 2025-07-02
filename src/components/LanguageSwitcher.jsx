import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', name: 'English', short: 'en' },
    { code: 'fr', name: 'Français', short: 'fr' },
    { code: 'de', name: 'Deutsch', short: 'de' },
    { code: 'it', name: 'Italiano', short: 'it' },
  ];

  const currentLanguage =
    languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);

    // Update URL to reflect new language
    const currentPath = location.pathname.split('/').slice(2).join('/');
    navigate(`/${lng}/${currentPath}`);

    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div className='relative' ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        className='flex items-center gap-2 px-3 py-2 text-sm text-white/90 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200 min-w-[60px] justify-between'
        aria-label='Language selector'
        aria-expanded={isOpen}
        aria-haspopup='listbox'
      >
        <span className='flex items-center'>
          <span className='font-medium text-xs'>{currentLanguage.short}</span>
        </span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className='absolute top-full right-0 mt-1 w-40 bg-black/95 backdrop-blur-md border border-white/20 rounded-lg shadow-xl z-50 overflow-hidden'>
          <div className='py-1' role='listbox'>
            {languages.map(language => (
              <button
                key={language.code}
                onClick={() => changeLanguage(language.code)}
                className={`w-full flex items-center justify-between px-4 py-3 text-sm text-left transition-colors duration-150 ${
                  language.code === i18n.language
                    ? 'bg-white/10 text-white'
                    : 'text-white/80 hover:bg-white/5 hover:text-white'
                }`}
                role='option'
                aria-selected={language.code === i18n.language}
              >
                <div className='flex flex-col'>
                  <span className='font-medium'>{language.name}</span>
                  <span className='text-xs text-white/50'>
                    {language.short}
                  </span>
                </div>
                {language.code === i18n.language && (
                  <svg
                    className='w-4 h-4 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
