import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Privacy = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('privacy.pageTitle');
  }, [t]);

  return (
    <div className='min-h-screen bg-black text-white'>
      {/* Header */}
      <div className='bg-gradient-to-b from-zinc-900 to-black py-20'>
        <div className='max-w-4xl mx-auto px-6'>
          <h1 className='text-4xl md:text-5xl font-light text-[#9EB6A9] mb-4'>
            {t('privacy.title')}
          </h1>
          <p className='text-white/70 text-sm'>
            {t('privacy.lastUpdated')}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className='max-w-4xl mx-auto px-6 py-16'>
        {/* Introduction */}
        <div className='mb-12'>
          <p className='text-white/80 text-lg leading-relaxed'>
            {t('privacy.intro')}
          </p>
        </div>

        {/* Sections */}
        <div className='space-y-12'>
          {[1, 2, 3, 4, 5].map((num) => (
            <section key={num} className='border-l-2 border-[#9EB6A9]/30 pl-6'>
              <h2 className='text-2xl font-medium text-[#9EB6A9] mb-4'>
                {t(`privacy.section${num}.title`)}
              </h2>
              <p className='text-white/80 leading-relaxed'>
                {t(`privacy.section${num}.content`)}
              </p>
            </section>
          ))}
        </div>

        {/* Contact CTA */}
        <div className='mt-16 p-8 bg-gradient-to-r from-[#205C57]/20 to-[#9EB6A9]/20 border border-[#9EB6A9]/30 rounded-lg'>
          <h3 className='text-xl font-medium text-[#9EB6A9] mb-3'>
            Questions about this policy?
          </h3>
          <p className='text-white/80 mb-4'>
            We're here to help clarify any aspect of our privacy practices.
          </p>
          <a
            href='mailto:info@prestigeproduction.ch'
            className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#205C57] to-[#9EB6A9] text-black font-medium rounded-lg hover:from-[#9EB6A9] hover:to-[#205C57] transition-all duration-300'
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
