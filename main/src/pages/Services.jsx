import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { highlightSecondVideo } from '../utils';
import { motion } from 'framer-motion';
import SpotlightCard from '../components/SpotlightCard';

const serviceCards = [
  {
    id: 'longform',
    title: 'Videos',
    text: 'Narrative-driven property stories in cinematic quality. Ideal for YouTube and websites.',
    link: '/services#longform',
  },
  {
    id: 'reels',
    title: 'Social Media Reels',
    text: 'High-impact Instagram & TikTok shorts, crafted for engagement and virality.',
    link: '/portfolio#reels',
  },
  {
    id: 'hdr',
    title: 'Photos',
    text: 'Perfectly balanced images using high-dynamic-range techniques to showcase space and light.',
    link: '/services#hdr',
  },
];

const gear = [
  {
    title: 'Sony Alpha',
    image: '/assets/gear/sony_camera.jpg',
  },
  {
    title: 'DJI Mavic 3 Pro',
    image: '/assets/gear/dji_drone.jpg',
  },
];

const Services = () => {
  useEffect(() => {
    document.title = 'Services | Prestige Production';
  }, []);

  return (
    <main className='bg-black text-white font-sans'>
      {/* Hero */}
      <section className='relative w-full h-[80vh] overflow-hidden flex items-center justify-center'>
        <div className='absolute inset-0 w-full h-full'>
          <div className='w-full h-full max-w-7xl mx-auto px-6 flex items-center justify-center'>
            <div className='w-full aspect-video max-h-[600px] rounded-xl overflow-hidden'>
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
          <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 z-10' />
        </div>

        <motion.div
          className='relative z-20 text-center px-6 max-w-3xl mx-auto'
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
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
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className='py-24 px-6 max-w-6xl mx-auto'>
        <motion.h2
          className='text-center text-2xl sm:text-4xl font-light mb-16 tracking-tight'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          What We Offer
        </motion.h2>
        <div className='grid gap-12 sm:grid-cols-2 lg:grid-cols-3'>
          {serviceCards.map(({ id, title, text, link }) => (
            <Link key={id} to={link} className='group'>
              <SpotlightCard
                spotlightColor='rgba(255, 0, 128, 0.35)'
                className='h-full transition-shadow duration-300 group-hover:shadow-2xl'
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className='text-xl font-semibold mb-3'>{title}</h3>
                  <p className='text-white/70 text-sm leading-relaxed'>
                    {text}
                  </p>
                </motion.div>
              </SpotlightCard>
            </Link>
          ))}
        </div>
      </section>

      {/* Gear Section */}
      <section className='bg-gradient-to-b from-[#111111] to-black py-24 px-6'>
        <motion.h2
          className='text-center text-2xl sm:text-4xl font-light mb-16 tracking-tight'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Our Gear = Your Competitive Edge
        </motion.h2>
        <p className='text-white/70 text-lg max-w-3xl mx-auto text-center mb-12'>
          Behind every stunning visual is industry-leading equipment. We shoot
          with Sony’s professional cinema line for crisp detail and dynamic
          range, and capture aerial perspectives using high-end drones. Our gear
          allows us to showcase your property with precision, scale, and
          cinematic impact — giving you the competitive edge in a saturated
          market.
        </p>
        <div className='grid gap-10 sm:grid-cols-2 max-w-4xl mx-auto'>
          {gear.map(({ title, image }, idx) => (
            <motion.div
              key={idx}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              className='rounded-xl overflow-hidden text-center'
            >
              <img
                src={image}
                alt={title}
                className='w-full h-[300px] object-cover rounded-xl mb-4'
              />
              <p className='text-white/70 text-sm'>{title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio CTA */}
      <section className='py-20 px-6 bg-black text-center'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className='text-3xl sm:text-4xl font-light mb-6'>
            Explore Our Recent Work
          </h2>
          <p className='text-white/70 mb-8 text-lg'>
            See how we bring spaces to life through video, photography and
            editing.
          </p>
          <Link
            to='/portfolio'
            className='bg-white text-black text-sm font-medium px-8 py-3 rounded-full hover:bg-gray-200 transition'
          >
            View Portfolio
          </Link>
        </motion.div>
      </section>

      {/* Final CTA */}
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
