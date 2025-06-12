import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Lights from '../components/Lights';

const teamMembers = [
  {
    name: 'Dorian & Alex',
    image: 'assets/images/duo.png',
    role: 'Founders of Prestige Production',
    description: [
      'Two creative minds. One shared vision.',
      'Dorian & Alex combine their strengths to deliver high-end real estate video experiences — cinematic, effective, and unforgettable.',
      'Their partnership is built on passion, precision, and a deep understanding of how visuals drive sales in the luxury market.',
    ],
  },
  {
    name: 'Dorian',
    image: '/images/dorian.jpg',
    role: 'Creative Director',
    description: [
      'Dorian is the eye behind our cinematic storytelling.',
      'With a passion for architecture and design, he turns properties into elegant narratives.',
      'He leads the visual direction and ensures every project feels unique, premium, and strategic.',
    ],
  },
  {
    name: 'Alex',
    image: 'assets/images/alex.jpg',
    role: 'Technical Director',
    description: [
      'Alex is the technical brain of the operation.',
      'From drones to editing suites, he handles it all — ensuring crisp footage, smooth edits, and flawless delivery.',
      'He’s obsessed with quality and elevates every video to meet professional-grade standards.',
    ],
  },
];


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

      {/* Team Members Loop */}
      {teamMembers.map(({ name, image, role, description }) => (
        <div key={name} className='fade-in mb-20 text-center'>
<div className='rounded-xl mb-4 shadow-lg max-w-3xl mx-auto overflow-hidden'>
  <img
    src={image}
    alt={name}
    className='w-auto max-w-full max-h-[600px] mx-auto object-contain'
    loading='lazy'
  />
</div>

          <h2 className='text-2xl font-semibold mb-1'>{name}</h2>
          <h3 className='text-white/60 text-sm mb-4 italic'>{role}</h3>
          <div className='text-white/70 text-sm space-y-4 max-w-md mx-auto text-left'>
            {description.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        </div>
      ))}

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
