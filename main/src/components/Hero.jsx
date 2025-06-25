import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useEffect, useState } from 'react';
import TrueFocus from './TrueFocus';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo,
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 1 });
    gsap.to('#cta', { opacity: 1, y: -50, delay: 1 });
    // Animate the gradient on the word "prestige"
    gsap.to('#prestige', {
      backgroundPosition: '200% center',
      duration: 3,
      ease: 'power3.inOut',
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <section className='w-full nav-height bg-black relative pt-20 md:pt-28'>
      {/* Augmenté le padding top sur mobile pour éviter que le contenu se retrouve sous la navbar */}
      <div className='h-5/6 w-full flex-center flex-col'>
        {/* Ajouté plus de marge top pour les petits appareils */}
        <div className='mt-8 sm:mt-0 mb-6 sm:mb-8 text-4xl sm:text-6xl font-light tracking-tight font-sans'>
          <TrueFocus
            sentence='Prestige Production'
            manualMode
            blurAmount={7.5}
            borderColor='rgba(45, 95, 89, 1)'
            glowColor='rgba(255, 0, 0, 0.6)'
            animationDuration={0.4}
            pauseBetweenAnimations={3}
          />
        </div>
        <p id='hero' className='hero-title mb-4 sm:mb-6'>
          {t('hero.title')}
        </p>
        <div className='md:w-10/12 w-9/12'>
          <video
            className='pointer-events-none'
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type='video/mp4' />
          </video>
        </div>
      </div>

      <div
        id='cta'
        className='flex flex-col items-center opacity-0 translate-y-20'
      >
        <Link to='/contact' className='btn'>
          {t('contactSection.cta')}
        </Link>
        <p className='font-normal text-xl'>
          {t('contactSection.projectInfo')}
        </p>
      </div>
    </section>
  );
};

export default Hero;
