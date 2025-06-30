import React, { useRef, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
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
  const parallaxRef = useRef(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [reelLoadStates, setReelLoadStates] = useState({});
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || i18n.language || 'en';

  // Categories for filtering
  const categories = [
    { id: 'all', label: t('portfolio.categories.all', 'All') },
    {
      id: 'realEstate',
      label: t('portfolio.categories.realEstate', 'Real Estate'),
    },
    { id: 'events', label: t('portfolio.categories.events', 'Events') },
    { id: 'social', label: t('portfolio.categories.social', 'Social Media') },
  ];

  // Social media reels data with metadata
  const socialReels = [
    {
      id: 'reel-1',
      src: `${import.meta.env.VITE_CLOUDFRONT_URL}/videos/smi_reel_tavi.mp4`,
      title: t('portfolio.reels.smi.title', 'SMI Event Highlight'),
      category: 'social',
      type: t('portfolio.reels.instagramReel', 'Instagram Reel'),
      description: t('portfolio.reels.smi.description', 'Dynamic event coverage for social media'),
      tags: [
        t('portfolio.tags.event', 'Event'),
        t('portfolio.tags.socialMedia', 'Social media'),
        t('portfolio.tags.shortForm', 'Short form')
      ],
      views: '32k+',
    },
    {
      id: 'reel-2',
      src: `${
        import.meta.env.VITE_CLOUDFRONT_URL
      }/videos/Reel_2_penthouse_speech.mp4`,
      title: t('portfolio.reels.penthouseSpeech.title', 'Penthouse Experience'),
      category: 'social',
      type: t('portfolio.reels.instagramReel', 'Instagram Reel'),
      description: t('portfolio.reels.penthouseSpeech.description', 'Luxury real estate social content'),
      tags: [
        t('portfolio.tags.realEstate', 'Real estate'),
        t('portfolio.tags.luxury', 'Luxury'),
        t('portfolio.tags.socialMedia', 'Social media')
      ],
      views: '50k+',
    },
    {
      id: 'reel-3',
      src: `${
        import.meta.env.VITE_CLOUDFRONT_URL
      }/videos/Reel_1_penthouse_view.mp4`,
      title: t('portfolio.reels.penthouseViews.title', 'Penthouse Views'),
      category: 'social',
      type: t('portfolio.reels.instagramReel', 'Instagram Reel'),
      description: t('portfolio.reels.penthouseViews.description', 'Stunning property views for social platforms'),
      tags: [
        t('portfolio.tags.property', 'Property'),
        t('portfolio.tags.views', 'Views'),
        t('portfolio.tags.socialMedia', 'Social media')
      ],
      views: '28k+',
    },
  ];

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter(project => project.category === selectedCategory);

  // Filter reels based on selected category
  const shouldShowReels =
    selectedCategory === 'all' || selectedCategory === 'social';

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

  // Parallax effect for background elements
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const parallax =
          parallaxRef.current.querySelectorAll('.parallax-element');
        parallax.forEach((element, index) => {
          const speed = 0.5 + index * 0.2;
          element.style.transform = `translateY(${scrolled * speed}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      className='relative py-16 text-white px-6 lg:px-24 font-sans min-h-screen overflow-hidden'
      style={{
        background:
          'linear-gradient(135deg, #231f20 0%, #1a1617 40%, #205c57 100%)',
      }}
    >
      {/* Decorative background elements with parallax */}
      <div
        ref={parallaxRef}
        className='absolute inset-0 overflow-hidden pointer-events-none'
      >
        <div className='parallax-element absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#2d5f59]/20 to-[#F4FF78]/20 rounded-full blur-3xl'></div>
        <div className='parallax-element absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-[#F4FF78]/10 to-[#2d5f59]/10 rounded-full blur-3xl'></div>
        <div className='parallax-element absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-[#2d5f59]/15 to-[#F4FF78]/15 rounded-full blur-2xl'></div>
      </div>

      {/* Hero intro simplified */}
      <div className='max-w-4xl mx-auto text-center mb-16 px-4 sm:px-6 relative z-10'>
        <h1
          className='text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tight leading-tight mb-6'
          style={{ color: '#eaebec' }}
        >
          {t('portfolio.ourText', 'Our')} <span style={{ color: '#9eb6a9' }}>{t('portfolio.portfolioText', 'portfolio')}</span>
        </h1>

        <p className='text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed mb-12'>
          {t(
            'portfolio.description',
            'From luxury real estate to high-end events, we craft cinematic journeys that elevate every project.',
          )}
        </p>
      </div>

      {/* Category filter */}
      <div className='flex flex-wrap justify-center gap-4 mb-12 max-w-4xl mx-auto'>
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === category.id
                ? 'text-black shadow-lg'
                : 'text-white/70 hover:text-white'
            }`}
            style={{
              backgroundColor:
                selectedCategory === category.id
                  ? '#eaebec'
                  : 'rgba(255, 255, 255, 0.1)',
              borderColor:
                selectedCategory === category.id
                  ? 'transparent'
                  : 'rgba(158, 182, 169, 0.3)',
              border: selectedCategory === category.id ? 'none' : '1px solid',
            }}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <motion.div
        layout
        className='grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto relative z-10'
      >
        {filteredProjects.map((proj, idx) => (
          <motion.div
            key={proj.id}
            layout
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            onHoverStart={() => setHoveredProject(proj.id)}
            onHoverEnd={() => setHoveredProject(null)}
            className='group'
          >
            <Link
              to={`/${currentLang}${proj.link}`}
              className='block rounded-3xl overflow-hidden relative shadow-2xl bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 hover:border-[#2d5f59]/50 transition-all duration-500'
              ref={el => (cardsRef.current[idx] = el)}
            >
              {/* 16:9 Aspect Ratio Container */}
              <div className='w-full aspect-video overflow-hidden relative bg-zinc-800'>
                {proj.video ? (
                  <video
                    playsInline
                    autoPlay
                    muted
                    loop
                    preload='metadata'
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
                    onError={e => {
                      console.error('Video failed to load:', proj.video);
                    }}
                  >
                    <source src={proj.video} type='video/mp4' />
                  </video>
                ) : (
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
                    onError={e => {
                      console.error('Image failed to load:', proj.image);
                      e.target.src = `${
                        import.meta.env.VITE_CLOUDFRONT_URL
                      }/images/placeholder.jpg`;
                    }}
                  />
                )}

                {/* Hover overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-all duration-500 ${
                    hoveredProject === proj.id ? 'opacity-100' : 'opacity-70'
                  }`}
                >
                  <div className='absolute bottom-0 left-0 right-0 p-6'>
                    <div className='mb-4'>
                      <h3 className='text-xl font-semibold text-white mb-2 group-hover:text-[#F4FF78] transition-colors duration-300'>
                        {proj.title}
                      </h3>
                    </div>

                    <div className='flex items-center justify-between'>
                      <div className='flex items-center text-[#F4FF78] text-sm font-medium'>
                        <span>
                          {t('portfolio.viewProject', 'View Project')}
                        </span>
                        <svg
                          className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300'
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
                      </div>

                      {/* Quality indicator */}
                      <div className='flex items-center text-white/60 text-xs'>
                        <div className='w-2 h-2 bg-[#F4FF78] rounded-full mr-1 animate-pulse'></div>
                        {t('portfolio.quality4k', '4K')}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project type badge */}
                <div className='absolute top-4 left-4'>
                  <span className='px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full border border-white/20'>
                    {proj.typeKey ? t(proj.typeKey, proj.type || 'Video production') : t('portfolio.types.videoProduction', 'Video production')}
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Reels section */}
      {shouldShowReels && (
        <div id='reels' className='mt-24 max-w-7xl mx-auto px-4 sm:px-6'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12'>
            {socialReels.map((reel, i) => (
              <div
                key={reel.id}
                ref={el => (cardsRef.current[projects.length + i] = el)}
                className='relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 shadow-xl'
              >
                {/* 9:16 Aspect Ratio Container */}
                <div className='aspect-[9/16] w-full overflow-hidden relative bg-zinc-800'>
                  <video
                    src={reel.src}
                    className='w-full h-full object-cover'
                    playsInline
                    muted
                    loop
                    autoPlay
                    preload='metadata'
                    onError={e => {
                      console.error(`Error loading reel ${reel.id}:`, e);
                    }}
                  >
                    {t(
                      'portfolio.browserNotSupported',
                      'Your browser does not support the video tag.',
                    )}
                  </video>

                  {/* Always visible overlay with reel info */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent'>
                    <div className='absolute bottom-0 left-0 right-0 p-4'>
                      <h3 className='text-white font-semibold text-sm mb-1'>
                        {reel.title}
                      </h3>
                      <p className='text-white/80 text-xs mb-2 line-clamp-2'>
                        {reel.description}
                      </p>
                      <div className='flex flex-wrap gap-1 mb-3'>
                        {reel.tags.slice(0, 2).map((tag, index) => (
                          <span
                            key={index}
                            className='px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded border border-white/20'
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className='flex items-center justify-between'>
                        <span className='text-[#9eb6a9] text-xs font-medium'>
                          {reel.type}
                        </span>
                        <div className='flex items-center text-white/60 text-xs'>
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
                          {reel.views}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social media badge */}
                  <div className='absolute top-3 left-3'>
                    <span className='px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded border border-white/20 font-medium'>
                      {t('portfolio.socialMedia', 'Social media')}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Call to action section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: '-100px' }}
        className='mt-32 max-w-4xl mx-auto text-center px-4 sm:px-6 relative'
      >
        <div className='bg-gradient-to-r from-[#2d5f59]/10 to-[#F4FF78]/10 backdrop-blur-sm rounded-3xl p-12 border border-white/10'>
          <h2 className='text-3xl sm:text-4xl font-semibold mb-6 text-white'>
            {t('portfolio.cta.title', 'Ready to create your vision?')}
          </h2>
          <p className='text-lg text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed'>
            {t(
              'portfolio.cta.description',
              "Let's collaborate to bring your story to life with cinematic excellence and premium production value.",
            )}
          </p>
          <Link
            to={`/${currentLang}/contact`}
            className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#2d5f59] to-[#F4FF78] text-black font-semibold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group'
          >
            {t('portfolio.cta.button', 'Start your project')}
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
    </section>
  );
};

export default Portfolio;
