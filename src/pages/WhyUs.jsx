import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useGSAP } from '@gsap/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { GRADIENT_CLASS } from '../constants';

// Register ScrollTrigger and ScrollToPlugin plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const WhyUs = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || i18n.language || 'en';
  const sectionRef = useRef(null);
  const teamRef = useRef(null);
  const individualSectionRef = useRef(null);
  const approachSectionRef = useRef(null);
  const testimonialsSectionRef = useRef(null);
  const [activeSkill, setActiveSkill] = useState(null);
  const [activeTab, setActiveTab] = useState('vision');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Team member skills to showcase expertise
  const skills = {
    dorian: [
      t('whyUs.skills.dorian.0', 'Creative Direction'),
      t('whyUs.skills.dorian.1', 'Cinematography'),
      t('whyUs.skills.dorian.2', 'Brand Strategy'),
    ],
    alex: [
      t('whyUs.skills.alex.0', 'Technical Production'),
      t('whyUs.skills.alex.1', 'Post-processing'),
      t('whyUs.skills.alex.2', 'Color Grading'),
    ],
  };

  // Helper function to get the appropriate approach point text
  const getApproachPointText = (tab, index) => {
    if (tab === 'vision') {
      if (index === 1) return 'Deep stakeholder interviews to understand needs';
      if (index === 2) return 'Market and audience research';
      if (index === 3) return 'Strategic alignment with your business goals';
    }

    if (tab === 'creativity') {
      if (index === 1) return 'Innovative concept development';
      if (index === 2) return 'Visual storytelling expertise';
      if (index === 3) return 'Brand-aligned aesthetic direction';
    }

    if (tab === 'execution') {
      if (index === 1) return 'Premium equipment and production values';
      if (index === 2) return 'Expert crew and technical excellence';
      if (index === 3) return 'Thorough quality control process';
    }

    if (tab === 'results') {
      if (index === 1) return 'Performance metrics tracking';
      if (index === 2) return 'Audience engagement analysis';
      if (index === 3) return 'Tangible business outcome reporting';
    }

    return '';
  };

  // Helper function to get the appropriate approach description text
  const getApproachDescription = tab => {
    switch (tab) {
      case 'vision':
        return "We begin by deeply understanding your brand's unique needs and goals. Every project starts with a clear vision of what success means to you and your audience.";
      case 'creativity':
        return 'Our creative team combines artistic expertise with strategic thinking to develop concepts that are both innovative and aligned with your objectives.';
      case 'execution':
        return 'With meticulous planning and technical excellence, we bring concepts to life using premium equipment and production techniques.';
      case 'results':
      default:
        return 'We measure success through audience engagement, brand perception shifts, and business outcomes—delivering content that achieves real results.';
    }
  };

  // Approach tabs data
  const approachTabs = [
    { id: 'vision', icon: '👁️', color: 'from-[#2d5f59] to-[#F4FF78]' },
    { id: 'creativity', icon: '✨', color: 'from-amber-500 to-orange-500' },
    { id: 'execution', icon: '🚀', color: 'from-blue-500 to-indigo-500' },
    { id: 'results', icon: '📈', color: 'from-green-500 to-teal-500' },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: t('whyUs.testimonials.clients.sophia.name', 'Sophia Laurent'),
      role: t(
        'whyUs.testimonials.clients.sophia.role',
        'Marketing Director, Swiss Luxury Properties',
      ),
      content: t(
        'whyUs.testimonials.clients.sophia.content',
        'Prestige Production transformed our property showcases into cinematic experiences. The attention to detail and visual storytelling are unmatched in the industry.',
      ),
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
    },
    {
      id: 2,
      name: t('whyUs.testimonials.clients.marco.name', 'Marco Bernini'),
      role: t(
        'whyUs.testimonials.clients.marco.role',
        'CEO, Elite Events Switzerland',
      ),
      content: t(
        'whyUs.testimonials.clients.marco.content',
        'Working with Dorian and Alex was seamless from start to finish. They captured the essence of our corporate event while maintaining the highest production standards.',
      ),
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    },
    {
      id: 3,
      name: t('whyUs.testimonials.clients.elise.name', 'Elise Dubois'),
      role: t(
        'whyUs.testimonials.clients.elise.role',
        'Brand Manager, Geneva Luxe',
      ),
      content: t(
        'whyUs.testimonials.clients.elise.content',
        'The team at Prestige Production has an exceptional eye for brand storytelling. Their work elevated our brand campaign and resonated deeply with our audience.',
      ),
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    },
  ];

  useEffect(() => {
    document.title = t('whyUs.pageTitle', 'Why Us | Prestige Production');
  }, [t]);

  // Handle touch events for mobile swipe
  const minSwipeDistance = 50;

  const onTouchStart = e => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = e => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      // Swipe left - next testimonial
      setCurrentTestimonial(prev =>
        prev === testimonials.length - 1 ? 0 : prev + 1,
      );
    }

    if (isRightSwipe) {
      // Swipe right - previous testimonial
      setCurrentTestimonial(prev =>
        prev === 0 ? testimonials.length - 1 : prev - 1,
      );
    }
  };

  // Ensure testimonial is shown when scrolling to that section
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          // Reset to first testimonial for better user experience
          setCurrentTestimonial(0);
        }
      },
      { threshold: 0.3 },
    );

    if (testimonialsSectionRef.current) {
      observer.observe(testimonialsSectionRef.current);
    }

    return () => {
      if (testimonialsSectionRef.current) {
        observer.unobserve(testimonialsSectionRef.current);
      }
    };
  }, []);

  // Function to smoothly scroll to sections
  const scrollToSection = ref => {
    if (ref && ref.current) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: ref.current, offsetY: 100 },
        ease: 'power3.inOut',
      });
    }
  };
  useGSAP(() => {
    // Initial fade in animations
    gsap.from('.fade-in', {
      opacity: 0,
      y: 20,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
    });

    // Team photo reveal animation
    gsap.fromTo(
      '.team-photo-reveal',
      { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
      {
        scrollTrigger: {
          trigger: teamRef.current,
          start: 'top 80%',
        },
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        duration: 1.2,
        ease: 'power3.out',
      },
    );

    // Individual team members staggered entrance
    gsap.from('.team-individual', {
      scrollTrigger: {
        trigger: individualSectionRef.current,
        start: 'top 70%',
      },
      y: 50,
      opacity: 0,
      stagger: 0.3,
      duration: 0.8,
      ease: 'back.out(1.7)',
    });

    // Approach section tab animations
    gsap.from('.approach-tab', {
      scrollTrigger: {
        trigger: approachSectionRef.current,
        start: 'top 75%',
      },
      opacity: 0,
      x: -30,
      stagger: 0.15,
      duration: 0.6,
      ease: 'power2.out',
    });

    // We removed testimonial cards GSAP animation to avoid conflicts with Framer Motion

    // Testimonial navigation dots
    gsap.from('.testimonial-dot', {
      scale: 0,
      stagger: 0.1,
      duration: 0.4,
      ease: 'back.out(2)',
      delay: 1,
    });
  }, []);

  // Team member data
  const teamMembers = [
    {
      nameKey: 'duo',
      image: '/assets/images/duo.png',
      roleKey: 'duoRole',
      descriptionKeys: ['duoDesc1', 'duoDesc2', 'duoDesc3'],
    },
    {
      nameKey: 'dorian',
      image: '/assets/images/dorian.jpg',
      roleKey: 'dorianRole',
      descriptionKeys: ['dorianDesc1', 'dorianDesc2', 'dorianDesc3'],
    },
    {
      nameKey: 'alex',
      image: '/assets/images/alex.jpg',
      roleKey: 'alexRole',
      descriptionKeys: ['alexDesc1', 'alexDesc2', 'alexDesc3'],
    },
  ];

  const [duo, ...individuals] = teamMembers;

  return (
    <section
      ref={sectionRef}
      className='relative w-full min-h-screen bg-gradient-to-b from-black via-gray-900/20 to-black text-white pt-20 overflow-hidden'
    >
      {/* Quick navigation menu */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className='fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col gap-6'
      >
        <div className='flex flex-col items-center gap-1'>
          <motion.button
            onClick={() => scrollToSection(teamRef)}
            className='w-3 h-3 rounded-full bg-white/40 hover:bg-[#F4FF78] transition-all duration-300'
            whileHover={{ scale: 1.5 }}
            aria-label='Go to Team section'
          />
          <div className='h-10 w-px bg-white/20'></div>
          <motion.button
            onClick={() => scrollToSection(individualSectionRef)}
            className='w-3 h-3 rounded-full bg-white/40 hover:bg-[#F4FF78] transition-all duration-300'
            whileHover={{ scale: 1.5 }}
            aria-label='Go to Team Members section'
          />
          <div className='h-10 w-px bg-white/20'></div>
          <motion.button
            onClick={() => scrollToSection(approachSectionRef)}
            className='w-3 h-3 rounded-full bg-white/40 hover:bg-[#F4FF78] transition-all duration-300'
            whileHover={{ scale: 1.5 }}
            aria-label='Go to Approach section'
          />
          <div className='h-10 w-px bg-white/20'></div>
          <motion.button
            onClick={() => scrollToSection(testimonialsSectionRef)}
            className='w-3 h-3 rounded-full bg-white/40 hover:bg-[#F4FF78] transition-all duration-300'
            whileHover={{ scale: 1.5 }}
            aria-label='Go to Testimonials section'
          />
        </div>
      </motion.div>

      <div className='max-w-6xl mx-auto px-6 sm:px-10 relative z-10'>
        {/* Headline with animated gradient */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center'
        >
          {/* Title heading */}
          <h1 className='text-5xl md:text-7xl font-light fade-in mb-8 text-center relative'>
            {t('whyUs.title', 'Why Work With Us?')}
            <div className='absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-0.5 w-32 bg-gradient-to-r from-transparent via-[#2d5f59] to-transparent'></div>
          </h1>

          <p className='text-xl text-center text-white/70 fade-in mb-6 max-w-3xl mx-auto leading-relaxed'>
            {t(
              'whyUs.subtitle',
              "Prestige Production is more than just a video company, it's a partnership built on vision, creativity, and performance.",
            )}
          </p>

          {/* Abstract decorative symbol */}
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.5 }}
            className='w-12 h-12 mx-auto mb-16'
          >
            <div className='relative w-full h-full'>
              <div className='absolute inset-0 bg-gradient-to-r from-[#2d5f59] to-[#F4FF78] rounded-full opacity-20 animate-pulse'></div>
              <div className='absolute inset-1 bg-black rounded-full flex items-center justify-center'>
                <span className='text-white/70 text-xl'>✦</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Duo Photo with enhanced presentation */}
        <div ref={teamRef} key={duo.nameKey} className='mb-32'>
          <div className='rounded-2xl mb-12 shadow-xl overflow-hidden max-w-4xl mx-auto relative'>
            {/* Photo reveal animation container */}
            <div className='team-photo-reveal'>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className='relative'
              >
                <img
                  src={duo.image}
                  alt={t(`whyUs.team.${duo.nameKey}.name`, 'Dorian & Alex')}
                  className='w-full h-auto object-cover'
                  loading='eager'
                />
                {/* Gradient overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70'></div>
              </motion.div>
            </div>

            {/* Caption overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className='absolute bottom-0 left-0 right-0 p-8 text-left'
            >
              <span className='px-3 py-1 text-xs rounded-full bg-white/20 backdrop-blur-sm text-white/90 mb-4 inline-block'>
                {t('whyUs.teamLabel', 'OUR TEAM')}
              </span>
              <h2 className='text-3xl sm:text-4xl font-medium mb-1 text-white'>
                {t(`whyUs.team.${duo.nameKey}.name`, 'Dorian & Alex')}
              </h2>
              <p className='text-white/80 text-sm mb-2 font-light'>
                {t(
                  `whyUs.team.${duo.nameKey}.role`,
                  'Founders of Prestige Production',
                )}
              </p>
            </motion.div>
          </div>

          {/* Team story */}
          <div className='text-white/80 text-md space-y-5 max-w-3xl mx-auto px-4'>
            {duo.descriptionKeys.map((key, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx, duration: 0.6 }}
                viewport={{ once: true }}
                className={idx === 0 ? 'text-lg' : ''}
              >
                {t(
                  `whyUs.team.${duo.nameKey}.description.${key}`,
                  "We're Alex and Dorian, co-founders of Prestige Production—a creative studio built on a shared passion for visual storytelling.",
                )}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Meet The Team Heading */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl md:text-5xl font-light mb-4'>
            <span>{t('whyUs.meetThe', 'Meet The ')} </span>
            <span className={`${GRADIENT_CLASS} bg-clip-text text-transparent`}>
              {t('whyUs.creativeMinus', 'Creative Minds')}
            </span>
          </h2>
          <div className='w-24 h-0.5 mx-auto bg-gradient-to-r from-transparent via-[#2d5f59]/50 to-transparent'></div>
        </motion.div>

        {/* Individuals with enhanced presentation */}
        <div
          ref={individualSectionRef}
          className='grid md:grid-cols-2 gap-x-16 gap-y-20 items-start mb-32'
        >
          {individuals.map((member, idx) => (
            <div key={member.nameKey} className='team-individual'>
              <div className='flex flex-col md:flex-row gap-8 items-center md:items-start'>
                {/* Photo with hover effect */}
                <motion.div
                  whileHover={{
                    y: -5,
                    boxShadow: '0 25px 50px -12px rgba(45, 95, 89, 0.25)',
                  }}
                  transition={{ duration: 0.3 }}
                  className={`w-3/4 sm:w-1/2 md:w-2/5 mx-auto md:mx-0 aspect-[3/4] rounded-xl overflow-hidden shadow-lg ${
                    member.nameKey === 'dorian'
                      ? 'bg-gradient-to-br from-[#2d5f59]/40 to-black/20'
                      : 'bg-gradient-to-br from-[#2d5f59]/40 to-black/20'
                  }`}
                >
                  <img
                    src={member.image}
                    alt={t(`whyUs.team.${member.nameKey}.name`, member.nameKey)}
                    className='w-full h-full object-cover hover:scale-105 transition duration-700'
                  />
                </motion.div>

                {/* Content with enhanced presentation */}
                <div className='w-full md:w-3/5 text-center md:text-left'>
                  <h3 className='text-2xl font-medium mb-2'>
                    {t(`whyUs.team.${member.nameKey}.name`, member.nameKey)}
                  </h3>
                  <p
                    className={`inline-block px-3 py-1 rounded-full text-white text-xs mb-5 ${
                      member.nameKey === 'dorian' || member.nameKey === 'alex'
                        ? 'bg-[#2d5f59]/40'
                        : 'bg-[#2d5f59]/40'
                    }`}
                  >
                    {t(`whyUs.team.${member.nameKey}.role`, 'Role')}
                  </p>

                  {/* Expertise areas with interactive pills */}
                  <div className='flex flex-wrap justify-center md:justify-start gap-2 mb-5'>
                    {skills[member.nameKey]?.map((skill, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        onClick={() =>
                          setActiveSkill(
                            activeSkill === `${member.nameKey}-${i}`
                              ? null
                              : `${member.nameKey}-${i}`,
                          )
                        }
                        className={`cursor-pointer text-xs px-3 py-1 rounded-full transition-colors duration-300 ${
                          activeSkill === `${member.nameKey}-${i}`
                            ? 'bg-[#2d5f59] text-white'
                            : 'bg-white/10 text-white/70 hover:bg-white/20'
                        }`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Description with enhanced typography */}
                  <div className='text-white/70 space-y-4'>
                    {member.descriptionKeys.map((key, i) => (
                      <motion.p
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 * i, duration: 0.5 }}
                        viewport={{ once: true }}
                        className='text-sm leading-relaxed text-center md:text-left'
                      >
                        {t(
                          `whyUs.team.${member.nameKey}.description.${key}`,
                          'Description paragraph',
                        )}
                      </motion.p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Our Approach Section */}
        <div ref={approachSectionRef} className='mb-32'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-6 md:mb-10'
          >
            <h2 className='text-3xl md:text-5xl font-light mb-4'>
              <span>{t('whyUs.approach.title', 'Our ')} </span>
              <span
                className={`${GRADIENT_CLASS} bg-clip-text text-transparent`}
              >
                {t('whyUs.approach.highlight', 'Approach')}
              </span>
            </h2>
            <div className='w-24 h-0.5 mx-auto bg-gradient-to-r from-transparent via-[#2d5f59]/50 to-transparent'></div>
          </motion.div>

          <div className='bg-gradient-to-b from-[#2d5f59]/5 to-black/10 rounded-2xl p-3 md:p-8 shadow-xl backdrop-blur-sm'>
            {/* Approach Tabs */}
            <div className='flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-12'>
              {approachTabs.map(tab => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`approach-tab flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full transition-all duration-300 ${
                    activeTab === tab.id
                      ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className='text-xl'>{tab.icon}</span>
                  <span className='font-medium'>
                    {t(
                      `whyUs.approach.${tab.id}.tab`,
                      tab.id.charAt(0).toUpperCase() + tab.id.slice(1),
                    )}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Tab Content with illustrations */}
            <div className='grid md:grid-cols-5 gap-4 md:gap-6 items-center'>
              <div className='md:col-span-3 order-2 md:order-1'>
                <AnimatePresence mode='wait'>
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className='text-2xl md:text-3xl mb-4 font-light'>
                      {t(
                        `whyUs.approach.${activeTab}.title`,
                        `Our ${
                          activeTab.charAt(0).toUpperCase() + activeTab.slice(1)
                        }`,
                      )}
                    </h3>
                    <p className='text-white/70 text-md mb-6 leading-relaxed'>
                      {t(
                        `whyUs.approach.${activeTab}.description`,
                        getApproachDescription(activeTab),
                      )}
                    </p>
                    <ul className='space-y-3'>
                      {[1, 2, 3].map(i => (
                        <motion.li
                          key={i}
                          className='flex items-start gap-3'
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <div
                            className={`flex-shrink-0 w-6 h-6 mt-0.5 rounded-full bg-gradient-to-r ${
                              approachTabs.find(t => t.id === activeTab).color
                            } flex items-center justify-center text-white text-xs`}
                          >
                            ✓
                          </div>
                          <span className='text-white/80'>
                            {t(
                              `whyUs.approach.${activeTab}.point${i}`,
                              getApproachPointText(activeTab, i),
                            )}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className='md:col-span-2 order-1 md:order-2 relative'>
                {/* Decorative blurs removed */}

                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className='relative bg-gradient-to-br from-white/5 to-transparent p-4 rounded-xl shadow-lg backdrop-blur-sm border border-white/10'
                >
                  <div
                    className={`aspect-square w-3/5 sm:w-4/5 md:w-full mx-auto rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-br ${
                      approachTabs.find(t => t.id === activeTab).color
                    }/20`}
                  >
                    <div className='text-5xl sm:text-6xl md:text-8xl transform transition-transform hover:scale-110 duration-700'>
                      {approachTabs.find(t => t.id === activeTab).icon}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div ref={testimonialsSectionRef} className='mb-32'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-3xl md:text-5xl font-light mb-4'>
              <span>{t('whyUs.testimonials.titlePrefix', 'Client ')} </span>
              <span
                className={`${GRADIENT_CLASS} bg-clip-text text-transparent`}
              >
                {t('whyUs.testimonials.title', 'Testimonials')}
              </span>
            </h2>
            <div className='w-24 h-0.5 mx-auto bg-gradient-to-r from-transparent via-[#2d5f59]/50 to-transparent'></div>
          </motion.div>

          <div className='max-w-4xl mx-auto px-6'>
            <div
              className='relative min-h-[350px]'
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <AnimatePresence mode='wait' initial={false}>
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className='testimonial-card bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 shadow-xl'
                >
                  <div className='flex flex-col md:flex-row gap-6 items-center'>
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      className='flex-shrink-0 w-24 h-24 rounded-full overflow-hidden border-2 border-white/20 shadow-lg'
                    >
                      <img
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        className='w-full h-full object-cover'
                      />
                    </motion.div>

                    <div className='flex-grow text-center md:text-left'>
                      <div className='text-amber-300 mb-4 text-lg'>★★★★★</div>
                      <blockquote className='text-white/80 text-lg italic mb-4'>
                        "{testimonials[currentTestimonial].content}"
                      </blockquote>
                      <div>
                        <p className='text-white font-medium text-lg'>
                          {testimonials[currentTestimonial].name}
                        </p>
                        <p className='text-white/60 text-sm'>
                          {testimonials[currentTestimonial].role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation buttons */}
              <div className='flex justify-center mt-4 md:mt-8 gap-3'>
                {testimonials.map((_, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`testimonial-dot w-3 h-3 rounded-full ${
                      currentTestimonial === idx
                        ? 'bg-[#2d5f59] scale-125'
                        : 'bg-white/30 hover:bg-white/50'
                    } transition-all duration-300`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>

              {/* Mobile swipe hint */}
              <div className='flex md:hidden justify-center items-center mt-3 text-white/40 text-xs'>
                <span className='animate-pulse'>
                  {t('whyUs.testimonials.swipeHint', '← Swipe to navigate →')}
                </span>
              </div>

              {/* Prev/Next buttons */}
              <div className='hidden md:flex justify-between absolute top-1/2 left-0 right-0 -mx-10 transform -translate-y-1/2 pointer-events-none'>
                <motion.button
                  onClick={() =>
                    setCurrentTestimonial(prev =>
                      prev === 0 ? testimonials.length - 1 : prev - 1,
                    )
                  }
                  className='w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm text-white/70 hover:text-white flex items-center justify-center border border-white/10 pointer-events-auto'
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  ‹
                </motion.button>
                <motion.button
                  onClick={() =>
                    setCurrentTestimonial(prev =>
                      prev === testimonials.length - 1 ? 0 : prev + 1,
                    )
                  }
                  className='w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm text-white/70 hover:text-white flex items-center justify-center border border-white/10 pointer-events-auto'
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  ›
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='py-20 px-6 rounded-3xl relative overflow-hidden mt-16 mb-10 text-center bg-black/30 border border-[#2d5f59]/20 shadow-xl'
        >
          {/* Background elements */}
          <div className='absolute inset-0 bg-gradient-to-b from-[#2d5f59]/10 to-black/20 z-0'></div>

          {/* Content wrapper */}
          <div className='relative z-10'>
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className='inline-block px-6 py-2 rounded-full bg-[#2d5f59]/20 text-white/90 text-sm font-medium mb-8 border border-[#2d5f59]/30'
            >
              {t('whyUs.ctaSection.label', 'TAKE THE NEXT STEP')}
            </motion.span>

            <h2 className='text-3xl md:text-5xl font-light mb-6'>
              {t('whyUs.ctaSection.title', 'Ready to Create Something')}{' '}
              <span
                className={`${GRADIENT_CLASS} bg-clip-text text-transparent`}
              >
                {t('whyUs.ctaSection.highlight', 'Exceptional?')}
              </span>
            </h2>

            <p className='text-white/70 text-lg max-w-2xl mx-auto mb-10'>
              {t(
                'whyUs.ctaSection.description',
                'Let our creative team transform your vision into impactful visual content that resonates with your audience.',
              )}
            </p>

            <div className='flex flex-col sm:flex-row gap-5 justify-center'>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='relative'
              >
                <Link
                  to={`/${currentLang}/contact`}
                  className={`${GRADIENT_CLASS} text-white text-xl font-medium px-10 py-4 rounded-full hover:shadow-lg hover:shadow-[#2d5f59]/30 transition-all inline-flex items-center gap-3`}
                >
                  <span>{t('whyUs.cta', "Let's work together")}</span>
                  <span className='text-xl'>→</span>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='relative'
              >
                <Link
                  to={`/${currentLang}/portfolio`}
                  className='bg-black/30 backdrop-blur-sm text-white border border-white/10 text-xl font-medium px-10 py-4 rounded-full hover:bg-black/40 transition-all inline-flex items-center gap-3'
                >
                  <span>
                    {t('whyUs.ctaSection.portfolioCta', 'View Our Work')}
                  </span>
                  <span className='text-xl'>→</span>
                </Link>
              </motion.div>
            </div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className='flex flex-wrap justify-center gap-x-10 gap-y-4 mt-16 text-white/70 text-sm'
            >
              <div className='flex items-center gap-3'>
                <span className='text-[#F4FF78]'>✓</span>{' '}
                {t(
                  'whyUs.ctaSection.trustIndicators.quality',
                  'Premium Quality',
                )}
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-[#F4FF78]'>✓</span>{' '}
                {t(
                  'whyUs.ctaSection.trustIndicators.turnaround',
                  'Fast Turnaround',
                )}
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-[#F4FF78]'>✓</span>{' '}
                {t(
                  'whyUs.ctaSection.trustIndicators.satisfaction',
                  'Satisfaction Guaranteed',
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Back to top button */}
      <motion.button
        onClick={() => {
          gsap.to(window, {
            duration: 0.8,
            scrollTo: 0,
            ease: 'power2.inOut',
          });
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className='fixed bottom-8 right-8 bg-white/10 hover:bg-white/20 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center text-white border border-white/10 shadow-lg z-50 transition-all duration-300 hover:shadow-xl'
        whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0,0,0,0.2)' }}
        whileTap={{ scale: 0.95 }}
      >
        <span className='transform -rotate-90'>→</span>
      </motion.button>
    </section>
  );
};

export default WhyUs;
