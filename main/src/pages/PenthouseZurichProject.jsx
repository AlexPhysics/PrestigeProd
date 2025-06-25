import { useGSAP } from '@gsap/react';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Link, useParams } from 'react-router-dom';
import { animateWithGsap } from '../utils/animations';
import { smiLogo } from '../utils';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

const PenthouseZurichProject = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || i18n.language || 'en';

  useEffect(() => {
    document.title = t(
      'projects.penthouseTitle',
      'A Penthouse Story | Prestige Production'
    );
  }, [t]);

  useGSAP(() => {
    gsap.to('#title', {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: 'power4.out',
    });

    animateWithGsap('.fade-section', {
      y: 0,
      opacity: 1,
      ease: 'power2.out',
      duration: 1.2,
    });
  }, []);

  const reels = [
    '/assets/videos/Reel_1_penthouse_view.mp4',
    '/assets/videos/Reel_2_penthouse_speech.mp4',
  ];

  return (
    <section className='min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white px-6 pt-20 pb-32 relative'>
      {/* Back link - Updated with language prefix */}
      <div className='max-w-6xl mx-auto mb-12 px-2'>
        <Link
          to={`/${currentLang}/portfolio`}
          className='text-sm text-white/60 hover:text-white transition duration-300'
        >
          ← {t('projects.backToPortfolio', 'Go back to our work')}
        </Link>
      </div>

      {/* Title */}
      <div className='text-center max-w-4xl mx-auto mb-16'>
        <h1
          id='title'
          className='text-5xl md:text-6xl font-semibold tracking-tight mb-4 opacity-0 translate-y-6'
        >
          {t('projects.penthouse.title', 'A Penthouse Story')}
        </h1>
        <h2 className='text-2xl md:text-3xl font-light text-white/80'>
          {t('projects.penthouse.location', 'Zurich | Prestige Real Estate')}
        </h2>
      </div>

      {/* Description */}
      <div className='fade-section max-w-3xl text-center mx-auto mb-20 px-4'>
        <p className='text-lg text-white/80 leading-relaxed'>
          {t(
            'projects.penthouse.description',
            "We partnered with Zurich Sotheby's International Realty to bring to life one of Zurich's most exceptional properties — a 304 m² penthouse perched atop the Mobimo Tower. Through cinematic visuals, architectural storytelling, and a detail-oriented production process, we created a complete content suite tailored to the luxury market. From short-form reels to long-form film, every asset was crafted to reflect the sophistication of both the property and the brand behind it."
          )}
          <br />
          <br />
          📍{' '}
          <span className='text-white'>
            {t(
              'projects.penthouse.address',
              'Turbinenstrasse 18, 8005 Zürich, Switzerland'
            )}
          </span>
          <br />
          🔗{' '}
          <a
            href='https://www.zurichsothebysrealty.com'
            target='_blank'
            rel='noopener noreferrer'
            className='underline hover:text-white'
          >
            {t('projects.penthouse.website', 'www.zurichsothebysrealty.com')}
          </a>
          <br />
          🥇{' '}
          {t(
            'projects.penthouse.thanks',
            "A huge thank you to Zurich Sotheby's Realty and Soroush Efati."
          )}
        </p>
      </div>

      {/* Main YouTube Video */}
      <div className='fade-section max-w-5xl mx-auto mb-24'>
        <div className='aspect-video w-full rounded-xl overflow-hidden shadow-lg'>
          <iframe
            width='100%'
            height='100%'
            src='https://www.youtube.com/embed/VcBclEEyqG4?modestbranding=1&rel=0&controls=1'
            title='Penthouse Zurich'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Reels */}
      <div className='fade-section flex justify-center flex-wrap gap-6 mb-24'>
        {reels.map((src, i) => (
          <div
            key={src}
            className='relative w-[90vw] max-w-[360px] aspect-[9/16] rounded-2xl overflow-hidden shadow-lg'
          >
            <video
              src={src}
              title={`${t('projects.penthouse.reelTitle', 'Reel')} ${
                i + 1
              }`}
              controls
              playsInline
              preload='metadata'
              className='w-full h-full object-cover'
            />
          </div>
        ))}
      </div>

      {/* Optional branding */}
      <div className='mt-28 text-center pt-12'>
        <div className='mx-auto mb-6 h-[1px] w-32 bg-white/10'></div>
        <p className='text-white/60 uppercase tracking-wider text-xs mb-6'>
          {t('projects.penthouse.branding', 'A Prestige Production')}
        </p>
        <img
          src={smiLogo}
          alt='Prestige'
          className='w-32 h-auto mx-auto animate-rotate-3d'
          style={{
            transformStyle: 'preserve-3d',
            perspective: '1000px',
            boxShadow: '0 20px 40px rgba(255,255,255,0.05)',
          }}
        />
      </div>
    </section>
  );
};

export default PenthouseZurichProject;
