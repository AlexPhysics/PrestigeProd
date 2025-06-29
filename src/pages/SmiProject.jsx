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
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

gsap.registerPlugin(ScrollTrigger);

const SmiProject = () => {
  // Enhanced video reels with metadata
  const videos = [
    {
      id: 'smi-reel-1',
      src: `${import.meta.env.VITE_CLOUDFRONT_URL}/videos/teaser 1_smi.mp4`,
      title: 'SMI Conference Opening',
      description: 'Exclusive opening moments of the mining conference',
      tags: ['Conference', 'Mining'],
      views: '15k+',
      type: 'Event Highlight',
    },
    {
      id: 'smi-reel-2',
      src: `${import.meta.env.VITE_CLOUDFRONT_URL}/videos/teaser 2_smi.mp4`,
      title: 'Industry Leaders',
      description: 'Key speakers and industry insights',
      tags: ['Speakers', 'Industry'],
      views: '12k+',
      type: 'Professional Content',
    },
    {
      id: 'smi-reel-3',
      src: `${import.meta.env.VITE_CLOUDFRONT_URL}/videos/teaser 3_smi.mp4`,
      title: 'Conference Highlights',
      description: 'Best moments from the two-day event',
      tags: ['Highlights', 'Event'],
      views: '18k+',
      type: 'Event Summary',
    },
  ];

  const videoRef = useRef();
  const containerRef = useRef();
  const parallaxRef = useRef();
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || i18n.language || 'en';

  // Clean title effect without DOM manipulation (Helmet handles SEO)
  useEffect(() => {
    document.title = t(
      'projects.smiTitle',
      'Swiss Mining Institute Event | Premium Event Coverage | Prestige Production',
    );
  }, [t]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Hero title animation
      gsap.fromTo(
        '#features_title',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          delay: 0.4,
          ease: 'power4.out',
        },
      );

      // Main video trigger with enhanced effect
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

      // Enhanced grow animations
      animateWithGsap(
        '.g_grow',
        { scale: 1, opacity: 1, ease: 'power2.out' },
        { scrub: 3.5 },
      );

      // Improved text animations
      animateWithGsap('.g_text', {
        y: 0,
        opacity: 1,
        ease: 'power2.inOut',
        duration: 1.2,
      });

      // Enhanced fade sections with stagger
      [
        '.fade-section-1',
        '.fade-section-2',
        '.fade-section-3',
        '.fade-section-4',
      ].forEach((selector, index) => {
        gsap.fromTo(
          selector,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            delay: index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: selector,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          },
        );
      });

      // Back link animation
      gsap.fromTo(
        '.after-link',
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          delay: 1,
          duration: 1,
          ease: 'power2.out',
        },
      );

      // Carousel enhancement
      gsap.fromTo(
        '.carousel-container',
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.carousel-container',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Parallax effect for background elements
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const parallax =
          parallaxRef.current.querySelectorAll('.parallax-element');
        parallax.forEach((element, index) => {
          const speed = 0.3 + index * 0.15;
          element.style.transform = `translateY(${scrolled * speed}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Enhanced SEO Meta Tags */}
      <Helmet>
        <title>
          {t(
            'projects.smi.seoTitle',
            'Swiss Mining Institute 2024 - Premium Event Production | Prestige Production',
          )}
        </title>
        <meta
          name='description'
          content={t(
            'projects.smi.seoDescription',
            'Discover our premium video production coverage of the Swiss Mining Institute 2024 - the most prestigious mining conference in Europe. Featuring exclusive interviews, aftermovies, and luxury event content.',
          )}
        />
        <meta
          name='keywords'
          content={t(
            'projects.smi.seoKeywords',
            'Swiss Mining Institute, luxury event production, mining conference video, premium corporate videos, event videography, conference coverage, aftermovie production',
          )}
        />
        <meta
          property='og:title'
          content={t(
            'projects.smi.seoTitle',
            'Swiss Mining Institute 2024 - Premium Event Production',
          )}
        />
        <meta
          property='og:description'
          content={t(
            'projects.smi.seoDescription',
            'Premium video production coverage of the most prestigious mining conference in Europe',
          )}
        />
        <meta property='og:type' content='article' />
        <meta name='twitter:card' content='summary_large_image' />
        <link
          rel='canonical'
          href={`https://prestigeproduction.ch/${currentLang}/portfolio/smi-project`}
        />
      </Helmet>

      <section
        ref={containerRef}
        className='min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white relative overflow-hidden'
      >
        {/* Decorative background elements with parallax */}
        <div
          ref={parallaxRef}
          className='absolute inset-0 overflow-hidden pointer-events-none'
        >
          <div className='parallax-element absolute top-32 left-10 w-64 h-64 bg-gradient-to-r from-[#205c57]/10 to-[#9eb6a9]/10 rounded-full blur-3xl'></div>
          <div className='parallax-element absolute bottom-40 right-10 w-80 h-80 bg-gradient-to-r from-[#9eb6a9]/5 to-[#205c57]/5 rounded-full blur-3xl'></div>
          <div className='parallax-element absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-[#205c57]/8 to-[#9eb6a9]/8 rounded-full blur-2xl'></div>
        </div>

        <div className='relative z-10 px-6 pt-20 pb-32'>
          {/* Back Link + Aftermovie Link - Enhanced styling */}
          <div className='max-w-6xl mx-auto mb-12 px-2 flex justify-between items-center after-link'>
            <Link
              to={`/${currentLang}/portfolio`}
              className='inline-flex items-center text-sm text-white/60 hover:text-[#9eb6a9] transition-all duration-300 group'
            >
              <svg
                className='w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 19l-7-7 7-7'
                />
              </svg>
              {t('projects.backToPortfolio', 'Go back to our work')}
            </Link>
            <a
              href='#aftermovie'
              onClick={e => {
                e.preventDefault();
                smoothScrollTo('aftermovie');
              }}
              className='inline-flex items-center text-sm tracking-wide text-white/60 hover:text-[#9eb6a9] transition-all duration-300 group'
            >
              {t(
                'projects.smi.watchAftermovie',
                'Watch the official aftermovie',
              )}
              <svg
                className='w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform duration-300'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 14l-7 7m0 0l-7-7m7 7V3'
                />
              </svg>
            </a>
          </div>

          {/* Enhanced Headings */}
          <div className='text-center max-w-4xl mx-auto mb-20'>
            <h1
              id='features_title'
              className='text-5xl md:text-6xl font-semibold tracking-tight mb-8 opacity-0 translate-y-6 overflow-visible leading-[1.1]'
            >
              <span className='inline-block animate-text-reveal'>
                {t('projects.smi.tagline', "It's all about luxury.")}
              </span>
            </h1>
            <div className='space-y-3'>
              <h2 className='hero-subtitle text-3xl lg:text-5xl font-light'>
                {t('projects.smi.title', 'Swiss Mining Institute 2024')}
              </h2>
              <h3 className='hero-subtitle text-xl lg:text-2xl text-white/70'>
                {t(
                  'projects.smi.subtitle',
                  'The most prestigious mining conference in the world',
                )}
              </h3>
            </div>
          </div>

          {/* Main Event Video with Enhanced Info */}
          <div className='fade-section-1 max-w-5xl mx-auto mb-24'>
            <div
              className='relative group cursor-pointer'
              onClick={() => setLightboxSrc(exploreVideo)}
            >
              <div className='overflow-hidden rounded-xl relative'>
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

                {/* Video Info Overlay - Always Visible */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6 rounded-xl'>
                  <div className='w-full'>
                    <div className='flex items-start justify-between mb-3'>
                      <h3 className='text-xl font-semibold text-white'>
                        {t('projects.smi.mainVideo.title', 'Event Highlights')}
                      </h3>
                      <span className='text-xs text-white/80 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full'>
                        {t('projects.smi.mainVideo.type', 'Highlight Reel')}
                      </span>
                    </div>

                    <p className='text-white/90 text-sm mb-3'>
                      {t(
                        'projects.smi.mainVideo.description',
                        'Premium coverage of the most exclusive mining conference in Europe, featuring luxury venues and high-profile networking.',
                      )}
                    </p>

                    <div className='flex items-center justify-between'>
                      <div className='flex flex-wrap gap-2'>
                        {[
                          'Luxury Event',
                          'Mining Conference',
                          'Premium Production',
                        ].map((tag, index) => (
                          <span
                            key={index}
                            className='text-xs text-[#9eb6a9] bg-[#9eb6a9]/20 backdrop-blur-sm px-2 py-1 rounded'
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className='flex items-center text-white/80 text-xs'>
                        <svg
                          className='w-3 h-3 mr-1'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
                          <path
                            fillRule='evenodd'
                            d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
                            clipRule='evenodd'
                          />
                        </svg>
                        {(12847).toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Image Grid with Lazy Loading */}
          <div className='fade-section-2 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-20'>
            {[explore1Img, explore2Img].map((src, i) => (
              <div
                key={i}
                className='overflow-hidden h-[50vh] rounded-xl cursor-pointer group'
                onClick={() => setLightboxSrc(src)}
              >
                <img
                  src={src}
                  alt={`${t('projects.smi.photoAlt', 'SMI Photo')} ${i + 1}`}
                  className='w-full h-full object-cover g_grow hover:scale-105 transition-transform duration-500 group-hover:brightness-110'
                  loading='lazy'
                  decoding='async'
                />
                {/* Subtle overlay on hover */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
              </div>
            ))}
          </div>

          {/* Video Carousel */}
          <div className='fade-section-2-carousel max-w-6xl mx-auto mb-24'>
            <div className='text-center mb-8'>
              <h2 className='text-3xl font-semibold mb-4'>
                {t('projects.smi.moreReels', 'More reels from the event')}
              </h2>
              <div className='flex items-center justify-center gap-2 md:gap-3 text-white/60 text-xs md:text-sm mb-6'>
                <div className='flex items-center gap-1'>
                  <div className='w-1 h-1 bg-[#9eb6a9] rounded-full'></div>
                  <div className='w-2 h-1 bg-[#9eb6a9]/60 rounded-full'></div>
                  <div className='w-1 h-1 bg-[#9eb6a9] rounded-full'></div>
                </div>
                <span className='hidden md:inline'>{t('projects.smi.swipeLeft', 'Swipe or drag to navigate')}</span>
                <span className='md:hidden'>{t('projects.smi.swipeLeft', 'Swipe to navigate')}</span>
                <div className='flex items-center gap-1'>
                  <div className='w-1 h-1 bg-[#9eb6a9] rounded-full'></div>
                  <div className='w-2 h-1 bg-[#9eb6a9]/60 rounded-full'></div>
                  <div className='w-1 h-1 bg-[#9eb6a9] rounded-full'></div>
                </div>
              </div>
            </div>
            <div className='min-h-[400px] md:h-[600px] flex items-center justify-center relative group px-4 md:px-0'>
              <div className='absolute inset-0 bg-gradient-to-r from-[#9eb6a9]/5 via-transparent to-[#9eb6a9]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none'></div>
              <Carousel items={videos} baseWidth={1000} loop={true} round={false} />
              {/* Improved drag hint overlay - hidden on mobile */}
              <div className='absolute top-4 right-4 bg-black/70 backdrop-blur-md rounded-lg px-4 py-2 text-sm text-white/90 items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/10 hidden md:flex'>
                <svg className='w-4 h-4 text-[#9eb6a9]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 16l-4-4m0 0l4-4m-4 4h18' />
                </svg>
                <span>{t('projects.smi.dragToExplore', 'Drag to explore')}</span>
              </div>
            </div>
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
              {t('projects.smi.andMore', 'and more, we delivered it all.')}
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

          {/* Enhanced Lightbox Modal with Accessibility */}
          {lightboxSrc && (
            <div
              className='fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4'
              onClick={() => setLightboxSrc(null)}
              role='dialog'
              aria-modal='true'
              aria-label={t('projects.smi.lightboxLabel', 'Media viewer')}
            >
              <button
                onClick={() => setLightboxSrc(null)}
                className='absolute top-4 right-4 text-white/80 hover:text-white text-2xl z-10 p-2 rounded-full bg-black/50 backdrop-blur-sm transition-all duration-300'
                aria-label={t('projects.smi.closeLightbox', 'Close viewer')}
              >
                ×
              </button>

              <div
                className='max-w-6xl w-full'
                onClick={e => e.stopPropagation()}
              >
                {lightboxSrc.endsWith('.mp4') ? (
                  <video
                    src={lightboxSrc}
                    controls
                    autoPlay
                    className='w-full h-auto max-h-[90vh] rounded-xl shadow-2xl'
                    preload='metadata'
                  />
                ) : (
                  <img
                    src={lightboxSrc}
                    alt={t('projects.smi.enlargedImage', 'Enlarged view')}
                    className='w-full h-auto max-h-[90vh] object-contain rounded-xl shadow-2xl'
                    loading='lazy'
                  />
                )}
              </div>
            </div>
          )}

          {/* Subtle Partner Credit */}
          <div className='mt-2 text-center border-t border-white/5 pt-2'>
            <p className='text-white/40 text-sm font-light tracking-wider'>
              {t('projects.smi.partnerCredit', 'Project delivered in partnership with')}{' '}
              <a
                href='https://www.swissmininginstitute.ch/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white/60 hover:text-[#9eb6a9] transition-colors duration-300 font-medium'
              >
                {t('projects.smi.partnerName', 'Swiss Mining Institute')}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SmiProject;
