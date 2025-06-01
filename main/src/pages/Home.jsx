import { useEffect } from 'react';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Workflow from '../components/Workflows';
import HowItWorks from '../components/HowItWorks';
import Partners from '../components/Partners';

const Home = () => {
  useEffect(() => {
    document.title = 'Home | Prestige Production';
  }, []);

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
