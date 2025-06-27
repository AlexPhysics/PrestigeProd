import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ValueProposition = () => {
  const { t } = useTranslation();

  const swissStandards = [
    {
      metric: "99.9%",
      label: t('swissStandards.quality.label', 'Quality Standard'),
      description: t('swissStandards.quality.desc', 'The same precision standards applied to Swiss luxury watches')
    },
    {
      metric: "48H",
      label: t('swissStandards.delivery.label', 'Response Time'),
      description: t('swissStandards.delivery.desc', 'Swiss efficiency meets modern business demands')
    },
    {
      metric: "100+",
      label: t('swissStandards.projects.label', 'Luxury Projects'),
      description: t('swissStandards.projects.desc', 'From Gstaad chalets to Zurich penthouses')
    }
  ];

  const whySwiss = [
    {
      title: t('whySwiss.heritage.title', 'Centuries of Craft Heritage'),
      description: t('whySwiss.heritage.desc', 'Switzerland\'s 700-year tradition of precision craftsmanship now applied to modern content creation.')
    },
    {
      title: t('whySwiss.discretion.title', 'Banking-Level Discretion'),
      description: t('whySwiss.discretion.desc', 'Your projects handled with the same confidentiality Swiss banks are famous for.')
    },
    {
      title: t('whySwiss.networks.title', 'Exclusive Networks'),
      description: t('whySwiss.networks.desc', 'Direct access to Switzerland\'s most influential business and luxury circles.')
    }
  ];

  return (
    <section className='py-20 bg-gradient-to-b from-black via-zinc-900 to-black relative overflow-hidden'>
      {/* Background effects */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-[#2d5f59]/10 to-[#F4FF78]/10 rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-r from-[#F4FF78]/5 to-[#2d5f59]/5 rounded-full blur-3xl'></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-6'>
        {/* Main heading */}
        <div className='text-center mb-16'>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-3xl md:text-5xl font-light text-white mb-6'
          >
            {t('swissValues.mainTitle', 'Swiss Excellence in Every Frame')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className='text-xl text-white/70 max-w-3xl mx-auto'
          >
            {t('swissValues.mainDesc', 'Combining centuries-old Swiss craftsmanship with cutting-edge technology to create content that defines luxury.')}
          </motion.p>
        </div>

        {/* Swiss standards grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-20'>
          {swissStandards.map((standard, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className='text-center group'
            >
              <div className='relative inline-block mb-6'>
                <div className='text-6xl md:text-7xl font-light text-[#F4FF78] mb-2 group-hover:scale-110 transition-transform duration-300'>
                  {standard.metric}
                </div>
                <div className='absolute -inset-4 bg-[#F4FF78]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </div>
              <h3 className='text-xl font-medium text-white mb-3'>{standard.label}</h3>
              <p className='text-white/70 leading-relaxed'>{standard.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Why swiss excellence */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='relative mb-20'
        >
          <div className='absolute inset-0 bg-gradient-to-r from-[#2d5f59]/10 to-[#F4FF78]/10 rounded-3xl blur-xl'></div>
          <div className='relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10'>
            
            <div className='text-center mb-12'>
              <h3 className='text-3xl md:text-4xl font-light text-white mb-4'>
                {t('whySwiss.title', 'Why swiss excellence matters')}
              </h3>
              <p className='text-xl text-white/70 max-w-3xl mx-auto'>
                {t('whySwiss.subtitle', 'In a world of mass production, Swiss craftsmanship stands apart. Here\'s what makes the difference.')}
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {whySwiss.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className='text-center'
                >
                  <div className='w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-[#2d5f59] to-[#F4FF78] rounded-full flex items-center justify-center'>
                    <div className='w-8 h-8 bg-white rounded-full'></div>
                  </div>
                  <h4 className='text-xl font-medium text-white mb-4'>{item.title}</h4>
                  <p className='text-white/70 leading-relaxed'>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Swiss advantage section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='relative'
        >
          <div className='absolute inset-0 bg-gradient-to-br from-[#2d5f59]/10 via-black to-[#F4FF78]/10 rounded-3xl blur-xl'></div>
          <div className='relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20'>
            
            <div className='text-center mb-12'>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='inline-flex items-center px-4 py-2 bg-[#F4FF78]/20 border border-[#F4FF78]/30 rounded-full mb-6'
              >
                <svg className='w-5 h-5 text-[#F4FF78] mr-2' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' clipRule='evenodd' />
                </svg>
                <span className='text-[#F4FF78] font-medium text-sm'>{t('swissAdvantage.badge', 'Swiss advantage')}</span>
              </motion.div>
              
              <h3 className='text-3xl md:text-4xl font-light text-white mb-4'>
                {t('swissAdvantage.title', 'The swiss standard of excellence')}
              </h3>
              <p className='text-xl text-white/70 max-w-3xl mx-auto mb-8'>
                {t('swissAdvantage.subtitle', 'When Swiss businesses choose content partners, they expect the same standards that built our nation\'s reputation.')}
              </p>
            </div>

            {/* Comparison grid */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'>
              <div className='space-y-6'>
                <h4 className='text-xl font-medium text-white mb-6 text-center'>
                  {t('swissAdvantage.typical.title', 'Typical content agencies')}
                </h4>
                
                {[
                  t('swissAdvantage.typical.mass', 'Mass-produced templates'),
                  t('swissAdvantage.typical.outsourced', 'Outsourced to lowest bidder'),
                  t('swissAdvantage.typical.generic', 'One-size-fits-all approach'),
                  t('swissAdvantage.typical.rushed', 'Rushed delivery timelines')
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className='flex items-center space-x-3'
                  >
                    <div className='w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0'>
                      <svg className='w-3 h-3 text-white/60' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clipRule='evenodd' />
                      </svg>
                    </div>
                    <span className='text-white/70'>{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className='space-y-6'>
                <h4 className='text-xl font-medium text-[#F4FF78] mb-6 text-center'>
                  {t('swissAdvantage.prestige.title', 'Prestige production')}
                </h4>
                
                {[
                  t('swissAdvantage.prestige.crafted', 'Hand-crafted for your brand'),
                  t('swissAdvantage.prestige.inhouse', 'Swiss team, Swiss standards'),
                  t('swissAdvantage.prestige.bespoke', 'Bespoke storytelling approach'),
                  t('swissAdvantage.prestige.precision', 'Precision-timed excellence')
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className='flex items-center space-x-3'
                  >
                    <div className='w-6 h-6 bg-[#F4FF78]/20 rounded-full flex items-center justify-center flex-shrink-0'>
                      <svg className='w-3 h-3 text-[#F4FF78]' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                      </svg>
                    </div>
                    <span className='text-white font-medium'>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Swiss promise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className='text-center pt-8 border-t border-white/10'
            >
              <div className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#2d5f59]/20 to-[#F4FF78]/20 border border-[#F4FF78]/30 rounded-full'>
                <svg className='w-5 h-5 text-[#F4FF78] mr-2' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                </svg>
                <span className='text-[#F4FF78] font-medium'>
                  {t('swissAdvantage.promise', 'Swiss quality promise: Excellence or excellence')}
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mt-16'
        >
          <h3 className='text-2xl text-white mb-6'>
            {t('swissValues.cta.title', 'Ready to experience Swiss excellence in content creation?')}
          </h3>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a 
              href='/en/contact'
              className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#2d5f59] to-[#F4FF78] text-black font-semibold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group'
            >
              {t('swissValues.cta.primary', 'Book Your Swiss Strategy Session')}
              <svg className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
              </svg>
            </a>
            <a 
              href='/en/portfolio'
              className='inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-full hover:border-white/60 transition-all duration-300 hover:scale-105'
            >
              {t('swissValues.cta.secondary', 'See Swiss Luxury Projects')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;
