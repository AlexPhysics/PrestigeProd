import React from 'react';

// Array of partner logo URLs
const partners = [
  '/assets/logos/smi_logo.png',
  '/assets/logos/zurich_sothebys_logo.png',
];

const Partners = () => (
  <section className="bg-black py-12 overflow-hidden">
    <div className="screen-max-width mx-auto px-5 sm:px-10">
      <h2 className="text-4xl font-light text-center mb-8">
        Partners we are{' '}
        <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          proud
        </span>{' '}
        of.
      </h2>

      <div className="overflow-x-hidden">
        {/* Inline keyframes for seamless loop */}
        <style>{`@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
}`}</style>
        <div
          className="flex w-[200%] space-x-12 items-center"
          style={{ animation: 'marquee 20s linear infinite' }}
        >
          {partners.concat(partners).map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt="Partner logo"
              className="inline-block h-16 opacity-70 hover:opacity-100 flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Partners;

/*
Explanation:
- We duplicate the logos array (.concat) and set container width to 200%.
- Keyframes animate from translateX(0%) to translateX(-50%) for a continuous loop with no gap.
- Logos enlarged to h-16 for better visibility.
- Animation duration set to 10s; adjust as needed.
*/
