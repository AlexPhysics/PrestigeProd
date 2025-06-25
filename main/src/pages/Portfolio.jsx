import React, { useRef, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../constants';
import SplitText from '../components/SplitText';
import TrueFocus from '../components/TrueFocus';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || i18n.language || 'en';

  useEffect(() => {
    document.title = t('portfolio.pageTitle', 'Our work | Prestige Production');
  }, [t]);
  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          y: 50,
          duration: 2.8,
          ease: 'power4.out',
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  {
    /* Line effect */
  }
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#section-title',
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      });

      tl.fromTo(
        '#underline',
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 2, ease: 'power2.out' },
      )
        .from(
          '#main-headline',
          { y: 40, opacity: 0, duration: 1, ease: 'power2.out' },
          '-=1.2',
        )
        .from(
          '#sub-headline',
          { y: 20, opacity: 0, duration: 1, ease: 'power2.out' },
          '-=0.8',
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className='relative py-16 bg-gradient-to-b from-black via-zinc-900 to-black text-white px-6 lg:px-24 font-sans'
    >
      {/* Hero Intro */}
      <div className='max-w-4xl mx-auto text-center mb-24 px-4 sm:px-6'>
        {/* Section Title with animated underline */}
        <div className='inline-block relative mb-6'>
          <h2
            id='section-title'
            className='text-sm font-semibold tracking-widest text-white mb-2 font-sans'
          >
            <TrueFocus
              sentence={t('portfolio.title', 'Our work')}
              manualMode={false}
              blurAmount={7.5}
              borderColor='rgba(45, 95, 89, 1)'
              animationDuration={0.4}
              pauseBetweenAnimations={3}
              className='font-sans' // ensure same font family
              preserveCase={true}
            />
          </h2>
          <div
            id='underline'
            className='absolute left-1/2 -translate-x-1/2 mt-4 h-[1px] w-48 bg-white/70 origin-center scale-x-0' // underline pushed further down
          />
        </div>

        {/* Main headline */}
        <h1
          id='main-headline'
          className='text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-tight mb-6'
        >
          {t('portfolio.subtitle', 'Discover how')}{' '}
          <span className='text-white/90'>Prestige Production</span>{' '}
          {t('portfolio.subtitleEnd', 'brings stories to life.')}
        </h1>

        {/* Subheadline */}
        <p
          id='sub-head-line'
          className='text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto'
        >
          {t(
            'portfolio.description',
            'From luxury real estate to high-end events, we craft cinematic journeys that elevate every project.',
          )}
        </p>
      </div>

      {/* Projects Grid - centered and constrained width */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto'>
        {projects.map((proj, idx) => (
          <Link
            key={proj.id}
            to={`/${currentLang}${proj.link}`}
            className='group block rounded-3xl overflow-hidden relative shadow-lg'
            ref={el => (cardsRef.current[idx] = el)}
          >
            {/* Ajouter un console.log pour débugger */}
            {console.log('Project image path:', proj.image)}

            {/* 16:9 Aspect Ratio Container */}
            <div className='w-full aspect-video overflow-hidden'>
              {proj.video ? (
                <video
                  playsInline
                  autoPlay
                  muted
                  loop
                  preload='auto'
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                >
                  <source src={proj.video} type='video/mp4' />
                </video>
              ) : (
                <img
                  src={proj.image}
                  alt={proj.title}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                  onError={e => {
                    console.error('Image failed to load:', proj.image);
                    e.target.src = '/assets/images/placeholder.jpg'; // Image de remplacement
                  }}
                />
              )}
            </div>

            {/* Title Overlay */}
            <div className='absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent p-4'>
              <h3 className='text-xl font-semibold text-white'>{proj.title}</h3>
            </div>
          </Link>
        ))}
      </div>
      {/* Reels Section */}
      <div
        id='reels'
        className='mt-32 max-w-6xl mx-auto text-center px-4 sm:px-6'
      >
        <h2 className='text-3xl sm:text-4xl font-semibold mb-12 tracking-tight'>
          {t('portfolio.reelsTitle', 'Social Media Reels')}
        </h2>

        {/* 1️⃣: list of video sources (public/ or imported) */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {[
            '/assets/videos/smi_reel_tavi.mp4',
            '/assets/videos/Reel_2_penthouse_speech.mp4',
            '/assets/videos/Reel_1_penthouse_view.mp4',
          ].map((src, i) => (
            <div
              key={i}
              ref={el => (cardsRef.current[projects.length + i] = el)}
              className='rounded-2xl overflow-hidden shadow-lg'
            >
              {/* 2️⃣: keep the same 9:16 aspect wrapper */}
              <div className='aspect-[9/16] w-full'>
                <video
                  src={src}
                  className='w-full h-full object-cover'
                  playsInline
                  muted
                  loop
                  autoPlay /* remove autoPlay if you prefer controls */
                  /* controls  // uncomment to show the play bar */
                >
                  {t(
                    'portfolio.browserNotSupported',
                    'Your browser does not support the video tag.',
                  )}
                </video>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
