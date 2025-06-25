import React from 'react';
import { useTranslation } from 'react-i18next';
import { GRADIENT_CLASS } from '../constants';

const logos = [
  '/assets/logos/smi_logo.png',
  '/assets/logos/zurich_sothebys_logo.png',
];

const Partners = () => {
  const { t } = useTranslation();
  
  return (
    <section className='bg-black py-16 overflow-hidden'>
      <div className='screen-max-width mx-auto px-5 sm:px-10'>
        <h2 className='text-4xl font-light text-center mb-10 text-white'>
          {t('partners.title', 'Partners we are')}{' '}
          <span className={`${GRADIENT_CLASS} bg-clip-text text-transparent`}>
            {t('partners.proud', 'proud')}
          </span>{' '}
          {t('partners.of', 'of.')}
        </h2>

        <style>{`
          .marquee-wrapper {
            position: relative;
            width: 100%;
            overflow: hidden;
            mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
            -webkit-mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
          }

          .marquee {
            display: flex;
            width: fit-content;
            gap: 24px;
          }

          .marquee-group {
            display: flex;
            align-items: center;
            justify-content: space-around;
            min-width: max-content;
            animation: scroll 5s linear infinite;
            gap: 24px;
          }

          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-100% - 24px)); }
          }

          .marquee-item {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 200px;
          }

          .marquee-wrapper:hover .marquee-group {
            animation-play-state: paused;
          }
        `}</style>

        <div className='marquee-wrapper'>
          <div className='marquee'>
            {/* Primary group */}
            <div className='marquee-group'>
              {logos.map((src, idx) => (
                <div key={`primary-${idx}`} className='marquee-item'>
                  <img
                    src={src}
                    alt={t('partners.partnerAlt', 'Partner') + ` ${idx + 1}`}
                    className='h-16 w-auto object-contain opacity-70 hover:opacity-100 transition duration-300'
                  />
                </div>
              ))}
            </div>

            {/* Duplicate group - exact copy for seamless loop */}
            <div className='marquee-group'>
              {logos.map((src, idx) => (
                <div key={`duplicate-${idx}`} className='marquee-item'>
                  <img
                    src={src}
                    alt={t('partners.partnerAlt', 'Partner') + ` ${idx + 1}`}
                    className='h-16 w-auto object-contain opacity-70 hover:opacity-100 transition duration-300'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
