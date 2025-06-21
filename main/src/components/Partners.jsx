import React from 'react';

const logos = [
  '/assets/logos/smi_logo.png',
  '/assets/logos/zurich_sothebys_logo.png',
];

const Partners = () => {
  return (
    <section className='bg-black py-16 overflow-hidden'>
      <div className='screen-max-width mx-auto px-5 sm:px-10'>
        <h2 className='text-4xl font-light text-center mb-10 text-white'>
          Partners we are{' '}
          <span className='bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent'>
            proud
          </span>{' '}
          of.
        </h2>

        <style>{`
          .marquee-container {
            overflow: hidden;
            width: 100%;
          }

          .marquee-wrapper {
            display: flex;
            width: fit-content;
            animation: scroll-marquee 5s linear infinite;
          }

          .marquee-container:hover .marquee-wrapper {
            animation-play-state: paused;
          }

          @keyframes scroll-marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>

        <div className='marquee-container'>
          <div className='marquee-wrapper'>
            {[...logos, ...logos].map((src, idx) => (
              <div
                key={idx}
                className='flex items-center justify-center min-w-[200px] mx-8'
              >
                <img
                  src={src}
                  alt={`Partner ${idx}`}
                  className='h-16 w-auto object-contain opacity-70 hover:opacity-100 transition duration-300'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
