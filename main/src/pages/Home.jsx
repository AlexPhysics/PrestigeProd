import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Workflow from '../components/Workflows';
import HowItWorks from '../components/HowItWorks';
import Partners from '../components/Partners';

const Home = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('home.pageTitle', 'Prestige Production | Premium Video & Photography Services');
  }, [t]);

  return (
    <>
      <Hero />
      <Highlights />
      <Workflow />
      <HowItWorks />
      <Partners />
    </>
  );
};

export default Home;
