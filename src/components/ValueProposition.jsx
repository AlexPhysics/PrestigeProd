import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ValueProposition = () => {
  const { t } = useTranslation();

  const swissStandards = [
    {
      metric: '4K+',
      label: t('swissStandards.quality.label', 'Video Quality'),
      description: t(
        'swissStandards.quality.desc',
        'Cinema-grade equipment for crystal clear results',
      ),
    },
    {
      metric: 'Swift',
      label: t('swissStandards.delivery.label', 'Efficient Delivery'),
      description: t(
        'swissStandards.delivery.desc',
        'Premium results delivered with precision timing',
      ),
    },
    {
      metric: (
        <svg
          className='w-16 h-16 md:w-20 md:h-20'
          fill='none'
          viewBox='0 0 24 24'
        >
          <defs>
            <linearGradient
              id='audienceMegaphoneGradient'
              x1='0%'
              y1='0%'
              x2='100%'
              y2='100%'
            >
              <stop offset='0%' stopColor='#9EB6A9' />
              <stop offset='50%' stopColor='#205C57' />
              <stop offset='100%' stopColor='#9EB6A9' />
            </linearGradient>
          </defs>
          <path
            d='M3 10v4a1 1 0 001 1h2l4 4v-14l-4 4H4a1 1 0 00-1 1zm13.5-2.5a4 4 0 010 5M17 7a7 7 0 010 10'
            stroke='url(#audienceMegaphoneGradient)'
            strokeWidth={1.5}
            strokeLinecap='round'
            strokeLinejoin='round'
            fill='none'
          />
        </svg>
      ),
      label: t('swissStandards.projects.label', 'Audience Engagement'),
      description: t(
        'swissStandards.projects.desc',
        'Boosting your reach and engagement with compelling video content',
      ),
    },
  ];

  return (
    <section className='py-20 bg-gradient-to-b from-black via-zinc-900 to-black relative overflow-hidden'>
      {/* Background effects */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-[#205C57]/15 to-[#9EB6A9]/10 rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-[#9EB6A9]/8 to-[#205C57]/12 rounded-full blur-3xl'></div>
        {/* Swiss precision grid overlay */}
        <div
          className='absolute inset-0 opacity-[0.02]'
          style={{
            backgroundImage: `linear-gradient(#EAEBEC 1px, transparent 1px), linear-gradient(90deg, #EAEBEC 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        ></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-6'>
        {/* Main heading */}
        <div className='text-center mb-20'>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className='text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight leading-[1.1]'
          >
            Professional Video & Photography
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            viewport={{ once: true }}
            className='text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light'
          >
            High-quality visual content that showcases your business
            professionally and drives results.
          </motion.p>
        </div>

        {/* Swiss standards grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-24'>
          {swissStandards.map((standard, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true }}
              className='text-center group relative'
            >
              {/* Swiss precision border */}
              <div className='absolute inset-0 rounded-2xl border border-white/5 group-hover:border-[#9EB6A9]/30 transition-colors duration-500'></div>
              <div className='relative p-8'>
                <div className='relative inline-block mb-8'>
                  <div className='text-7xl md:text-8xl font-extralight text-transparent bg-gradient-to-br from-[#9EB6A9] via-[#205C57] to-[#9EB6A9] bg-clip-text mb-2 group-hover:scale-105 transition-transform duration-500 ease-out tracking-tight'>
                    {standard.metric}
                  </div>
                  <div className='absolute -inset-8 bg-gradient-to-r from-[#9EB6A9]/5 to-[#205C57]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>
                </div>
                <h3 className='text-xl md:text-2xl font-medium text-white mb-4 tracking-wide'>
                  {standard.label}
                </h3>
                <p className='text-white/70 leading-relaxed text-lg font-light max-w-xs mx-auto'>
                  {standard.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Swiss advantage section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='relative'
        >
          <div className='absolute inset-0 bg-gradient-to-br from-[#205C57]/8 via-black/50 to-[#9EB6A9]/8 rounded-3xl blur-xl'></div>
          <div className='relative bg-gradient-to-br from-white/[0.12] via-white/[0.05] to-white/[0.12] backdrop-blur-xl rounded-3xl p-10 md:p-16 border border-white/20 shadow-2xl'>
            <div className='text-center mb-16'>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true }}
                className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#9EB6A9]/20 to-[#205C57]/20 border border-[#9EB6A9]/30 rounded-full mb-8 backdrop-blur-sm'
              >
                <svg
                  className='w-5 h-5 text-[#9EB6A9] mr-3'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'
                    clipRule='evenodd'
                  />
                </svg>
                <span className='text-[#9EB6A9] font-medium tracking-wide'>
                  Why Choose Us
                </span>
              </motion.div>

              <h3 className='text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight leading-[1.1]'>
                Professional Video & Photo Production
              </h3>
              <p className='text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed font-light'>
                We deliver high-quality visual content with Swiss precision and
                reliability.
              </p>
            </div>

            {/* Comparison grid */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16'>
              <div className='space-y-8'></div>
                <h4 className='text-2xl md:text-3xl font-light text-white/60 mb-8 text-center tracking-wide'>
                  Other agencies
                </h4>

                <div className='space-y-6'>
                  {[
                    'Large team overhead costs',
                    'Junior staff handling projects',
                    'One-size-fits-all packages',
                    'Limited creative flexibility',
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      viewport={{ once: true }}
                      className='flex items-center justify-center space-x-4'
                    >
                      <div className='w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 border border-white/20'>
                        <svg
                          className='w-4 h-4 text-white/50'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fillRule='evenodd'
                            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </div>
                      <span className='text-white/70 text-lg font-light'>
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className='space-y-8'>
                <h4 className='text-2xl md:text-3xl font-light text-[#9EB6A9] mb-8 text-center tracking-wide'>
                  Prestige Production
                </h4>

                <div className='space-y-6 bg-gradient-to-br from-[#9EB6A9]/5 to-[#205C57]/5 rounded-2xl p-6 border border-[#9EB6A9]/10'>
                  {[
                    'Cinema-grade equipment only',
                    'Boutique two-person focus',
                    'Tailored creative solutions',
                    'Swiss precision meets agility',
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      viewport={{ once: true }}
                      className='flex items-center justify-center space-x-4'
                    >
                      <div className='w-8 h-8 bg-gradient-to-br from-[#9EB6A9]/30 to-[#205C57]/30 rounded-full flex items-center justify-center flex-shrink-0 border border-[#9EB6A9]/40'>
                        <svg
                          className='w-4 h-4 text-[#9EB6A9]'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fillRule='evenodd'
                            d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </div>
                      <span className='text-white font-medium text-lg'>
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Promise section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true }}
              className='text-center pt-12 border-t border-white/10'
            ></motion.div>
              <div className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#205C57]/20 to-[#9EB6A9]/20 border border-[#9EB6A9]/30 rounded-full backdrop-blur-sm'>
                <svg
                  className='w-6 h-6 text-[#9EB6A9] mr-3'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>
                <span className='text-[#9EB6A9] font-medium text-lg tracking-wide'>
                  Quality guaranteed, delivered on time
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className='text-center mt-20'
        >
          <h3 className='text-3xl md:text-4xl font-light text-white mb-10 tracking-wide leading-relaxed'>
            Ready to create professional video & photo content?
          </h3>
          <div className='flex flex-col sm:flex-row gap-6 justify-center'>
            <a
              href='/en/contact'
              className='group inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#205C57] to-[#9EB6A9] text-black font-semibold text-lg rounded-full hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:from-[#9EB6A9] hover:to-[#205C57]'
            >
              Get Your Free Quote
              <svg
                className='w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </a>
            <a
              href='/en/portfolio'
              className='inline-flex items-center px-10 py-5 bg-white/[0.08] backdrop-blur-xl text-white border border-white/20 text-lg font-medium rounded-full hover:border-[#9EB6A9]/60 hover:bg-white/[0.12] transition-all duration-500 hover:scale-105'
            >
              View Our Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;
