import { useGSAP } from '@gsap/react';
import React, { useRef, useState } from 'react';
import { animateWithGsap } from '../utils/animations';
import { explore1Img, explore2Img, exploreVideo, frameImg } from '../utils';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { smiLogo } from '../utils';

gsap.registerPlugin(ScrollTrigger);

const SmiProject = () => {
  const videoRef = useRef();
  const [lightboxSrc, setLightboxSrc] = useState(null);

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
      {/* Back Link + Aftermovie Link */}
      <div className='max-w-6xl mx-auto mb-12 px-2 flex justify-between items-center'>
        <Link
          to='/portfolio'
          className='text-sm text-white/60 hover:text-white transition duration-300'
        >
          ← Go back to our work
        </Link>

        <a
          href='#aftermovie'
          className='text-xs tracking-wide text-white/40 hover:text-white transition duration-300 underline underline-offset-4'
        >
          Watch the official aftermovie
        </a>
      </div>

      {/* Headings */}
      <div className='text-center max-w-4xl mx-auto mb-20'>
        <h1
          id='features_title'
          className='text-5xl md:text-6xl font-semibold tracking-tight mb-4 opacity-0 translate-y-6 overflow-hidden'
        >
          <span className='inline-block animate-text-reveal'>
            It’s all about luxury.
          </span>
        </h1>
        <h2 className='text-3xl lg:text-5xl font-light mb-2'>
          Swiss Mining Institute 2024
        </h2>
        <h3 className='text-xl lg:text-2xl text-white/70'>
          The most prestigious mining conference in the world
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
              alt={`Smi Photo ${i + 1}`}
              className='w-full h-full object-cover g_grow hover:scale-105 transition-transform duration-300'
            />
          </div>
        ))}
      </div>

      {/* Reel in iPhone Frame */}
      <div className='mt-10 md:mt-20 mb-14'>
        <div className='relative mx-auto w-[90vw] max-w-[360px] aspect-[9/16]'>
          {/* iPhone Frame Image */}
          <img
            src={frameImg}
            alt='iPhone Frame'
            className='absolute top-0 left-0 w-full h-full object-contain transform rotate-90 z-10 pointer-events-none'
          />

          {/* YouTube Reel positioned and scaled */}
          <div className='absolute top-[9%] left-[6.5%] w-[87%] h-[82%] rounded-[1.5rem] overflow-hidden z-0'>
            <iframe
              src='https://www.youtube.com/embed/ZQ9tmIOj4eY?modestbranding=1&rel=0&controls=1'
              title='Reel'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              className='w-full h-full'
            ></iframe>
          </div>
        </div>
      </div>

      {/* Description Text */}
      <div className='fade-section-3 space-y-12 max-w-3xl mx-auto mb-24 px-4'>
        <p className='text-lg text-white/80 g_text'>
          The Swiss Mining Institute is{' '}
          <span className='text-white'>
            the biggest and most exclusive mining conference in Europe
          </span>
          . Hosting 1000+ investors, 100+ listed companies and over 2700
          meetings arranged over 2 days.
        </p>
        <p className='text-lg text-white/80 g_text'>
          For two days, we captured{' '}
          <span className='text-white'>
            everything a camera lens could reach
          </span>
          . From <span className='text-white'>interviews</span>,{' '}
          <span className='text-white'>panel discussions</span> and the{' '}
          <span className='text-white'>official aftermovie</span> to{' '}
          <span className='text-white'>photos</span>,{' '}
          <span className='text-white'>social content</span> and more — we
          delivered it all.
        </p>
      </div>

      {/* YouTube Aftermovie */}
      <div
        id='aftermovie'
        className='fade-section-4 max-w-5xl mx-auto mb-24 text-center scroll-mt-40'
      >
        <h2 className='text-3xl font-semibold mb-2 relative inline-block after:block after:h-[2px] after:bg-white/40 after:w-0 after:absolute after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-700'>
          Watch the Official Aftermovie
        </h2>
        <div className='aspect-video w-full mt-6 rounded-xl overflow-hidden shadow-lg'>
          <iframe
            width='100%'
            height='100%'
            src='https://www.youtube.com/embed/8wwsxj5VIFI'
            title='Official Aftermovie'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* YouTube Interview */}
      <div className='fade-section-4 max-w-5xl mx-auto text-center mb-24'>
        <h2 className='text-3xl font-semibold mb-2 relative inline-block after:block after:h-[2px] after:bg-white/40 after:w-0 after:absolute after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-700'>
          Featured Interviews
        </h2>
        <div className='aspect-video w-full mt-6 rounded-xl overflow-hidden shadow-lg'>
          <iframe
            width='100%'
            height='100%'
            src='https://www.youtube.com/embed/WkSTG_GQUJQ'
            title='Interview'
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
                alt='Enlarged'
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
          Thanks to our partner
        </p>
        <a
          href='https://www.swissmininginstitute.ch/'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block hover:scale-105 transition-transform duration-500'
        >
          <img
            src={smiLogo}
            alt='Swiss Mining Institute'
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
