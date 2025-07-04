import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { highlightSecondVideo, smoothScrollTo } from '../utils';
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from 'framer-motion';
import SpotlightCard from '../components/SpotlightCard';
import { useTranslation } from 'react-i18next';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { GRADIENT_CLASS } from '../constants';

const Services = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || i18n.language || 'en';
  const targetRef = useRef(null);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const toggleFaq = index => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Clear service types with transparent approach - Swiss style simplicity
  const serviceTypes = [
    {
      id: 'video-production',
      titleKey: 'videoProduction',
      descriptionKey: 'videoProductionDesc',
      priceKey: 'videoProductionPrice',
      featuresKeys: [
        'videoFeature1',
        'videoFeature2', 
        'videoFeature3',
        'videoFeature4',
      ],
      ctaKey: 'videoProductionCta',
      color: 'charcoal',
      icon: 'video-camera',
      contactSubject: 'Video Production Inquiry',
    },
    {
      id: 'photography',
      titleKey: 'photography',
      descriptionKey: 'photographyDesc',
      priceKey: 'photographyPrice',
      featuresKeys: [
        'photoFeature1',
        'photoFeature2',
        'photoFeature3',
        'photoFeature4',
      ],
      ctaKey: 'photographyCta',
      color: 'sage',
      icon: 'camera',
      contactSubject: 'Photography Inquiry',
    },
    {
      id: 'complete-package',
      titleKey: 'completePackage',
      descriptionKey: 'completePackageDesc',
      priceKey: 'completePackagePrice',
      featuresKeys: [
        'completeFeature1',
        'completeFeature2',
        'completeFeature3',
        'completeFeature4',
        'completeFeature5',
      ],
      ctaKey: 'completePackageCta',
      popular: true,
      color: 'teal',
      icon: 'sparkles',
      contactSubject: 'Complete Package Inquiry',
    },
  ];

  // Showcase projects - testimonials and results
  const showcaseProjects = [
    {
      id: 'penthouse',
      imageKey: 'penthouseImage',
      titleKey: 'penthouseTitle',
      resultKey: 'penthouseResult',
      quoteKey: 'penthouseQuote',
      clientKey: 'penthouseClient',
      link: `/${currentLang}/projects/penthouse-zurich`,
    },
    {
      id: 'smi',
      imageKey: 'smiImage',
      titleKey: 'smiTitle',
      resultKey: 'smiResult',
      quoteKey: 'smiQuote',
      clientKey: 'smiClient',
      link: `/${currentLang}/projects/swiss-mining-institute`,
    },
  ];

  // Professional gear
  const gear = [
    {
      titleKey: 'sonyAlpha',
      imageKey: 'sonyAlphaImage',
      specKey: 'sonyAlphaSpec',
      image: `${import.meta.env.VITE_CLOUDFRONT_URL}/gear/sony_camera.jpg`,
    },
    {
      titleKey: 'djiMavic',
      imageKey: 'djiMavicImage',
      specKey: 'djiMavicSpec',
      image: `${import.meta.env.VITE_CLOUDFRONT_URL}/gear/dji_drone.jpg`,
    },
  ];

  useEffect(() => {
    document.title = t('services.pageTitle', 'Services | Prestige Production');
  }, [t]);

  return (
    <main className='bg-black text-white font-sans'>
      {/* Hero with stronger messaging */}
      <section className='relative w-full overflow-hidden'>
        {/* Mobile-first approach */}
        <div className='block md:hidden'>
          {/* Mobile Hero - Simplified */}
          <div className='relative min-h-[100vh] flex flex-col justify-center px-4 py-12'>
            <div className='absolute inset-0 w-full h-full'>
              <div className='w-full h-[60vh] max-w-lg mx-auto rounded-xl overflow-hidden'>
                <video
                  src={highlightSecondVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80' />
            </div>
            
            <motion.div
              className='relative z-20 text-center max-w-sm mx-auto'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className='text-3xl font-light tracking-tight mb-4'>
                {t('services.hero.title', 'Professional Video & Photography')}<br />
                <span className={`${GRADIENT_CLASS} bg-clip-text text-transparent font-medium`}>
                  {t('services.hero.highlight', 'Made Simple')}
                </span>
              </h1>
              <p className='text-white/90 text-lg mb-8 leading-relaxed'>
                {t('services.hero.subtitle', 'High-quality visual content that showcases your business professionally.')}
              </p>
              <div className='flex flex-col gap-3 mb-12'>
                <Link
                  to={`/${currentLang}/contact`}
                  className='bg-white text-black text-base font-medium px-6 py-3 rounded-full hover:bg-gray-200 transition duration-300'
                >
                  {t('services.hero.primaryCta', 'Get Custom Quote')}
                </Link>
                <a
                  href='#packages'
                  onClick={e => {
                    e.preventDefault();
                    smoothScrollTo('packages');
                  }}
                  className='bg-transparent border-2 border-white/30 text-white text-base font-medium px-6 py-3 rounded-full hover:bg-white/10 transition duration-300'
                >
                  {t('services.hero.secondaryCta', 'View Packages')}
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Desktop Hero - Full featured */}
        <div className='hidden md:flex min-h-[100vh] items-center justify-center py-20'>
          <div className='absolute inset-0 w-full h-full'>
            <div className='w-full h-full max-w-7xl mx-auto px-6 flex items-center justify-center'>
              <div className='w-full aspect-video max-h-[600px] lg:max-h-[700px] rounded-xl overflow-hidden'>
                <video
                  src={highlightSecondVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
            <div className='absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 z-10' />
          </div>

          <motion.div
            className='relative z-20 text-center px-6 max-w-4xl mx-auto'
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6'>
              {t('services.hero.title', 'Professional Video & Photography')} <br />
              <span className={`${GRADIENT_CLASS} bg-clip-text text-transparent font-medium`}>
                {t('services.hero.highlight', 'Made Simple')}
              </span>
            </h1>
            <p className='text-white/90 text-xl md:text-2xl mb-10 max-w-2xl mx-auto'>
              {t('services.hero.subtitle', 'High-quality visual content that showcases your business professionally. Clear pricing, reliable delivery, exceptional results.')}
            </p>
            <div className='flex flex-col sm:flex-row gap-5 justify-center mb-16'>
              <Link
                to={`/${currentLang}/contact`}
                className='bg-white text-black text-base font-medium px-8 py-4 rounded-full hover:bg-gray-200 transition duration-300 shadow-lg hover:shadow-xl'
              >
                {t('services.hero.primaryCta', 'Get Custom Quote')}
              </Link>
              <a
                href='#packages'
                onClick={e => {
                  e.preventDefault();
                  smoothScrollTo('packages');
                }}
                className='bg-transparent border-2 border-white/30 text-white text-base font-medium px-8 py-4 rounded-full hover:bg-white/10 transition duration-300'
              >
                {t('services.hero.secondaryCta', 'View Packages')}
              </a>
            </div>
            {/* Key benefits - Desktop only */}
            <motion.div
              className='grid grid-cols-1 md:grid-cols-3 gap-8'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className='bg-white/5 backdrop-blur-sm p-5 rounded-xl'>
                <h3 className='text-xl font-medium mb-2'>
                  {t('services.benefits.expertise', 'Swiss Precision')}
                </h3>
                <p className='text-white/70 text-sm'>
                  {t('services.benefits.expertiseDesc', 'Professional equipment and years of experience ensuring consistent, high-quality results.')}
                </p>
              </div>
              <div className='bg-white/5 backdrop-blur-sm p-5 rounded-xl'>
                <h3 className='text-xl font-medium mb-2'>
                  {t('services.benefits.efficiency', 'Time Focused')}
                </h3>
                <p className='text-white/70 text-sm'>
                  {t('services.benefits.efficiencyDesc', 'Streamlined process that respects your schedule and delivers on agreed timelines.')}
                </p>
              </div>
              <div className='bg-white/5 backdrop-blur-sm p-5 rounded-xl'>
                <h3 className='text-xl font-medium mb-2'>
                  {t('services.benefits.impact', 'Why It Matters')}
                </h3>
                <p className='text-white/70 text-sm'>
                  {t('services.benefits.impactDesc', 'First impressions shape business success. Professional visuals build trust, attract customers, and set you apart from competitors.')}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Benefits Section - Separate */}
        <section className='block md:hidden bg-gradient-to-b from-black to-gray-900 py-12'>
          <div className='px-4 max-w-sm mx-auto'>
            <motion.div
              className='grid grid-cols-1 gap-6'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className='bg-white/5 backdrop-blur-sm p-4 rounded-xl text-center'>
                <h3 className='text-lg font-medium mb-2'>
                  {t('services.benefits.expertise', 'Swiss Precision')}
                </h3>
                <p className='text-white/70 text-sm'>
                  {t('services.benefits.expertiseDesc', 'Professional equipment and consistent results.')}
                </p>
              </div>
              <div className='bg-white/5 backdrop-blur-sm p-4 rounded-xl text-center'>
                <h3 className='text-lg font-medium mb-2'>
                  {t('services.benefits.efficiency', 'Time Focused')}
                </h3>
                <p className='text-white/70 text-sm'>
                  {t('services.benefits.efficiencyDesc', 'Respects your schedule and delivers on time.')}
                </p>
              </div>
              <div className='bg-white/5 backdrop-blur-sm p-4 rounded-xl text-center'>
                <h3 className='text-lg font-medium mb-2'>
                  {t('services.benefits.impact', 'Why It Matters')}
                </h3>
                <p className='text-white/70 text-sm'>
                  {t('services.benefits.impactDesc', 'Professional visuals build trust and attract customers.')}
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </section>
      {/* Our Process - Show how easy it is to work with you */}
      <section ref={targetRef} className='py-32 px-6 max-w-6xl mx-auto'>
        <motion.div style={{ opacity }}>
          <h2 className='text-center text-3xl sm:text-5xl font-light mb-6 tracking-tight'>
            {t('services.process.title', 'Simple Process,')}{' '}
            <span className={`${GRADIENT_CLASS} bg-clip-text text-transparent`}>
              {t('services.process.highlight', 'Exceptional Results')}
            </span>
          </h2>
          <p className='text-white/70 text-lg max-w-3xl mx-auto text-center mb-20'>
            {t(
              'services.process.description',
              'Working with us is straightforward. We handle the complexity so you can focus on what matters—growing your business and impressing your clients.',
            )}
          </p>{' '}
          <div className='grid md:grid-cols-5 gap-4 md:gap-6 relative'>
            {/* Connecting line */}
            <div className='hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-[#9eb6a9]/30 to-transparent z-0'></div>

            {/* Step 1 */}
            <motion.div
              className='text-center relative z-10'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <motion.div
                className='w-16 h-16 rounded-full bg-gradient-to-r from-[#205c57] to-[#9eb6a9] flex items-center justify-center text-2xl font-bold mx-auto mb-5 relative shadow-lg shadow-[#205c57]/20'
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <motion.div
                  className='absolute inset-0 rounded-full bg-white/20'
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                ></motion.div>
                1
              </motion.div>
              <h3 className='text-xl font-medium mb-2'>
                {t('services.process.step1Title', 'Consultation')}
              </h3>
              <p className='text-white/70 text-sm'>
                {t(
                  'services.process.step1Desc',
                  'We explore your goals, audience, and strategic objectives.',
                )}
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className='text-center relative z-10'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <motion.div
                className='w-16 h-16 rounded-full bg-gradient-to-r from-[#205c57] to-[#9eb6a9] flex items-center justify-center text-2xl font-bold mx-auto mb-5 relative shadow-lg shadow-[#205c57]/20'
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <motion.div
                  className='absolute inset-0 rounded-full bg-white/20'
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.4,
                  }}
                ></motion.div>
                2
              </motion.div>
              <h3 className='text-xl font-medium mb-2'>
                {t('services.process.step2Title', 'Planning')}
              </h3>
              <p className='text-white/70 text-sm'>
                {t(
                  'services.process.step2Desc',
                  'We develop a creative concept and detailed production plan.',
                )}
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className='text-center relative z-10'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <motion.div
                className='w-16 h-16 rounded-full bg-gradient-to-r from-[#205c57] to-[#9eb6a9] flex items-center justify-center text-2xl font-bold mx-auto mb-5 relative shadow-lg shadow-[#205c57]/20'
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <motion.div
                  className='absolute inset-0 rounded-full bg-white/20'
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.8,
                  }}
                ></motion.div>
                3
              </motion.div>
              <h3 className='text-xl font-medium mb-2'>
                {t('services.process.step3Title', 'Production')}
              </h3>
              <p className='text-white/70 text-sm'>
                {t(
                  'services.process.step3Desc',
                  'Our team captures high-quality footage using premium equipment.',
                )}
              </p>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              className='text-center relative z-10'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <motion.div
                className='w-16 h-16 rounded-full bg-gradient-to-r from-[#205c57] to-[#9eb6a9] flex items-center justify-center text-2xl font-bold mx-auto mb-5 relative shadow-lg shadow-[#205c57]/20'
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <motion.div
                  className='absolute inset-0 rounded-full bg-white/20'
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1.2,
                  }}
                ></motion.div>
                4
              </motion.div>
              <h3 className='text-xl font-medium mb-2'>
                {t('services.process.step4Title', 'Post-Production')}
              </h3>
              <p className='text-white/70 text-sm'>
                {t(
                  'services.process.step4Desc',
                  'Expert editing, color grading, and refinement of your visual story.',
                )}
              </p>
            </motion.div>

            {/* Step 5 */}
            <motion.div
              className='text-center relative z-10'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <motion.div
                className='w-16 h-16 rounded-full bg-gradient-to-r from-[#205c57] to-[#9eb6a9] flex items-center justify-center text-2xl font-bold mx-auto mb-5 relative shadow-lg shadow-[#205c57]/20'
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <motion.div
                  className='absolute inset-0 rounded-full bg-white/20'
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1.6,
                  }}
                ></motion.div>
                5
              </motion.div>
              <h3 className='text-xl font-medium mb-2'>
                {t('services.process.step5Title', 'Delivery')}
              </h3>
              <p className='text-white/70 text-sm'>
                {t(
                  'services.process.step5Desc',
                  'Final content optimized for your platforms with strategic distribution guidance.',
                )}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>{' '}
      {/* Service Packages - Clear options and collaborative approach */}
      <section
        id='packages'
        className='py-24 px-6 bg-gradient-to-b from-[#111111] to-black'
      >
        <div className='max-w-6xl mx-auto'>
          <motion.h2
            className='text-center text-3xl sm:text-5xl font-light mb-6 tracking-tight'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {t('services.types.title', 'Our Services')}
          </motion.h2>
          <p className='text-white/70 text-lg max-w-3xl mx-auto text-center mb-16'>
            {t(
              'services.types.subtitle',
              'Clear, transparent pricing for professional visual content that delivers results.',
            )}
          </p>

          <div className='grid md:grid-cols-3 gap-8 relative'>
            {/* Connecting line behind packages */}
            <div className='hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#205c57]/30 via-[#9eb6a9]/40 to-[#231f20]/30 z-0'></div>

            {serviceTypes.map((service, index) => (
              <motion.div
                key={service.id}
                className={`relative rounded-2xl backdrop-blur-sm z-10 group`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {/* Color gradient background with animated border */}
                <div
                  className={`absolute inset-0 rounded-2xl ${
                    service.popular
                      ? 'opacity-100'
                      : 'opacity-0 group-hover:opacity-100'
                  } transition-opacity duration-300`}
                >
                  <div
                    className={`absolute inset-px rounded-2xl bg-gradient-to-br ${
                      service.color === 'teal'
                        ? 'from-[#205c57]/20 to-[#1a4d49]/20 border-[#205c57]/30'
                        : service.color === 'sage'
                        ? 'from-[#9eb6a9]/30 to-[#7a9287]/30 border-[#9eb6a9]/40'
                        : 'from-[#231f20]/20 to-[#1a1617]/20 border-[#231f20]/30'
                    } border`}
                  ></div>
                </div>

                {/* Static background for non-hovered state */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-white/5 ${
                    service.popular
                      ? 'opacity-0'
                      : 'opacity-100 group-hover:opacity-0'
                  } transition-opacity duration-300`}
                ></div>

                {/* Content */}
                <div className='relative z-10 p-8'>
                  {/* Icon at the top */}
                  <div
                    className={`w-12 h-12 rounded-full mx-auto mb-6 flex items-center justify-center ${
                      service.color === 'teal'
                        ? 'bg-[#205c57]/20 text-[#9eb6a9]'
                        : service.color === 'sage'
                        ? 'bg-[#9eb6a9]/20 text-[#205c57]'
                        : 'bg-[#231f20]/20 text-[#eaebec]'
                    }`}
                  >
                    {service.icon === 'video-camera' && (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={1.5}
                          d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
                        />
                      </svg>
                    )}
                    {service.icon === 'camera' && (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={1.5}
                          d='M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z'
                        />
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={1.5}
                          d='M15 13a3 3 0 11-6 0 3 3 0 016 0z'
                        />
                      </svg>
                    )}
                    {service.icon === 'sparkles' && (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={1.5}
                          d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
                        />
                      </svg>
                    )}
                  </div>

                  {service.popular && (
                    <motion.div
                      className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#9eb6a9] to-[#205c57] text-white text-xs font-bold px-4 py-1 rounded-full'
                      initial={{ scale: 1 }}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      {t('services.types.mostPopular', 'most popular')}
                    </motion.div>
                  )}

                  <h3
                    className={`text-2xl font-medium mb-4 text-center ${
                      service.color === 'teal'
                        ? 'group-hover:text-[#9eb6a9]'
                        : service.color === 'sage'
                        ? 'group-hover:text-[#205c57]'
                        : 'group-hover:text-[#eaebec]'
                    } transition-colors duration-300`}
                  >
                    {t(`services.types.${service.titleKey}.title`, service.titleKey)}
                  </h3>

                  <p className='text-white/70 text-sm mb-8 text-center'>
                    {t(
                      `services.types.${service.titleKey}.${service.descriptionKey}`,
                      'Service description',
                    )}
                  </p>

                  <div className='mb-8 space-y-4'>
                    {service.featuresKeys.map((featureKey, idx) => (
                      <div key={idx} className='flex items-start space-x-3'>
                        <div
                          className={`flex-shrink-0 p-1 rounded-full ${
                            service.color === 'teal'
                              ? 'bg-[#205c57]/20 text-[#9eb6a9]'
                              : service.color === 'sage'
                              ? 'bg-[#9eb6a9]/20 text-[#205c57]'
                              : 'bg-[#231f20]/20 text-[#eaebec]'
                          }`}
                        >
                          <CheckCircleIcon className='h-4 w-4' />
                        </div>
                        <span className='text-white/80 text-sm'>
                          {t(
                            `services.types.${service.titleKey}.${featureKey}`,
                            `Feature ${idx + 1}`,
                          )}
                        </span>
                      </div>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to={`/${currentLang}/contact?service=${service.id}&subject=${encodeURIComponent(service.contactSubject)}`}
                      onClick={() => {
                        // Analytics tracking
                        if (typeof gtag !== 'undefined') {
                          gtag('event', 'service_quote_click', {
                            event_category: 'Services',
                            event_label: service.id,
                            service_type: service.titleKey,
                          });
                        }
                        
                        // Alternative: Custom analytics
                        if (typeof window !== 'undefined' && window.analytics) {
                          window.analytics.track('Service Quote Requested', {
                            serviceId: service.id,
                            serviceName: service.titleKey,
                            contactSubject: service.contactSubject,
                          });
                        }
                      }}
                      className={`block text-center py-3 px-6 rounded-full text-sm font-medium transition-all duration-300 ${
                        service.color === 'teal'
                          ? 'bg-[#205c57]/30 text-white hover:bg-[#205c57] hover:shadow-lg hover:shadow-[#205c57]/30'
                          : service.color === 'sage'
                          ? 'bg-[#9eb6a9]/30 text-black hover:bg-[#9eb6a9] hover:shadow-lg hover:shadow-[#9eb6a9]/30'
                          : 'bg-[#231f20]/30 text-white hover:bg-[#231f20] hover:shadow-lg hover:shadow-[#231f20]/30'
                      }`}
                    >
                      {t(
                        `services.types.${service.titleKey}.${service.ctaKey}`,
                        'Get Quote',
                      )}
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional note for small team */}
          <motion.p
            className='text-center mt-12 text-white/60 text-sm max-w-2xl mx-auto'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t(
              'services.packages.teamNote',
              'As a two-person boutique studio, we offer a personalized approach to every project. Our small team means direct communication with the creatives working on your content, ensuring your vision is perfectly captured.',
            )}
          </motion.p>
        </div>
      </section>
      {/* Results and Testimonials - show real impact */}
      <section className='py-32 px-6 max-w-6xl mx-auto'>
        <motion.h2
          className='text-center text-3xl sm:text-5xl font-light mb-6 tracking-tight'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {t('services.showcase.title', 'The Results Speak for Themselves')}
        </motion.h2>{' '}
        <p className='text-white/70 text-lg max-w-3xl mx-auto text-center mb-20'>
          {t(
            'services.showcase.subtitle',
            'See how our visual storytelling has transformed brands and accelerated growth for our clients.',
          )}
        </p>
        <div className='space-y-24'>
          {showcaseProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              className={`flex flex-col ${
                idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-10 items-center`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className='lg:w-1/2'>
                <div className='rounded-2xl overflow-hidden'>
                  <img
                    src={`/assets/projects/${project.id}.jpg`}
                    alt={t(
                      `services.showcase.${project.imageKey}Alt`,
                      `${project.id} project`,
                    )}
                    className='w-full h-auto object-cover'
                  />
                </div>
              </div>
              <div className='lg:w-1/2'>
                <h3 className='text-2xl font-medium mb-3'>
                  {t(
                    `services.showcase.${project.titleKey}`,
                    `${project.id} title`,
                  )}
                </h3>
                <div className='mb-6 px-5 py-4 bg-gradient-to-r from-[#9eb6a9]/20 to-transparent rounded-lg'>
                  <p className='text-[#9eb6a9] font-medium'>
                    {t(
                      `services.showcase.${project.resultKey}`,
                      'Impressive result statistic',
                    )}
                  </p>
                </div>
                <blockquote className='text-white/80 italic mb-4 text-lg'>
                  "
                  {t(
                    `services.showcase.${project.quoteKey}`,
                    'Client testimonial quote',
                  )}
                  "
                </blockquote>
                <p className='text-white/60 text-sm mb-6'>
                  —{' '}
                  {t(
                    `services.showcase.${project.clientKey}`,
                    'Client name and position',
                  )}
                </p>
                <Link
                  to={project.link}
                  className='inline-flex items-center text-[#9eb6a9] hover:text-[#205c57] transition'
                >
                  {t('services.showcase.viewCase', 'View Full Case Study')}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 ml-1'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Service types - more visual */}
      <section className='py-24 px-6 bg-gradient-to-b from-[#111111] to-black'>
        <div className='max-w-6xl mx-auto'>
          <motion.h2
            className='text-center text-3xl sm:text-5xl font-light mb-6 tracking-tight'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {t('services.offerings.title', 'Premium Content Types')}
          </motion.h2>{' '}
          <p className='text-white/70 text-lg max-w-3xl mx-auto text-center mb-16'>
            {t(
              'services.offerings.subtitle',
              "Each format is designed to showcase your brand, products, or services from their most engaging angle and capture your target audience's attention.",
            )}
          </p>
          <div className='grid md:grid-cols-2 gap-x-8 gap-y-16'>
            <motion.div
              className='group'
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
            >
              <div className='mb-6 overflow-hidden rounded-xl'>
                <img
                  src='https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
                  alt={t(
                    'services.offerings.propertyTours.imageAlt',
                    'Cinematic video example',
                  )}
                  className='w-full h-[220px] object-cover group-hover:scale-105 transition duration-700'
                />
              </div>
              <h3 className='text-xl font-semibold mb-3'>
                {t(
                  'services.offerings.propertyTours.title',
                  'Cinematic Videos',
                )}
              </h3>
              <p className='text-white/70 text-sm'>
                {t(
                  'services.offerings.propertyTours.description',
                  'Immersive visual stories that highlight key features and create emotional connections with viewers.',
                )}
              </p>
            </motion.div>
            <motion.div
              className='group'
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className='mb-6 overflow-hidden rounded-xl'>
                <img
                  src='https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                  alt={t(
                    'services.offerings.aerial.imageAlt',
                    'Aerial videography example',
                  )}
                  className='w-full h-[220px] object-cover group-hover:scale-105 transition duration-700'
                />
              </div>
              <h3 className='text-xl font-semibold mb-3'>
                {t(
                  'services.offerings.aerial.title',
                  'Aerial Photography & Video',
                )}
              </h3>{' '}
              <p className='text-white/70 text-sm'>
                {t(
                  'services.offerings.aerial.description',
                  'Showcase scale, surroundings, and perspective with dramatic drone footage and stills.',
                )}
              </p>
            </motion.div>
            <motion.div
              className='group'
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className='mb-6 overflow-hidden rounded-xl'>
                <img
                  src='https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80'
                  alt={t(
                    'services.offerings.social.imageAlt',
                    'Social media content example',
                  )}
                  className='w-full h-[220px] object-cover group-hover:scale-105 transition duration-700'
                />
              </div>
              <h3 className='text-xl font-semibold mb-3'>
                {t('services.offerings.social.title', 'Social Media Content')}
              </h3>
              <p className='text-white/70 text-sm'>
                {t(
                  'services.offerings.social.description',
                  'Eye-catching reels and shorts optimized for Instagram, TikTok and other platforms to maximize engagement.',
                )}
              </p>
            </motion.div>
            <motion.div
              className='group'
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className='mb-6 overflow-hidden rounded-xl'>
                <img
                  src='https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                  alt={t(
                    'services.offerings.hdr.imageAlt',
                    'Professional photography example',
                  )}
                  className='w-full h-[220px] object-cover group-hover:scale-105 transition duration-700'
                />
              </div>
              <h3 className='text-xl font-semibold mb-3'>
                {t('services.offerings.hdr.title', 'Photography')}
              </h3>{' '}
              <p className='text-white/70 text-sm'>
                {t(
                  'services.offerings.hdr.description',
                  'High-quality photos that capture perfect lighting, bringing out the best in your subjects and spaces.',
                )}
              </p>
            </motion.div>{' '}
            <motion.div
              className='group'
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className='mb-6 overflow-hidden rounded-xl'>
                <img
                  src='https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                  alt={t(
                    'services.offerings.brandContent.imageAlt',
                    'Brand content production example',
                  )}
                  className='w-full h-[220px] object-cover group-hover:scale-105 transition duration-700'
                />
              </div>
              <h3 className='text-xl font-semibold mb-3'>
                {t('services.offerings.brandContent.title', 'Brand Content')}
              </h3>
              <p className='text-white/70 text-sm'>
                {t(
                  'services.offerings.brandContent.description',
                  'Strategic brand storytelling through compelling visuals that communicate your values and vision.',
                )}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Gear Section with more technical details */}
      <section className='py-32 px-6 max-w-6xl mx-auto'>
        {' '}
        <motion.h2
          className='text-center text-3xl sm:text-5xl font-light mb-6 tracking-tight'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {t('services.gear.title', 'Professional-Grade Equipment')}
        </motion.h2>
        <p className='text-white/70 text-lg max-w-3xl mx-auto text-center mb-16'>
          {t(
            'services.gear.description',
            'We invest in the latest cinema-grade technology to capture your brand, products, and services with exceptional detail, color accuracy, and cinematic quality.',
          )}
        </p>
        <div className='grid md:grid-cols-2 gap-16'>
          {gear.map(({ titleKey, image, specKey }, idx) => (
            <motion.div
              key={idx}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              className='bg-white/5 rounded-2xl overflow-hidden p-6'
            >
              <div className='flex flex-col md:flex-row gap-6 items-center'>
                <div className='md:w-2/5'>
                  <img
                    src={image}
                    alt={t(`services.gear.${titleKey}Alt`, titleKey)}
                    className='w-full h-auto object-contain rounded-lg'
                  />
                </div>
                <div className='md:w-3/5'>
                  <h3 className='text-xl font-semibold mb-3'>
                    {t(`services.gear.${titleKey}`, titleKey)}
                  </h3>
                  <p className='text-white/70 text-sm mb-4'>
                    {t(`services.gear.${specKey}`, 'Equipment specifications')}
                  </p>{' '}
                  <ul className='text-sm text-white/60 space-y-1'>
                    {[1, 2, 3].map(i => (
                      <li key={i} className='flex items-center gap-2'>
                        <span className='w-1.5 h-1.5 rounded-full bg-[#9eb6a9]'></span>
                        {t(
                          `services.gear.${titleKey}Feature${i}`,
                          `Feature ${i}`,
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>{' '}
      {/* FAQ Section */}
      <section className='py-24 px-6 bg-gradient-to-b from-[#111111] to-black'>
        <div className='max-w-4xl mx-auto'>
          <motion.h2
            className='text-center text-3xl sm:text-5xl font-light mb-6 tracking-tight'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {t('services.faq.title')}
          </motion.h2>{' '}
          <p className='text-white/70 text-lg max-w-3xl mx-auto text-center mb-4'>
            {t('services.faq.subtitle')}
          </p>
          <p className='text-[#9eb6a9] text-sm max-w-3xl mx-auto text-center mb-16'>
            {t('services.faq.clickToExpand')}
          </p>
          <div className='space-y-6 relative'>
            {/* Decorative element */}{' '}
            <div className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 hidden lg:block'>
              <div className='w-3 h-40 bg-gradient-to-b from-[#9eb6a9]/30 to-transparent rounded-full'></div>
            </div>
            {[1, 2, 3, 4, 5].map(i => (
              <motion.div
                key={i}
                className='bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-colors duration-300'
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div
                  className='p-6 cursor-pointer flex justify-between items-center'
                  onClick={() => toggleFaq(i)}
                >
                  <h3 className='text-xl font-medium'>
                    {t(`services.faq.q${i}`)}
                  </h3>
                  <div className='flex-shrink-0 ml-4'>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center border border-white/30 transition-transform duration-300 ${
                        expandedFaq === i
                          ? 'bg-[#9eb6a9] border-[#9eb6a9] rotate-180'
                          : ''
                      }`}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-3 w-3'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d={
                            expandedFaq === i
                              ? 'M5 15l7-7 7 7'
                              : 'M19 9l-7 7-7-7'
                          }
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <AnimatePresence>
                  {expandedFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className='px-6 pb-6 border-t border-white/10 pt-3'>
                        <p className='text-white/70 text-base leading-relaxed'>
                          {t(`services.faq.a${i}`)}
                        </p>
                      </div>
                    </motion.div>
                  )}{' '}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          {/* Additional FAQ contact info */}
          <div className='mt-16 text-center'>
            <p className='text-white/80 mb-6'>
              {t('services.faq.moreQuestions')}
            </p>
            <Link
              to={`/${currentLang}/contact`}
              className='inline-flex items-center gap-2 text-[#9eb6a9] hover:text-[#205c57] transition-colors'
            >
              <span>{t('services.faq.contactUs')}</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      {/* Strong CTA */}
      <section className='py-32 px-6'>
        <div className='max-w-4xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {' '}
            <h2 className='text-3xl sm:text-5xl font-light mb-8'>
              {t(
                'services.cta.title',
                'Ready to Transform Your Visual Marketing?',
              )}
            </h2>
            <p className='text-white/80 mb-10 text-xl max-w-2xl mx-auto'>
              {t(
                'services.cta.description',
                'Join successful brands and organizations who are seeing higher engagement and stronger results with our premium visual content.',
              )}
            </p>
            <div className='flex flex-col sm:flex-row gap-5 justify-center'>
              {' '}
              <Link
                to={`/${currentLang}/contact`}
                className='bg-gradient-to-r from-[#9eb6a9] to-[#205c57] text-white text-lg font-medium px-10 py-4 rounded-full hover:shadow-lg hover:shadow-[#9eb6a9]/20 transition'
              >
                {t('services.cta.primaryButton', 'Book Your Free Consultation')}
              </Link>
              <Link
                to={`/${currentLang}/portfolio`}
                className='bg-white/10 text-white text-lg font-medium px-10 py-4 rounded-full hover:bg-white/20 transition'
              >
                {t('services.cta.secondaryButton', 'Explore Our Portfolio')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Services;
