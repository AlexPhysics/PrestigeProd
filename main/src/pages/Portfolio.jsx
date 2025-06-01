import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  useEffect(() => {
    document.title = 'Our Work | Prestige Production';
  }, []);
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
            className='text-sm font-semibold uppercase tracking-widest text-white mb-2'
          >
            Our Work
          </h2>
          <div
            id='underline'
            className='absolute left-1/2 -translate-x-1/2 mt-2 h-[1px] w-48 bg-white/70 origin-center scale-x-0'
          />
        </div>

        {/* Main headline */}
        <h1
          id='main-headline'
          className='text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-tight mb-6'
        >
          Discover how{' '}
          <span className='text-white/90'>Prestige Production</span> brings
          stories to life.
        </h1>

        {/* Subheadline */}
        <p
          id='sub-headline'
          className='text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto'
        >
          From luxury real estate to high-end events, we craft cinematic
          journeys that elevate every project.
        </p>
      </div>

      {/* Projects Grid - centered and constrained width */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto'>
        {projects.map((proj, idx) => (
          <Link
            key={proj.id}
            to={proj.link}
            className='group block rounded-3xl overflow-hidden relative shadow-lg'
            ref={el => (cardsRef.current[idx] = el)}
          >
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
    </section>
  );
};

export default Portfolio;
