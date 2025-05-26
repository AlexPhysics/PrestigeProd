import React from 'react';
import { Link } from 'react-router-dom';
import { highlightSecondVideo, reelSoroush, iphoneFrameImg } from '../utils';

const serviceCards = [
  {
    id: 'longform',
    title: 'Long-Form Video Tours',
    text: 'Narrative-driven property stories for YouTube and websites, in cinematic quality.',
  },
  {
    id: 'reels',
    title: 'Social Media Reels',
    text: 'Dynamic Instagram & TikTok shorts optimized to engage and convert.',
  },
  {
    id: 'hdr',
    title: 'HDR Photography',
    text: 'High-dynamic-range stills capturing perfect light & detail.',
  }
];

const Services = () => {
  const videoSrc = highlightSecondVideo;

  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative w-full screen-max-width mx-auto h-[60vh] overflow-hidden rounded-lg">
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-5 text-center">
          <h1 className="text-4xl sm:text-6xl font-thin mb-2">Cinematic Real Estate</h1>
          <p className="text-lg sm:text-xl mb-6">Crafted video & photo experiences, from long-form storytelling to viral reels.</p>
          <Link to="/contact" className="btn">Work With Us</Link>
        </div>
      </section>

      {/* Services Cards */}
      <section className="screen-max-width mx-auto px-5 sm:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {serviceCards.map(({ id, title, text }) => (
            <div key={id} className="relative group">
              <Link
                to={`/services#${id}`}
                className="border border-gray-700 bg-black/50 p-8 rounded-lg hover:bg-white/10 flex flex-col items-center text-center transition-shadow duration-300 shadow-md hover:shadow-xl h-full items-stretch"
              >
                <h3 className="text-xl font-medium mb-2">{title}</h3>
                <p className="text-gray-200">{text}</p>
              </Link>

            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12">
        <div className="screen-max-width mx-auto px-5 sm:px-10 bg-black/80 rounded-2xl py-8 text-center shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-thin mb-4">Ready to elevate your listings?</h2>
          <Link to="/contact" className="btn">Request a Quote</Link>
        </div>
      </section>
    </main>
  );
};

export default Services;
