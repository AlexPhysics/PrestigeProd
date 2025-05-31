import React from 'react';
import { Link } from 'react-router-dom';
import { highlightSecondVideo } from '../utils';

const serviceCards = [
  {
    id: 'longform',
    title: 'Long-Form Video Tours',
    text: 'Narrative-driven property stories in cinematic quality. Ideal for YouTube and websites.',
  },
  {
    id: 'reels',
    title: 'Social Media Reels',
    text: 'High-impact Instagram & TikTok shorts, crafted for engagement and virality.',
  },
  {
    id: 'hdr',
    title: 'HDR Photography',
    text: 'Perfectly balanced images using high-dynamic-range techniques to showcase space and light.',
  },
];

const Services = () => {
  return (
    <main className='bg-black text-white font-sans'>
      {/* Hero */}
      <section className='relative w-full h-screen overflow-hidden flex items-center justify-center'>
        <div className='absolute inset-0 w-full h-full'>
          <video
            src={highlightSecondVideo}
            autoPlay
            muted
            loop
            playsInline
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 z-10' />
        </div>

        <div className='relative z-20 text-center px-6 max-w-3xl mx-auto'>
          <h1 className='text-4xl md:text-6xl font-light tracking-tight mb-4'>
            Elevating Visual Storytelling
          </h1>
          <p className='text-white/80 text-lg md:text-xl mb-8'>
            From cinematic property tours to scroll-stopping reels, we craft
            content that inspires, informs, and converts.
          </p>
          <Link
            to='/contact'
            className='bg-white text-black text-sm font-medium px-6 py-3 rounded-full hover:bg-gray-200 transition duration-300'
          >
            Work With Us
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className='py-24 px-6 max-w-6xl mx-auto'>
        <h2 className='text-center text-2xl sm:text-4xl font-light mb-16 tracking-tight'>
          What We Offer
        </h2>
        <div className='grid gap-12 sm:grid-cols-2 lg:grid-cols-3'>
          {serviceCards.map(({ id, title, text }) => (
            <Link
              key={id}
              to={`/services#${id}`}
              className='bg-black border border-white/10 hover:border-white/30 rounded-2xl p-8 text-center hover:shadow-2xl transition duration-300'
            >
              <h3 className='text-xl font-semibold mb-3'>{title}</h3>
              <p className='text-white/70 text-sm leading-relaxed'>{text}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className='bg-white text-black py-16'>
        <div className='max-w-4xl mx-auto text-center px-6'>
          <h2 className='text-3xl sm:text-4xl font-light mb-6'>
            Ready to Elevate Your Brand?
          </h2>
          <p className='text-gray-700 mb-8 text-lg'>
            Let us transform your properties into visual experiences that stand
            out.
          </p>
          <Link
            to='/contact'
            className='bg-black text-white text-sm font-medium px-8 py-3 rounded-full hover:bg-zinc-800 transition'
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Services;
