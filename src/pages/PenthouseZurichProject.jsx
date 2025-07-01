import { useGSAP } from '@gsap/react';
import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { animateWithGsap } from '../utils/animations';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

const PenthouseZurichProject = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || i18n.language || 'en';
  const containerRef = useRef(null);
  const parallaxRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // SEO optimized title for real estate video marketing in Switzerland
    document.title = t(
      'projects.penthouseSeoTitle',
      'Luxury Real Estate Video Production Zurich | Penthouse Marketing Switzerland | Prestige Production',
    );

    // Add meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        t(
          'projects.penthouseSeoDescription',
          'Professional real estate video production in Zurich, Switzerland. Luxury property marketing with cinematic videos, social media content, and premium photography. Boost property sales with our expert video services across Switzerland.',
        ),
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = t(
        'projects.penthouseSeoDescription',
        'Professional real estate video production in Zurich, Switzerland. Luxury property marketing with cinematic videos, social media content, and premium photography. Boost property sales with our expert video services across Switzerland.',
      );
      document.head.appendChild(meta);
    }

    // Add keywords meta tag
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute(
        'content',
        t(
          'projects.penthouseSeoKeywords',
          'real estate video Zurich, luxury property video Switzerland, real estate marketing Zurich, property video production Switzerland, cinematic real estate videos, Swiss real estate photography, luxury home videos Zurich, real estate content creation Switzerland',
        ),
      );
    } else {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      metaKeywords.content = t(
        'projects.penthouseSeoKeywords',
        'real estate video Zurich, luxury property video Switzerland, real estate marketing Zurich, property video production Switzerland, cinematic real estate videos, Swiss real estate photography, luxury home videos Zurich, real estate content creation Switzerland',
      );
      document.head.appendChild(metaKeywords);
    }
  }, [t]);

  // Parallax effect for background elements
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const parallax =
          parallaxRef.current.querySelectorAll('.parallax-element');
        parallax.forEach((element, index) => {
          const speed = 0.3 + index * 0.1;
          element.style.transform = `translateY(${scrolled * speed}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      const tl = gsap.timeline();

      tl.to('#title', {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power4.out',
      })
        .to(
          '#subtitle',
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
          },
          '-=1',
        )
        .to(
          '#back-link',
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power2.out',
          },
          '-=1.5',
        );

      // Stagger animations for content sections
      gsap.fromTo(
        '.fade-section',
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.fade-section',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        },
      );

      // Project stats animation
      gsap.fromTo(
        '.stat-item',
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.stats-section',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const reels = [
    {
      id: 'penthouse-reel-1',
      src: `${
        import.meta.env.VITE_CLOUDFRONT_URL
      }/videos/Reel_1_penthouse_view.mp4`,
      title: 'Penthouse Views',
      description: 'Stunning property views for social platforms',
      tags: ['Property', 'Views'],
      views: '28k+',
      type: 'Instagram Reel',
    },
    {
      id: 'penthouse-reel-2',
      src: `${
        import.meta.env.VITE_CLOUDFRONT_URL
      }/videos/Reel_2_penthouse_speech.mp4`,
      title: 'Penthouse Experience',
      description: 'Luxury real estate social content',
      tags: ['Real Estate', 'Luxury'],
      views: '50k+',
      type: 'Social Media Content',
    },
  ];

  return (
    <section
      ref={containerRef}
      className='min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white relative overflow-hidden'
    >
      {/* Decorative background elements with parallax */}
      <div
        ref={parallaxRef}
        className='absolute inset-0 overflow-hidden pointer-events-none'
      >
        <div className='parallax-element absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-[#2d5f59]/10 to-[#F4FF78]/10 rounded-full blur-3xl'></div>
        <div className='parallax-element absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-r from-[#F4FF78]/5 to-[#2d5f59]/5 rounded-full blur-3xl'></div>
        <div className='parallax-element absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-[#2d5f59]/8 to-[#F4FF78]/8 rounded-full blur-2xl'></div>
      </div>

      <div className='relative z-10 px-6 pt-20 pb-32'>
        {/* Back link - Enhanced with animation */}
        <motion.div
          id='back-link'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='max-w-6xl mx-auto mb-12 px-2'
        >
          <Link
            to={`/${currentLang}/portfolio`}
            className='inline-flex items-center text-sm text-white/60 hover:text-[#F4FF78] transition-all duration-300 group'
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
        </motion.div>

        {/* Hero Section - Enhanced */}
        <div className='text-center max-w-5xl mx-auto mb-20'>
          <motion.div className='mb-6 flex justify-end'>
            <span className='inline-block px-3 py-1 bg-white/5 backdrop-blur-sm rounded-md text-xs text-white/60 border border-white/10 font-medium tracking-wider uppercase'>
              {t('projects.penthouse.category', 'Luxury Real Estate')}
            </span>
          </motion.div>

          <h1
            id='title'
            className='text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6 opacity-0 translate-y-6 bg-gradient-to-r from-white via-white to-[#F4FF78] bg-clip-text text-transparent py-4'
            style={{ lineHeight: '1.15' }}
          >
            {t('projects.penthouse.title', 'A Penthouse Story')}
          </h1>

          <h2
            id='subtitle'
            className='text-xl md:text-2xl font-light text-white/70 mb-8 opacity-0 translate-y-4'
          >
            {t('projects.penthouse.location', 'Zurich | Prestige Real Estate')}
          </h2>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              onClick={() => {
                document.getElementById('results-section')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }}
              className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#2d5f59]/20 to-[#F4FF78]/20 backdrop-blur-sm rounded-full text-[#F4FF78] border border-[#F4FF78]/30 hover:border-[#F4FF78]/60 transition-all duration-300 group hover:scale-105'
            >
              <span className='text-sm font-medium mr-2'>
                {t('projects.penthouse.viewResults', 'View Results')}
              </span>
              <svg
                className='w-4 h-4 group-hover:translate-y-1 transition-transform duration-300'
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
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              onClick={() => {
                document.getElementById('why-video-section')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }}
              className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-white/10 to-white/20 backdrop-blur-sm rounded-full text-white border border-white/30 hover:border-white/60 transition-all duration-300 group hover:scale-105'
            >
              <span className='text-sm font-medium mr-2'>
                {t('projects.penthouse.whyVideo', 'Why Video Sells')}
              </span>
              <svg
                className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Project Description - Enhanced */}
        <div className='fade-section max-w-4xl mx-auto mb-24 px-4'>
          <div className='bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10'>
            <div className='flex items-center mb-6'>
              <div className='w-12 h-12 bg-gradient-to-r from-[#2d5f59]/20 to-[#F4FF78]/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4 border border-[#F4FF78]/30'>
                <svg
                  className='w-6 h-6 text-[#F4FF78]'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={1.5}
                    d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold text-white'>
                {t('projects.penthouse.projectTitle', 'Project Overview')}
              </h3>
            </div>

            <p className='text-lg text-white/80 leading-relaxed mb-8'>
              {t(
                'projects.penthouse.description',
                "We partnered with Zurich Sotheby's International Realty to bring to life one of Zurich's most exceptional properties, a 304 m² penthouse perched atop the Mobimo Tower. Through cinematic visuals, architectural storytelling, and a detail-oriented production process, we created a complete content suite tailored to the luxury market.",
              )}
            </p>

            <div className='grid md:grid-cols-3 gap-6 text-sm'>
              <div className='flex items-center text-white/70'>
                <span className='text-lg mr-3'>📍</span>
                <div>
                  <div className='text-white font-medium'>
                    {t(
                      'projects.penthouse.address',
                      'Turbinenstrasse 18, 8005 Zürich',
                    )}
                  </div>
                  <div className='text-white/60'>{t('projects.location', 'Switzerland')}</div>
                </div>
              </div>

              <div className='flex items-center text-white/70'>
                <span className='text-lg mr-3'>🔗</span>
                <div>
                  <a
                    href='https://www.zurichsothebysrealty.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-[#F4FF78] hover:text-white transition-colors duration-300 underline'
                  >
                    {t(
                      'projects.penthouse.website',
                      'zurichsothebysrealty.com',
                    )}
                  </a>
                </div>
              </div>

              <div className='flex items-center text-white/70'>
                <span className='text-lg mr-3'>🤝</span>
                <div>
                  <div className='text-white font-medium'>
                    {t('projects.penthouse.partner', "Zurich Sotheby's")}
                  </div>
                  <div className='text-white/60'>& Soroush Efati</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main YouTube Video - Enhanced */}
        <div className='fade-section max-w-6xl mx-auto mb-24'>
          <div className='text-center mb-8'>
            <h3 className='text-2xl md:text-3xl font-semibold mb-4 text-white'>
              {t('projects.penthouse.mainVideo', 'Featured Film')}
            </h3>
            <p className='text-white/60 max-w-2xl mx-auto'>
              {t(
                'projects.penthouse.mainVideoDesc',
                'Experience the complete cinematic journey through this exceptional property',
              )}
            </p>
          </div>

          <div className='relative group'>
            <div className='absolute -inset-4 bg-gradient-to-r from-[#2d5f59]/20 to-[#F4FF78]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300'></div>
            <div className='relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10'>
              {!videoLoaded && (
                <div className='absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center'>
                  <div className='w-16 h-16 border-2 border-[#2d5f59] border-t-[#F4FF78] rounded-full animate-spin'></div>
                </div>
              )}
              <iframe
                width='100%'
                height='100%'
                src='https://www.youtube.com/embed/VcBclEEyqG4?modestbranding=1&rel=0&controls=1'
                title='Penthouse Zurich'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                onLoad={() => setVideoLoaded(true)}
                className={`transition-opacity duration-500 ${
                  videoLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              ></iframe>
            </div>
          </div>
        </div>

        {/* Social Media Results - New Section */}
        <div
          id='results-section'
          className='fade-section max-w-6xl mx-auto mb-24'
        >
          <div className='text-center mb-16'>
            <h3 className='text-2xl md:text-3xl font-semibold mb-4 text-white'>
              {t('projects.penthouse.resultsTitle', 'Social Media Results')}
            </h3>
            <p className='text-white/60 max-w-2xl mx-auto'>
              {t(
                'projects.penthouse.resultsDesc',
                'Exceptional engagement and performance across platforms',
              )}
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, margin: '-50px' }}
              className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center group hover:border-[#F4FF78]/50 transition-all duration-300'
            >
              <div className='text-4xl mb-4'>📈</div>
              <div className='text-3xl font-bold bg-gradient-to-r from-[#2d5f59] to-[#F4FF78] bg-clip-text text-transparent mb-2'>
                50K+
              </div>
              <div className='text-white/80 font-medium mb-1'>
                {t('projects.penthouse.results.views', 'Total Views')}
              </div>
              <div className='text-white/60 text-sm'>
                {t(
                  'projects.penthouse.results.viewsDesc',
                  'Across all platforms',
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: false, margin: '-50px' }}
              className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center group hover:border-[#F4FF78]/50 transition-all duration-300'
            >
              <div className='text-4xl mb-4'>❤️</div>
              <div className='text-3xl font-bold bg-gradient-to-r from-[#2d5f59] to-[#F4FF78] bg-clip-text text-transparent mb-2'>
                1K+
              </div>
              <div className='text-white/80 font-medium mb-1'>
                {t('projects.penthouse.results.likes', 'Likes')}
              </div>
              <div className='text-white/60 text-sm'>
                {t(
                  'projects.penthouse.results.likesDesc',
                  'High engagement rate',
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, margin: '-50px' }}
              className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center group hover:border-[#F4FF78]/50 transition-all duration-300'
            >
              <div className='text-4xl mb-4'>💬</div>
              <div className='text-3xl font-bold bg-gradient-to-r from-[#2d5f59] to-[#F4FF78] bg-clip-text text-transparent mb-2'>
                100+
              </div>
              <div className='text-white/80 font-medium mb-1'>
                {t('projects.penthouse.results.comments', 'Comments')}
              </div>
              <div className='text-white/60 text-sm'>
                {t(
                  'projects.penthouse.results.commentsDesc',
                  'Active community',
                )}
              </div>
            </motion.div>
          </div>

          {/* Key Achievements */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false, margin: '-50px' }}
              className='bg-gradient-to-r from-[#2d5f59]/10 to-[#F4FF78]/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10'
            >
              <div className='flex items-center mb-4'>
                <div className='text-2xl mr-3'>🏆</div>
                <h4 className='text-lg font-semibold text-white'>
                  {t(
                    'projects.penthouse.results.topPerformer',
                    '#2 Best Performing Reel',
                  )}
                </h4>
              </div>
              <p className='text-white/70'>
                {t(
                  'projects.penthouse.results.topPerformerDesc',
                  "Second highest engagement on Zurich Sotheby's Instagram page",
                )}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false, margin: '-50px' }}
              className='bg-gradient-to-r from-[#F4FF78]/10 to-[#2d5f59]/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10'
            >
              <div className='flex items-center mb-4'>
                <div className='text-2xl mr-3'>🚀</div>
                <h4 className='text-lg font-semibold text-white'>
                  {t('projects.penthouse.results.growth', '7x More Views')}
                </h4>
              </div>
              <p className='text-white/70'>
                {t(
                  'projects.penthouse.results.growthDesc',
                  'Than their usual content + significant follower growth',
                )}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Reels Section - Enhanced */}
        <div className='fade-section max-w-6xl mx-auto mb-24'>
          <div className='text-center mb-16'>
            <h3 className='text-2xl md:text-3xl font-semibold mb-4 text-white'>
              {t('projects.penthouse.reelsTitle', 'Social Media Content')}
            </h3>
            <p className='text-white/60 max-w-2xl mx-auto'>
              {t(
                'projects.penthouse.reelsDesc',
                'Short-form content optimized for social media platforms',
              )}
            </p>
          </div>

          <div className='flex justify-center flex-wrap gap-8'>
            {reels.map((reel, i) => (
              <motion.div
                key={reel.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: false, margin: '-50px' }}
                whileHover={{ scale: 1.05, y: -10 }}
                className='group relative'
              >
                <div className='absolute -inset-2 bg-gradient-to-r from-[#2d5f59]/20 to-[#F4FF78]/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300'></div>
                <div className='relative w-[90vw] max-w-[300px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border border-white/20'>
                  {/* Social Media Badge */}
                  <div className='absolute top-3 left-3 z-10'>
                    <span className='px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded border border-white/20 font-medium'>
                      {t('projects.penthouse.reelBadge', 'Social Media')}
                    </span>
                  </div>

                  <video
                    src={reel.src}
                    title={reel.title}
                    controls
                    playsInline
                    preload='metadata'
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                    className='group-hover:scale-110 transition-transform duration-700'
                    onLoadedMetadata={(e) => {
                      // Ensure proper aspect ratio handling in fullscreen
                      e.target.style.maxHeight = '100vh';
                      e.target.style.maxWidth = '100vw';
                    }}
                  />

                  {/* View counter - simple text with contrast */}
                  <div className='absolute top-3 right-3 z-10'>
                    <div className='flex items-center'>
                      <svg
                        className='w-3 h-3 mr-1 text-[#9EB6A9]'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        style={{ filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.8))' }}
                      >
                        <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
                        <path
                          fillRule='evenodd'
                          d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                      <span 
                        className='text-[#9EB6A9] text-xs font-medium'
                        style={{ 
                          textShadow: '0 1px 3px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.6)' 
                        }}
                      >
                        {reel.views}
                      </span>
                    </div>
                  </div>

                  {/* Title overlay - positioned at bottom */}
                  <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none'>
                    <div className='p-3'>
                      <h3 className='text-white font-medium text-sm'>
                        {reel.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Partner With Us - For Real Estate Agents */}
        <div
          id='why-video-section'
          className='fade-section max-w-6xl mx-auto mb-24'
        >
          <div className='text-center mb-16'>
            <h3 className='text-2xl md:text-3xl font-semibold mb-4 text-white'>
              {t(
                'projects.penthouse.whyUsTitle',
                'Why premium content sells properties faster',
              )}
            </h3>
            <p className='text-white/60 max-w-2xl mx-auto'>
              {t(
                'projects.penthouse.whyUsDesc',
                'Data-driven insights on how professional video content transforms real estate marketing',
              )}
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Left side - Statistics and Benefits */}
            <div className='space-y-8'>
              {/* Stat Cards */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: false, margin: '-50px' }}
                  className='bg-gradient-to-br from-[#2d5f59]/20 to-[#F4FF78]/20 backdrop-blur-sm rounded-2xl p-6 border border-[#F4FF78]/30 text-center'
                >
                  <div className='text-3xl font-bold bg-gradient-to-r from-[#2d5f59] to-[#F4FF78] bg-clip-text text-transparent mb-2'>
                    403%
                  </div>
                  <div className='text-white/80 text-sm font-medium'>
                    {t(
                      'projects.penthouse.whyUs.stat1',
                      'More Inquiries',
                    )}
                  </div>
                  <div className='text-white/60 text-xs mt-1'>
                    {t(
                      'projects.penthouse.whyUs.stat1Desc',
                      'For listings with video content',
                    )}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: false, margin: '-50px' }}
                  className='bg-gradient-to-br from-[#F4FF78]/20 to-[#2d5f59]/20 backdrop-blur-sm rounded-2xl p-6 border border-[#F4FF78]/30 text-center'
                >
                  <div className='text-3xl font-bold bg-gradient-to-r from-[#F4FF78] to-[#2d5f59] bg-clip-text text-transparent mb-2'>
                    68%
                  </div>
                  <div className='text-white/80 text-sm font-medium'>
                    {t('projects.penthouse.whyUs.stat2', 'Faster Sales')}
                  </div>
                  <div className='text-white/60 text-xs mt-1'>
                    {t(
                      'projects.penthouse.whyUs.stat2Desc',
                      'For homes with aerial footage',
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Benefits List */}
              <div className='space-y-4'>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: false, margin: '-50px' }}
                  className='flex items-start p-4 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-xl border border-white/10'
                >
                  <div className='w-8 h-8 mr-4 flex-shrink-0 flex items-center justify-center'>
                    <svg
                      className='w-6 h-6 text-[#F4FF78]'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className='text-white font-semibold mb-1'>
                      {t(
                        'projects.penthouse.whyUs.benefit1',
                        'Enhanced Buyer Engagement',
                      )}
                    </h4>
                    <p className='text-white/70 text-sm'>
                      {t(
                        'projects.penthouse.whyUs.benefit1Desc',
                        'Viewers retain 95% of a message from video, creating a stronger emotional connection.',
                      )}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: false, margin: '-50px' }}
                  className='flex items-start p-4 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-xl border border-white/10'
                >
                  <div className='w-8 h-8 mr-4 flex-shrink-0 flex items-center justify-center'>
                    <svg
                      className='w-6 h-6 text-[#F4FF78]'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className='text-white font-semibold mb-1'>
                      {t(
                        'projects.penthouse.whyUs.benefit2',
                        'Attract Premium Clients',
                      )}
                    </h4>
                    <p className='text-white/70 text-sm'>
                      {t(
                        'projects.penthouse.whyUs.benefit2Desc',
                        '73% of homeowners are more likely to list with an agent who offers video content.',
                      )}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: false, margin: '-50px' }}
                  className='flex items-start p-4 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-xl border border-white/10'
                >
                  <div className='w-8 h-8 mr-4 flex-shrink-0 flex items-center justify-center'>
                    <svg
                      className='w-6 h-6 text-[#F4FF78]'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className='text-white font-semibold mb-1'>
                      {t(
                        'projects.penthouse.whyUs.benefit3',
                        'Boost organic traffic',
                      )}
                    </h4>
                    <p className='text-white/70 text-sm'>
                      {t(
                        'projects.penthouse.whyUs.benefit3Desc',
                        'Video drives a 157% increase in organic traffic from search engines.',
                      )}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: false, margin: '-50px' }}
                  className='flex items-start p-4 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-xl border border-white/10'
                >
                  <div className='w-8 h-8 mr-4 flex-shrink-0 flex items-center justify-center'>
                    <svg
                      className='w-6 h-6 text-[#F4FF78]'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M13 10V3L4 14h7v7l9-11h-7z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className='text-white font-semibold mb-1'>
                      {t(
                        'projects.penthouse.whyUs.benefit4',
                        'Gain a Competitive Edge',
                      )}
                    </h4>
                    <p className='text-white/70 text-sm'>
                      {t(
                        'projects.penthouse.whyUs.benefit4Desc',
                        'With only 38% of agents using video, premium content makes you the top choice for discerning sellers.',
                      )}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right side - Video/Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, margin: '-50px' }}
              className='relative'
            >
              <div className='absolute -inset-4 bg-gradient-to-r from-[#2d5f59]/20 to-[#F4FF78]/20 rounded-3xl blur-xl'></div>
              <div className='relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20'>
                <div className='text-center mb-6'>
                  <div className='text-4xl mb-4'>📈</div>
                  <h4 className='text-xl font-semibold text-white mb-2'>
                    {t(
                      'projects.penthouse.whyUs.proofTitle',
                      "This Project's Impact",
                    )}
                  </h4>
                  <p className='text-white/70 text-sm'>
                    {t(
                      'projects.penthouse.whyUs.proofDesc',
                      'Real results from our Zurich penthouse campaign',
                    )}
                  </p>
                </div>

                <div className='space-y-4'>
                  <div className='flex justify-between items-center p-3 bg-gradient-to-r from-[#2d5f59]/10 to-[#F4FF78]/10 rounded-xl'>
                    <span className='text-white/80 text-sm'>
                      {t('projects.penthouse.whyUs.impactSocialReach', 'Social media reach')}
                    </span>
                    <span className='text-[#F4FF78] font-semibold'>
                      {t('projects.penthouse.whyUs.impactSocialReachValue', '50K+ views')}
                    </span>
                  </div>

                  <div className='flex justify-between items-center p-3 bg-gradient-to-r from-[#2d5f59]/10 to-[#F4FF78]/10 rounded-xl'>
                    <span className='text-white/80 text-sm'>
                      {t('projects.penthouse.whyUs.impactEngagement', 'Engagement rate')}
                    </span>
                    <span className='text-[#F4FF78] font-semibold'>
                      {t('projects.penthouse.whyUs.impactEngagementValue', '7x above average')}
                    </span>
                  </div>

                  <div className='flex justify-between items-center p-3 bg-gradient-to-r from-[#2d5f59]/10 to-[#F4FF78]/10 rounded-xl'>
                    <span className='text-white/80 text-sm'>
                      {t('projects.penthouse.whyUs.impactExposure', 'International exposure')}
                    </span>
                    <span className='text-[#F4FF78] font-semibold'>
                      {t('projects.penthouse.whyUs.impactExposureValue', 'Global audience')}
                    </span>
                  </div>

                  <div className='flex justify-between items-center p-3 bg-gradient-to-r from-[#2d5f59]/10 to-[#F4FF78]/10 rounded-xl'>
                    <span className='text-white/80 text-sm'>
                      {t('projects.penthouse.whyUs.impactBrand', 'Brand recognition')}
                    </span>
                    <span className='text-[#F4FF78] font-semibold'>
                      {t('projects.penthouse.whyUs.impactBrandValue', '#2 best reel')}
                    </span>
                  </div>
                </div>

                <div className='mt-6 pt-6 border-t border-white/20'>
                  <div className='text-center'>
                    <div className='text-2xl font-bold bg-gradient-to-r from-[#2d5f59] to-[#F4FF78] bg-clip-text text-transparent mb-2'>
                      {t('projects.penthouse.whyUs.firstThreeDays', '30K views in first 3 days')}
                    </div>
                    <p className='text-white/70 text-sm'>
                      {t('projects.penthouse.whyUs.firstThreeDaysDesc', 'Exceptional initial performance across all platforms')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: '-100px' }}
          className='max-w-4xl mx-auto text-center mb-24'
        >
          <div className='bg-gradient-to-r from-[#2d5f59]/10 to-[#F4FF78]/10 backdrop-blur-sm rounded-3xl p-12 border border-white/10'>
            <h3 className='text-2xl md:text-3xl font-semibold mb-6 text-white'>
              {t(
                'projects.penthouse.ctaTitle',
                'Ready to Showcase Your Property?',
              )}
            </h3>
            <p className='text-lg text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed'>
              {t(
                'projects.penthouse.ctaDesc',
                'Let us create premium content that elevates your luxury properties and captures the attention of discerning buyers.',
              )}
            </p>
            <Link
              to={`/${currentLang}/contact`}
              className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#2d5f59] to-[#F4FF78] text-black font-semibold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group'
            >
              {t('projects.penthouse.ctaButton', 'Start Your Project')}
              <svg
                className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PenthouseZurichProject;
