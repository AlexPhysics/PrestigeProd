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
    {
      id: 'corporate',
      label: t('portfolio.categories.corporate', 'Corporate'),
    },
    { id: 'events', label: t('portfolio.categories.events', 'Events') },
    { id: 'social', label: t('portfolio.categories.social', 'Social Media') },
  ];

  // Social media reels data with metadata
  const socialReels = [
    {
      id: 'reel-1',
      src: '/assets/videos/smi_reel_tavi.mp4',
      title: 'SMI Event Highlight',
      category: 'social',
      type: 'Instagram Reel',
      description: 'Dynamic event coverage for social media',
      tags: ['Event', 'Social Media', 'Short Form'],
    },
    {
      id: 'reel-2',
      src: '/assets/videos/Reel_2_penthouse_speech.mp4',
      title: 'Penthouse Experience',
      category: 'social',
      type: 'Social Media Content',
      description: 'Luxury real estate social content',
      tags: ['Real Estate', 'Luxury', 'Social Media'],
    },
    {
      id: 'reel-3',
      src: '/assets/videos/Reel_1_penthouse_view.mp4',
      title: 'Penthouse Views',
      category: 'social',
      type: 'Instagram Reel',
      description: 'Stunning property views for social platforms',
      tags: ['Property', 'Views', 'Social Media'],
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
      className='relative py-16 bg-gradient-to-b from-black via-zinc-900 to-black text-white px-6 lg:px-24 font-sans min-h-screen overflow-hidden'
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

      {/* Hero Intro */}
      <div className='max-w-4xl mx-auto text-center mb-16 px-4 sm:px-6 relative z-10'>
        {/* Section Title with animated underline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='inline-block relative mb-6'
        >
          <h2
            id='section-title'
            className='text-sm font-semibold tracking-widest text-white/80 mb-2 font-sans uppercase'
          >
            <TrueFocus
              sentence={t('portfolio.title', 'Our work')}
              manualMode={false}
              blurAmount={7.5}
              borderColor='rgba(45, 95, 89, 1)'
              animationDuration={0.4}
              pauseBetweenAnimations={3}
              className='font-sans'
              preserveCase={true}
            />
          </h2>
          <div
            id='underline'
            className='absolute left-1/2 -translate-x-1/2 mt-4 h-[2px] w-48 bg-gradient-to-r from-transparent via-[#2d5f59] to-transparent origin-center scale-x-0'
          />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          id='main-headline'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-tight mb-6'
        >
          <span className='bg-gradient-to-r from-[#2d5f59] to-[#F4FF78] bg-clip-text text-transparent font-medium'>
            Prestige Production
          </span>{' '}
          {t('portfolio.subtitle', 'Discover how')}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          id='sub-headline'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto mb-12'
        >
          {t(
            'portfolio.description',
            'From luxury real estate to high-end events, we craft cinematic journeys that elevate every project.',
          )}
        </motion.p>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='flex flex-wrap justify-center gap-8 mb-16'
        >
          <div className='text-center'>
            <div className='text-3xl font-bold bg-gradient-to-r from-[#2d5f59] to-[#F4FF78] bg-clip-text text-transparent'>
              15+
            </div>
            <div className='text-sm text-white/60 uppercase tracking-wider'>
              Projects Delivered
            </div>
          </div>
          <div className='text-center'>
            <div className='text-3xl font-bold bg-gradient-to-r from-[#2d5f59] to-[#F4FF78] bg-clip-text text-transparent'>
              100%
            </div>
            <div className='text-sm text-white/60 uppercase tracking-wider'>
              Client Satisfaction
            </div>
          </div>
          <div className='text-center'>
            <div className='text-3xl font-bold bg-gradient-to-r from-[#2d5f59] to-[#F4FF78] bg-clip-text text-transparent'>
              4K
            </div>
            <div className='text-sm text-white/60 uppercase tracking-wider'>
              Video Quality
            </div>
          </div>
        </motion.div>
      </div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className='flex flex-wrap justify-center gap-4 mb-16 max-w-4xl mx-auto'
      >
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === category.id
                ? 'bg-gradient-to-r from-[#2d5f59] to-[#F4FF78] text-white shadow-lg'
                : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
            }`}
          >
            {category.label}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
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
                      e.target.src = '/assets/images/placeholder.jpg';
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
                        4K
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project type badge */}
                <div className='absolute top-4 left-4'>
                  <span className='px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full border border-white/20'>
                    {proj.type || 'Video Production'}
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Reels Section */}
      {shouldShowReels && (
        <motion.div
          id='reels'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: '-100px' }}
          className='mt-32 max-w-7xl mx-auto px-4 sm:px-6'
        >
          <div className='text-center mb-16'>
            <h2 className='text-3xl sm:text-4xl font-semibold mb-4 text-white tracking-tight'>
              {t('portfolio.reelsTitle', 'Social Media Reels')}
            </h2>
            <p className='text-lg text-white/60 max-w-2xl mx-auto'>
              {t(
                'portfolio.reelsSubtitle',
                'Engaging short-form content designed for maximum social media impact',
              )}
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12'>
            {socialReels.map((reel, i) => (
              <motion.div
                key={reel.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: false, margin: '-50px' }}
                whileHover={{ y: -5 }}
                ref={el => (cardsRef.current[projects.length + i] = el)}
                className='group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#2d5f59]/50 transition-all duration-300 shadow-xl'
              >
                {/* 9:16 Aspect Ratio Container */}
                <div className='aspect-[9/16] w-full overflow-hidden relative bg-zinc-800'>
                  {/* Loading placeholder */}
                  {!reelLoadStates[reel.id] && (
                    <div className='absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center'>
                      <div className='w-16 h-16 border-2 border-[#2d5f59] border-t-[#F4FF78] rounded-full animate-spin'></div>
                    </div>
                  )}

                  <video
                    src={reel.src}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ${
                      reelLoadStates[reel.id] ? 'opacity-100' : 'opacity-0'
                    }`}
                    playsInline
                    muted
                    loop
                    autoPlay
                    preload='metadata'
                    onLoadedData={() => {
                      setReelLoadStates(prev => ({ ...prev, [reel.id]: true }));
                    }}
                    onError={e => {
                      console.error(`Error loading reel ${reel.id}:`, e);
                      setReelLoadStates(prev => ({ ...prev, [reel.id]: true }));
                    }}
                  >
                    {t(
                      'portfolio.browserNotSupported',
                      'Your browser does not support the video tag.',
                    )}
                  </video>

                  {/* Overlay with reel info */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
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
                            className='px-2 py-1 bg-white/20 text-white text-xs rounded backdrop-blur-sm'
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className='flex items-center justify-between'>
                        <span className='text-[#F4FF78] text-xs font-medium'>
                          {reel.type}
                        </span>
                        <div className='flex items-center text-white/60 text-xs'>
                          <div className='w-1.5 h-1.5 bg-[#F4FF78] rounded-full mr-1 animate-pulse'></div>
                          9:16
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social Media Badge */}
                  <div className='absolute top-3 left-3'>
                    <span className='px-2 py-1 bg-gradient-to-r from-[#2d5f59]/80 to-[#F4FF78]/80 backdrop-blur-sm text-white text-xs rounded-full border border-white/20 font-medium'>
                      Social Media
                    </span>
                  </div>

                  {/* Play Icon Overlay */}
                  <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <div className='w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30'>
                      <svg
                        className='w-6 h-6 text-white ml-0.5'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M8 5v14l11-7z' />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Client Testimonials Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, margin: '-100px' }}
        className='mt-32 max-w-6xl mx-auto px-4 sm:px-6'
      >
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl font-semibold mb-4 text-white tracking-tight'>
            {t('portfolio.testimonials.title', 'What Our Clients Say')}
          </h2>
          <p className='text-lg text-white/60 max-w-2xl mx-auto'>
            {t(
              'portfolio.testimonials.subtitle',
              'Trusted by luxury brands and discerning clients worldwide',
            )}
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {[
            {
              name: "Zurich Sotheby's International Realty",
              role: t(
                'portfolio.testimonials.client1.role',
                'Luxury Real Estate',
              ),
              content: t(
                'portfolio.testimonials.client1.content',
                'Prestige Production elevated our property presentations to an entirely new level. Their cinematic approach and attention to detail perfectly captures the essence of luxury real estate.',
              ),
              rating: 5,
            },
            {
              name: 'SMI Event Management',
              role: t(
                'portfolio.testimonials.client2.role',
                'Event Production',
              ),
              content: t(
                'portfolio.testimonials.client2.content',
                'Working with Prestige Production was exceptional. They transformed our event into a visual masterpiece that our guests still talk about months later.',
              ),
              rating: 5,
            },
            {
              name: 'Private Client',
              role: t(
                'portfolio.testimonials.client3.role',
                'Personal Project',
              ),
              content: t(
                'portfolio.testimonials.client3.content',
                "The team's professionalism and creative vision exceeded all expectations. They delivered a final product that truly captured our vision with stunning quality.",
              ),
              rating: 5,
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false, margin: '-50px' }}
              className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#2d5f59]/50 transition-all duration-300'
            >
              <div className='flex items-center mb-4'>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className='w-4 h-4 text-[#F4FF78] fill-current'
                    viewBox='0 0 20 20'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                ))}
              </div>
              <p className='text-white/80 text-sm leading-relaxed mb-4 italic'>
                "{testimonial.content}"
              </p>
              <div className='border-t border-white/10 pt-4'>
                <p className='text-white font-medium text-sm'>
                  {testimonial.name}
                </p>
                <p className='text-white/60 text-xs'>{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, margin: '-100px' }}
        className='mt-32 max-w-4xl mx-auto text-center px-4 sm:px-6 relative'
      >
        <div className='bg-gradient-to-r from-[#2d5f59]/10 to-[#F4FF78]/10 backdrop-blur-sm rounded-3xl p-12 border border-white/10'>
          <h2 className='text-3xl sm:text-4xl font-semibold mb-6 text-white'>
            {t('portfolio.cta.title', 'Ready to Create Your Vision?')}
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
            {t('portfolio.cta.button', 'Start Your Project')}
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
