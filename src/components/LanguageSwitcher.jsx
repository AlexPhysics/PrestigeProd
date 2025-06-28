import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    
    // Mettre à jour l'URL pour refléter la nouvelle langue
    const currentPath = location.pathname.split('/').slice(2).join('/');
    navigate(`/${lng}/${currentPath}`);
  };
  
  return (
    <div className="flex items-center space-x-1 ml-4">
      <button 
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 text-sm rounded ${i18n.language === 'en' ? 'bg-white/10 text-white' : 'text-white/70'}`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button 
        onClick={() => changeLanguage('fr')}
        className={`px-2 py-1 text-sm rounded ${i18n.language === 'fr' ? 'bg-white/10 text-white' : 'text-white/70'}`}
        aria-label="Switch to French"
      >
        FR
      </button>
      <button 
        onClick={() => changeLanguage('de')}
        className={`px-2 py-1 text-sm rounded ${i18n.language === 'de' ? 'bg-white/10 text-white' : 'text-white/70'}`}
        aria-label="Switch to German"
      >
        DE
      </button>
      <button 
        onClick={() => changeLanguage('it')}
        className={`px-2 py-1 text-sm rounded ${i18n.language === 'it' ? 'bg-white/10 text-white' : 'text-white/70'}`}
        aria-label="Switch to Italian"
      >
        IT
      </button>
    </div>
  );
};

export default LanguageSwitcher;
