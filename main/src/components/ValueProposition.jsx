import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ValueProposition = () => {
  const { t } = useTranslation();

  const swissValues = [
    {
      icon: '�️',
      title: t('swissValues.precision.title', 'Swiss Precision'),
      description: t('swissValues.precision.desc', 'Every frame crafted with the meticulous attention to detail Switzerland is known for. No compromises, just excellence.'),
      highlight: t('swissValues.precision.highlight', 'Handcrafted Quality')
    },
    {
      icon: '💎',
      title: t('swissValues.luxury.title', 'Luxury Market Expertise'),
      description: t('swissValues.luxury.desc', 'Born in Switzerland\'s luxury market. We understand high-net-worth clients and premium brand expectations.'),
      highlight: t('swissValues.luxury.highlight', 'Premium Clientele')
    },
    {
      icon: '🎬',
      title: t('swissValues.storytelling.title', 'Alpine Storytelling'),
      description: t('swissValues.storytelling.desc', 'From Zurich penthouses to Geneva lakeshores - we capture the essence of Swiss luxury living and business excellence.'),
      highlight: t('swissValues.storytelling.highlight', 'Local Expertise')
    }
  ];

  const painPoints = [
    {
      problem: t('painPoints.generic.problem', 'Generic content that doesn\'t stand out'),
      solution: t('painPoints.generic.solution', 'Custom storytelling that captures your unique value')
    },
    {
      problem: t('painPoints.expensive.problem', 'Expensive agencies with hidden costs'),
      solution: t('painPoints.expensive.solution', 'Transparent pricing with no surprises')
    },
    {
      problem: t('painPoints.slow.problem', 'Slow delivery and endless revisions'),
      solution: t('painPoints.slow.solution', 'Fast delivery with clear approval process')
    },
    {
      problem: t('painPoints.results.problem', 'Beautiful videos that don\'t drive results'),
      solution: t('painPoints.results.solution', 'Conversion-focused content that actually sells')
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

        {/* Swiss values grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-20'>
          {swissValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className='group relative'
            >
              <div className='absolute -inset-1 bg-gradient-to-r from-[#2d5f59]/20 to-[#F4FF78]/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300'></div>
              <div className='relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#F4FF78]/30 transition-all duration-300 h-full'>
                <div className='text-4xl mb-4'>{value.icon}</div>
                <h3 className='text-xl font-semibold text-white mb-4'>{value.title}</h3>
                <p className='text-white/70 mb-6 leading-relaxed'>{value.description}</p>
                
                {/* Highlight badge */}
                <div className='mt-auto'>
                  <div className='inline-flex items-center px-3 py-1 bg-[#F4FF78]/10 border border-[#F4FF78]/30 rounded-full'>
                    <div className='w-2 h-2 bg-[#F4FF78] rounded-full mr-2'></div>
                    <span className='text-[#F4FF78] text-sm font-medium'>{value.highlight}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Problem vs Solution section - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='relative'
        >
          {/* Dramatic background */}
          <div className='absolute inset-0 bg-gradient-to-br from-red-900/10 via-black to-[#2d5f59]/10 rounded-3xl blur-xl'></div>
          <div className='relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20'>
            
            <div className='text-center mb-12'>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='inline-flex items-center px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full mb-6'
              >
                <svg className='w-5 h-5 text-red-400 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z' clipRule='evenodd' />
                </svg>
                <span className='text-red-300 font-medium text-sm'>{t('painPoints.warning', 'Industry Problems')}</span>
              </motion.div>
              
              <h3 className='text-3xl md:text-4xl font-light text-white mb-4'>
                {t('painPoints.title', 'Stop Throwing Money at Content That Doesn\'t Convert')}
              </h3>
              <p className='text-xl text-white/70 max-w-3xl mx-auto mb-8'>
                {t('painPoints.subtitle', 'Swiss businesses waste millions on generic content. Here\'s how we solve what others can\'t.')}
              </p>
              
              {/* Money waste visual */}
              <div className='flex items-center justify-center space-x-8 mb-12'>
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-red-400 mb-2'>CHF 250K+</div>
                  <div className='text-white/60 text-sm'>Wasted on poor content</div>
                </div>
                <div className='text-4xl'>→</div>
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-[#F4FF78] mb-2'>ROI Focused</div>
                  <div className='text-white/60 text-sm'>Results-driven approach</div>
                </div>
              </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
              {painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='group relative overflow-hidden'
                >
                  {/* Hover glow effect */}
                  <div className='absolute -inset-1 bg-gradient-to-r from-red-500/0 via-[#F4FF78]/0 to-red-500/0 group-hover:from-red-500/20 group-hover:via-[#F4FF78]/20 group-hover:to-red-500/20 rounded-xl blur-sm transition-all duration-500'></div>
                  
                  <div className='relative p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 group-hover:border-white/30 transition-all duration-300'>
                    {/* Problem section */}
                    <div className='flex items-start space-x-4 mb-4'>
                      <div className='flex-shrink-0 mt-1'>
                        <div className='w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center'>
                          <svg className='w-4 h-4 text-red-400' fill='currentColor' viewBox='0 0 20 20'>
                            <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z' clipRule='evenodd' />
                          </svg>
                        </div>
                      </div>
                      <div className='flex-1'>
                        <div className='text-red-300 font-medium text-sm mb-1'>THE PROBLEM</div>
                        <div className='text-white/80 leading-relaxed'>{point.problem}</div>
                      </div>
                    </div>
                    
                    {/* Divider */}
                    <div className='flex items-center my-4'>
                      <div className='flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent'></div>
                      <div className='px-3 text-white/40 text-xs'>VS</div>
                      <div className='flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent'></div>
                    </div>
                    
                    {/* Solution section */}
                    <div className='flex items-start space-x-4'>
                      <div className='flex-shrink-0 mt-1'>
                        <div className='w-8 h-8 bg-[#F4FF78]/20 rounded-full flex items-center justify-center'>
                          <svg className='w-4 h-4 text-[#F4FF78]' fill='currentColor' viewBox='0 0 20 20'>
                            <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                          </svg>
                        </div>
                      </div>
                      <div className='flex-1'>
                        <div className='text-[#F4FF78] font-medium text-sm mb-1'>OUR SOLUTION</div>
                        <div className='text-white leading-relaxed font-medium'>{point.solution}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Bottom impact statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className='text-center mt-12 pt-8 border-t border-white/10'
            >
              <p className='text-white/80 text-lg mb-4'>
                {t('painPoints.impact', 'Don\'t let your competitors win with better content.')}
              </p>
              <div className='inline-flex items-center px-4 py-2 bg-[#F4FF78]/10 border border-[#F4FF78]/30 rounded-full'>
                <span className='text-[#F4FF78] font-medium'>
                  {t('painPoints.guarantee', 'Swiss Quality Guarantee: Results or Full Refund')}
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Section */}
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
