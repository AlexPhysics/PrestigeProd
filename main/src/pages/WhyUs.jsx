import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const teamMembers = [
  {
    name: 'Dorian & Alex',
    image: 'assets/images/duo.png',
    role: 'Founders of Prestige Production',
    description: [
      'We’re Alex and Dorian, co-founders of Prestige Production—a creative studio built on a shared passion for visual storytelling.',
      'At Prestige Production, we combine technical expertise with a creative mindset to craft videos that not only look great but communicate purpose and meaning.',
      "Whether it's promotional content, cinematic montages, or brand storytelling—our focus is always on quality, clarity, and lasting impression.",
    ],
  },
  {
    name: 'Dorian',
    image: 'assets/images/dorian.jpg',
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

  const [duo, ...individuals] = teamMembers;

  return (
    <section className='relative w-full min-h-screen bg-black text-white py-20 px-6 sm:px-10 overflow-hidden'>
      <div className='max-w-6xl mx-auto'>
        {/* Headline */}
        <h1 className='text-5xl md:text-6xl font-light fade-in mb-6 text-center'>
          Why Work With Us?
        </h1>
        <p className='text-lg text-center text-white/70 fade-in mb-16'>
          Prestige Production is more than just a video company — it's a
          partnership built on vision, creativity, and performance.
        </p>

        {/* Duo Photo */}
        <div key={duo.name} className='fade-in mb-24 text-center'>
          <div className='rounded-xl mb-8 shadow-lg overflow-hidden max-w-4xl mx-auto'>
            <img
              src={duo.image}
              alt={duo.name}
              className='w-full h-auto max-h-[700px] object-contain'
              loading='lazy'
            />
          </div>
          <h2 className='text-2xl font-semibold mb-1'>{duo.name}</h2>
          <h3 className='text-white/60 text-sm mb-8 italic'>{duo.role}</h3>
          <div className='text-white/70 text-sm space-y-4 max-w-3xl mx-auto'>
            {duo.description.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        </div>

        {/* Individuals Side-by-Side */}
        <div className='grid md:grid-cols-2 gap-16 fade-in items-start'>
          {individuals.map(({ name, image, role, description }) => (
            <div key={name} className='flex flex-col items-center text-center'>
              {/* Fixed-ratio container so both pics keep identical size */}
              <div className='w-full relative h-full rounded-xl shadow-lg overflow-hidden mb-6'>
                <img
                  src={image}
                  alt={name}
                  className='w-full h-auto max-h-[700px] object-contain rounded-xl'
                  loading='lazy'
                />
              </div>

              <h2 className='text-2xl font-semibold mb-1'>{name}</h2>
              <h3 className='text-white/60 text-sm mb-6 italic'>{role}</h3>
              <div className='text-white/70 text-sm space-y-4 max-w-md'>
                {description.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </div>
          ))}
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
