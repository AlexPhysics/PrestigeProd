import { useGSAP } from '@gsap/react';
import React, { useRef, useState, useEffect } from 'react';
import { animateWithGsap } from '../utils/animations';
import {
  explore1Img,
  explore2Img,
  exploreVideo,
  frameImg,
  smoothScrollTo,
} from '../utils';
import gsap from 'gsap';
import { Link, useParams } from 'react-router-dom';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { smiLogo } from '../utils';
import Carousel from '../components/Carousel';
import SmiReel1 from '/assets/videos/teaser 1_smi.mp4';
import SmiReel2 from '/assets/videos/teaser 2_smi.mp4';
import SmiReel3 from '/assets/videos/teaser 3_smi.mp4';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

const SmiProject = () => {
  const videos = [
    { id: 1, src: SmiReel1 },
    { id: 2, src: SmiReel2 },
    { id: 3, src: SmiReel3 },
  ];

  const videoRef = useRef();
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || i18n.language || 'en';

  useEffect(() => {
    document.title = t(
      'projects.smiTitle',
      'Swiss Mining Institute | Prestige Production',
    );
  }, [t]);

  useGSAP(() => {
    gsap.to('#exploreVideo', {
      scrollTrigger: {
        trigger: '#exploreVideo',
        toggleActions: 'play pause reverse restart',
        start: '-10% bottom',
      },
      onComplete: () => {
        videoRef.current?.play();
      },
    });

    gsap.to('#features_title', {
      opacity: 1,
      y: 0,
      duration: 1.5,
      delay: 0.4,
      ease: 'power4.out',
    });

    animateWithGsap(
      '.g_grow',
      { scale: 1, opacity: 1, ease: 'power1' },
      { scrub: 5.5 },
    );

    animateWithGsap('.g_text', {
      y: 0,
      opacity: 1,
      ease: 'power2.inOut',
      duration: 1,
    });

    [
      '.fade-section-1',
      '.fade-section-2',
      '.fade-section-3',
      '.fade-section-4',
    ].forEach(selector => {
      gsap.from(selector, {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: selector,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    gsap.from('.after-link', {
      opacity: 0,
      y: -20,
      delay: 1,
      duration: 1,
      ease: 'power2.out',
    });
  }, []);

  return (
    <section className='min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white px-6 pt-20 pb-32 relative'>
      {/* Back Link + Aftermovie Link - Updated with language prefix */}
      <div className='max-w-6xl mx-auto mb-12 px-2 flex justify-between items-center'>
        <Link
          to={`/${currentLang}/portfolio`}
          className='text-sm text-white/60 hover:text-white transition duration-300'
        >
          ← {t('projects.backToPortfolio', 'Go back to our work')}
        </Link>{' '}
        <a
          href='#aftermovie'
          onClick={e => {
            e.preventDefault();
            smoothScrollTo('aftermovie');
          }}
          className='text-sm tracking-wide text-white/60 hover:text-white transition duration-300'
        >
          {t('projects.smi.watchAftermovie', 'Watch the official aftermovie')} ↓
        </a>
      </div>

      {/* Headings */}
      <div className='text-center max-w-4xl mx-auto mb-20'>
        <h1
          id='features_title'
          className='text-5xl md:text-6xl font-semibold tracking-tight mb-4 opacity-0 translate-y-6 overflow-hidden'
        >
          <span className='inline-block animate-text-reveal'>
            {t('projects.smi.tagline', "It's all about luxury.")}
          </span>
        </h1>
        <h2 className='text-3xl lg:text-5xl font-light mb-2'>
          {t('projects.smi.title', 'Swiss Mining Institute 2024')}
        </h2>
        <h3 className='text-xl lg:text-2xl text-white/70'>
          {t(
            'projects.smi.subtitle',
            'The most prestigious mining conference in the world',
          )}
        </h3>
      </div>

      {/* Main Event Video */}
      <div className='fade-section-1 max-w-5xl mx-auto mb-24 cursor-pointer'>
        <div
          className='overflow-hidden rounded-xl relative'
          onClick={() => setLightboxSrc(exploreVideo)}
        >
          <video
            playsInline
            id='exploreVideo'
            className='w-full h-auto max-h-[600px] object-cover rounded-xl'
            preload='none'
            loop
            muted
            autoPlay
            ref={videoRef}
          >
            <source src={exploreVideo} type='video/mp4' />
          </video>
        </div>
      </div>

      {/* Image Grid */}
      <div className='fade-section-2 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-20'>
        {[explore1Img, explore2Img].map((src, i) => (
          <div
            key={i}
            className='overflow-hidden h-[50vh] rounded-xl cursor-pointer'
            onClick={() => setLightboxSrc(src)}
          >
            <img
              src={src}
              alt={`${t('projects.smi.photoAlt', 'SMI Photo')} ${i + 1}`}
              className='w-full h-full object-cover g_grow hover:scale-105 transition-transform duration-300'
            />
          </div>
        ))}
      </div>

      <div className='h-[600px] flex items-center justify-center'>
        <Carousel items={videos} baseWidth={1000} loop round={false} />
      </div>

      {/* Description Text */}
      <div className='fade-section-3 space-y-12 max-w-3xl mx-auto mb-24 px-4'>
        <p className='text-lg text-white/80 g_text'>
          {t('projects.smi.intro1Part1', 'The Swiss Mining Institute is')}{' '}
          <span className='text-white'>
            {t(
              'projects.smi.intro1Part2',
              'the biggest and most exclusive mining conference in Europe',
            )}
          </span>
          .{' '}
          {t(
            'projects.smi.intro1Part3',
            'Hosting 1000+ investors, 100+ listed companies and over 2700 meetings arranged over 2 days.',
          )}
        </p>
        <p className='text-lg text-white/80 g_text'>
          {t('projects.smi.intro2Part1', 'For two days, we captured')}{' '}
          <span className='text-white'>
            {t(
              'projects.smi.intro2Part2',
              'everything a camera lens could reach',
            )}
          </span>
          . {t('projects.smi.intro2Part3', 'From')}{' '}
          <span className='text-white'>
            {t('projects.smi.interviews', 'interviews')}
          </span>
          ,{' '}
          <span className='text-white'>
            {t('projects.smi.panels', 'panel discussions')}
          </span>{' '}
          {t('projects.smi.and', 'and')} {t('projects.smi.the', 'the')}{' '}
          <span className='text-white'>
            {t('projects.smi.aftermovie', 'official aftermovie')}
          </span>{' '}
          {t('projects.smi.to', 'to')}{' '}
          <span className='text-white'>
            {t('projects.smi.photos', 'photos')}
          </span>
          ,{' '}
          <span className='text-white'>
            {t('projects.smi.social', 'social content')}
          </span>{' '}
          {t('projects.smi.andMore', 'and more — we delivered it all.')}
        </p>
      </div>

      {/* YouTube Aftermovie */}
      <div
        id='aftermovie'
        className='fade-section-4 max-w-5xl mx-auto mb-24 text-center scroll-mt-40'
      >
        <h2 className='text-3xl font-semibold mb-2 relative inline-block after:block after:h-[2px] after:bg-white/40 after:w-0 after:absolute after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-700'>
          {t(
            'projects.smi.watchOfficialAftermovie',
            'Watch the Official Aftermovie',
          )}
        </h2>
        <div className='aspect-video w-full mt-6 rounded-xl overflow-hidden shadow-lg'>
          <iframe
            width='100%'
            height='100%'
            src='https://www.youtube.com/embed/8wwsxj5VIFI'
            title={t('projects.smi.aftermovieTitle', 'Official Aftermovie')}
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* YouTube Interview */}
      <div className='fade-section-4 max-w-5xl mx-auto text-center mb-24'>
        <h2 className='text-3xl font-semibold mb-2 relative inline-block after:block after:h-[2px] after:bg-white/40 after:w-0 after:absolute after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-700'>
          {t('projects.smi.featuredInterviews', 'Featured Interviews')}
        </h2>
        {/* New description text */}
        <p className='mt-4 text-lg text-white/80 max-w-3xl mx-auto'>
          {t(
            'projects.smi.interviewsDesc',
            "We've had the privilege to sit down with trail-blazing CEOs and forward-thinking investors who are reshaping the mining ecosystem. Dive in for candid insights you won't hear anywhere else.",
          )}
        </p>
        <div className='aspect-video w-full mt-6 rounded-xl overflow-hidden shadow-lg'>
          <iframe
            width='100%'
            height='100%'
            src='https://www.youtube.com/embed/WkSTG_GQUJQ'
            title={t('projects.smi.interviewTitle', 'Interview')}
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
        <div className='aspect-video w-full mt-6 rounded-xl overflow-hidden shadow-lg'>
          <iframe
            width='100%'
            height='100%'
            src='https://www.youtube.com/embed/y2YmLoOGi_w'
            title={t('projects.smi.interviewTitle', 'Interview')}
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxSrc && (
        <div
          className='fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center'
          onClick={() => setLightboxSrc(null)}
        >
          <div className='max-w-6xl w-full px-6'>
            {lightboxSrc.endsWith('.mp4') ? (
              <video
                src={lightboxSrc}
                controls
                autoPlay
                className='w-full h-auto max-h-[90vh] rounded-xl'
              />
            ) : (
              <img
                src={lightboxSrc}
                alt={t('projects.smi.enlargedImage', 'Enlarged')}
                className='w-full h-auto max-h-[90vh] object-contain rounded-xl'
              />
            )}
          </div>
        </div>
      )}
      {/* Partner Acknowledgment */}
      <div className='mt-28 text-center pt-12'>
        <div className='mx-auto mb-6 h-[1px] w-32 bg-white/10'></div>
        <p className='text-white/60 uppercase tracking-wider text-xs mb-6'>
          {t('projects.smi.thanks', 'Thanks to our partner')}
        </p>
        <a
          href='https://www.swissmininginstitute.ch/'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block hover:scale-105 transition-transform duration-500'
        >
          <img
            src={smiLogo}
            alt={t('projects.smi.partnerName', 'Swiss Mining Institute')}
            className='w-32 h-auto mx-auto animate-rotate-3d'
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1000px',
              boxShadow: '0 20px 40px rgba(255,255,255,0.05)',
            }}
          />
        </a>
      </div>
    </section>
  );
};

export default SmiProject;
