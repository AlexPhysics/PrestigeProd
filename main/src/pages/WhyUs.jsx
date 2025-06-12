import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Lights from '../components/Lights';

const WhyUs = () => {
  useEffect(() => {
    document.title = 'Why Us | Prestige Production';
  }, []);

  useGSAP(() => {
    gsap.from('.fade-in', {
      opacity: 0,
      y: 20,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
    });
  }, []);

  return (
    <section className='relative w-full min-h-screen bg-black text-white py-20 px-6 sm:px-10 overflow-hidden'>
      {/* Background Lights */}
      <div className='absolute top-0 left-0 w-full h-full -z-10'>
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }} frameloop='demand'>
          <Lights />
        </Canvas>
      </div>

      <div className='max-w-5xl mx-auto'>
        {/* Headline */}
        <h1 className='text-5xl md:text-6xl font-light fade-in mb-6 text-center'>
          Why Work With Us?
        </h1>
        <p className='text-lg text-center text-white/70 fade-in mb-16'>
          Prestige Production is more than just a video company — it's a partnership built on vision, creativity, and performance.
        </p>

        {/* Duo Photo First */}
        <div className='fade-in mb-20'>
          <div className='w-full aspect-video md:aspect-[16/9] rounded-2xl overflow-hidden shadow-xl'>
            <img
              src='/images/duo.jpg'
              alt='Dorian and Alex'
              className='w-full h-full object-cover'
              loading='lazy'
            />
          </div>
          <p className='text-white/70 text-base mt-6 text-center max-w-3xl mx-auto'>
            Together, we are the team behind the lens. From directing shoots to fine-tuning edits, we bring different strengths that complement one another — and your projects.
          </p>
        </div>

        {/* Individual Profiles */}
        <div className='grid md:grid-cols-2 gap-16 fade-in'>
          {/* Dorian */}
          <div className='text-center'>
            <div className='aspect-square overflow-hidden rounded-xl mb-4 shadow-lg'>
              <img
                src='/images/dorian.jpg'
                alt='Dorian'
                className='w-full h-full object-cover'
                loading='lazy'
              />
            </div>
            <h2 className='text-2xl font-semibold mb-2'>Dorian</h2>
            <p className='text-white/70 text-sm'>
              Creative lead and co-founder, Dorian is the eye behind our signature cinematic storytelling. With a passion for architecture and visual design, he ensures each listing feels premium.
            </p>
          </div>

          {/* Alex */}
          <div className='text-center'>
            <div className='aspect-square overflow-hidden rounded-xl mb-4 shadow-lg'>
              <img
                src='/images/alex.jpg'
                alt='Alex'
                className='w-full h-full object-cover'
                loading='lazy'
              />
            </div>
            <h2 className='text-2xl font-semibold mb-2'>Alex</h2>
            <p className='text-white/70 text-sm'>
              Technical director and co-founder, Alex brings life to vision. He handles drones, gimbals, and every bit of post-production magic that elevates your listings.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className='mt-24 text-center fade-in'>
          <a
            href='/contact'
            className='inline-block px-8 py-4 bg-white text-black text-lg font-medium rounded-full hover:scale-105 transition-transform'
          >
            Let’s Work Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
