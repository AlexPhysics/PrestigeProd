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
            {t('valueProposition.title', 'Professional video & photography')}
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
            {t('valueProposition.subtitle', 'High-quality visual content that showcases your business professionally and drives results.')}
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
                  {t('valueProposition.whyChooseUs', 'Why choose us')}
                </span>
              </motion.div>

              <h3 className='text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight leading-[1.1]'>
                {t('valueProposition.provenResults', 'Proven results, trusted by industry leaders')}
              </h3>
              <p className='text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed font-light'>
                {t('valueProposition.trackRecord', 'Our track record speaks for itself: premium brands choose us for guaranteed quality, measurable engagement, and Swiss reliability.')}
              </p>
            </div>

            {/* Proven results showcase */}
            <div className='space-y-16'>
              {/* First row - Trust & Quality */}
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
                {/* High Quality Deliverables */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                  viewport={{ once: true }}
                  className='space-y-8'
                >
                  <div className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#9EB6A9]/20 to-[#205C57]/20 border border-[#9EB6A9]/30 rounded-full backdrop-blur-sm'>
                    <svg className='w-5 h-5 text-[#9EB6A9] mr-3' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                    </svg>
                    <span className='text-[#9EB6A9] font-medium tracking-wide'>{t('valueProposition.premiumQuality', 'Premium quality')}</span>
                  </div>
                  
                  <h4 className='text-3xl md:text-4xl font-light text-white tracking-wide leading-tight'>
                    {t('valueProposition.trustedByLeaders', 'Trusted by industry leaders')}
                  </h4>
                  
                  <div className='flex items-center space-x-6 mb-8'>
                    <img 
                      src='/assets/logos/zurich_sothebys_logo.png' 
                      alt='Zurich Sothebys Realty'
                      className='h-10 opacity-80 filter brightness-0 invert'
                    />
                    <div className='w-px h-10 bg-white/20'></div>
                    <img 
                      src='/assets/logos/smi_logo.png' 
                      alt='SMI Management'
                      className='h-10 opacity-80 filter brightness-0 invert'
                    />
                  </div>
                  
                  <blockquote className='text-xl text-white/80 italic leading-relaxed border-l-4 border-[#9EB6A9]/40 pl-6'>
                    "{t('valueProposition.testimonial1', 'Their cinema-grade production quality perfectly captured our luxury properties. Every detail was flawless.')}"
                  </blockquote>
                  <div className='text-[#9EB6A9] font-medium'>
                    — Zurich Sotheby's International Realty
                  </div>
                </motion.div>

                {/* Satisfaction Rate */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                  viewport={{ once: true }}
                  className='text-center'
                >
                  <div className='bg-gradient-to-br from-[#9EB6A9]/10 to-[#205C57]/10 rounded-3xl p-6 md:p-12 border border-[#9EB6A9]/20 backdrop-blur-sm'>
                    <div className='text-6xl md:text-8xl lg:text-9xl font-extralight text-transparent bg-gradient-to-br from-[#9EB6A9] to-[#205C57] bg-clip-text mb-3 md:mb-4'>
                      100%
                    </div>
                    <div className='text-lg md:text-xl text-white/80 mb-2 md:mb-4'>{t('valueProposition.clientSatisfactionRate', 'Client satisfaction rate')}</div>
                    <div className='text-[#9EB6A9] text-xs md:text-sm'>{t('valueProposition.basedOnClientFeedback', 'Based on post-project client feedback')}</div>
                  </div>
                </motion.div>
              </div>

              {/* Second row - Creative Impact */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true }}
                className='text-center space-y-8'
              >
                <div className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#205C57]/20 to-[#9EB6A9]/20 border border-[#9EB6A9]/30 rounded-full backdrop-blur-sm'>
                  <svg className='w-5 h-5 text-[#9EB6A9] mr-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M13 10V3L4 14h7v7l9-11h-7z' />
                  </svg>
                  <span className='text-[#9EB6A9] font-medium tracking-wide'>{t('valueProposition.creativeImpact', 'Creative impact')}</span>
                </div>
                
                <h4 className='text-3xl md:text-4xl font-light text-white tracking-wide leading-tight max-w-3xl mx-auto'>
                  {t('valueProposition.premiumContentCreation', 'Content that transforms how clients perceive your brand')}
                </h4>
                
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto'>
                  <div className='bg-gradient-to-br from-[#9EB6A9]/5 to-[#205C57]/5 rounded-2xl p-10 border border-[#9EB6A9]/10 text-left'>
                    <div className='flex items-center mb-6'>
                      <div className='w-3 h-3 bg-[#9EB6A9] rounded-full mr-4'></div>
                      <h5 className='text-xl text-white/90 font-medium'>{t('valueProposition.brandElevation', 'Brand elevation')}</h5>
                    </div>
                    <p className='text-white/70 leading-relaxed mb-4'>
                      {t('valueProposition.brandElevationDesc', 'Our visual storytelling positions you as the premium choice in your market, immediately differentiating you from competitors.')}
                    </p>
                    <div className='text-[#9EB6A9] text-sm font-medium'>
                      {t('valueProposition.brandResult', 'Result: Enhanced brand perception and market positioning')}
                    </div>
                  </div>
                  
                  <div className='bg-gradient-to-br from-[#9EB6A9]/5 to-[#205C57]/5 rounded-2xl p-10 border border-[#9EB6A9]/10 text-left'>
                    <div className='flex items-center mb-6'>
                      <div className='w-3 h-3 bg-[#9EB6A9] rounded-full mr-4'></div>
                      <h5 className='text-xl text-white/90 font-medium'>{t('valueProposition.clientTrust', 'Client trust & credibility')}</h5>
                    </div>
                    <p className='text-white/70 leading-relaxed mb-4'>
                      {t('valueProposition.clientTrustDesc', 'Professional visuals build immediate trust with potential clients, reducing sales cycles and increasing conversion rates across all market segments.')}
                    </p>
                    <div className='text-[#9EB6A9] text-sm font-medium'>
                      {t('valueProposition.trustResult', 'Result: Faster client acquisition and improved conversion rates')}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Third row - Swiss Excellence */}
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
                {/* Swiss Excellence */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                  viewport={{ once: true }}
                  className='lg:order-2 space-y-8'
                >
                  <div className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#9EB6A9]/20 to-[#205C57]/20 border border-[#9EB6A9]/30 rounded-full backdrop-blur-sm'>
                    <svg className='w-5 h-5 text-[#9EB6A9] mr-3' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z' clipRule='evenodd' />
                    </svg>
                    <span className='text-[#9EB6A9] font-medium tracking-wide'>{t('valueProposition.swissExcellence', 'Proven excellence')}</span>
                  </div>
                  
                  <h4 className='text-3xl md:text-4xl font-light text-white tracking-wide leading-tight'>
                    {t('valueProposition.prestigeFromDay1', 'Trusted by prestige from day one')}
                  </h4>
                  
                  <div className='space-y-6'>
                    <div className='flex items-start space-x-4'>
                      <div className='w-2 h-2 bg-[#9EB6A9] rounded-full mt-3 flex-shrink-0'></div>
                      <div>
                        <div className='text-white/90 text-lg font-medium mb-1'>{t('valueProposition.professionalApproach', 'Professional approach')}</div>
                        <div className='text-white/70'>{t('valueProposition.professionalApproachDesc', 'We deliver the same high standards and attention to detail for every client, regardless of project size or industry')}</div>
                      </div>
                    </div>
                    
                    <div className='flex items-start space-x-4'>
                      <div className='w-2 h-2 bg-[#9EB6A9] rounded-full mt-3 flex-shrink-0'></div>
                      <div>
                        <div className='text-white/90 text-lg font-medium mb-1'>{t('valueProposition.smiEvent', 'Swiss Mining Institute')}</div>
                        <div className='text-white/70'>{t('valueProposition.smiDesc', 'Covered one of Europe\'s most exclusive industry events, capturing content for international mining leaders')}</div>
                      </div>
                    </div>
                    
                    <div className='flex items-start space-x-4'>
                      <div className='w-2 h-2 bg-[#9EB6A9] rounded-full mt-3 flex-shrink-0'></div>
                      <div>
                        <div className='text-white/90 text-lg font-medium mb-1'>{t('valueProposition.qualityFocus', 'Quality over quantity approach')}</div>
                        <div className='text-white/70'>{t('valueProposition.qualityFocusDesc', 'Selective client approach ensures dedicated attention and exceptional results for every project')}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Company Stats */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  viewport={{ once: true }}
                  className='lg:order-1 text-center'
                >
                  <div className='bg-gradient-to-br from-[#9EB6A9]/10 to-[#205C57]/10 rounded-3xl p-6 md:p-12 border border-[#9EB6A9]/20 backdrop-blur-sm'>
                    <div className='text-5xl md:text-6xl lg:text-7xl font-extralight text-transparent bg-gradient-to-br from-[#9EB6A9] to-[#205C57] bg-clip-text mb-3 md:mb-4'>
                      2024
                    </div>
                    <div className='text-lg md:text-xl text-white/80 mb-1 md:mb-2'>{t('valueProposition.establishedYear', 'Established')}</div>
                    <div className='text-[#9EB6A9] text-xs md:text-sm mb-6 md:mb-8'>{t('valueProposition.basedInZurich', 'Based in Zurich, Switzerland')}</div>
                    
                    <div className='space-y-3 md:space-y-4 text-xs md:text-sm'>
                      <div className='flex items-center justify-between px-3 md:px-4 py-2 md:py-3 bg-white/[0.02] rounded-lg border border-white/5'>
                        <span className='text-white/70'>{t('valueProposition.projectROI', 'Average project ROI')}</span>
                        <span className='text-[#9EB6A9] font-medium'>{t('valueProposition.threeToFiveX', '3-5x')}</span>
                      </div>
                      <div className='flex items-center justify-between px-3 md:px-4 py-2 md:py-3 bg-white/[0.02] rounded-lg border border-white/5'>
                        <span className='text-white/70'>{t('valueProposition.clientRetention', 'Client retention rate')}</span>
                        <span className='text-[#9EB6A9] font-medium'>{t('valueProposition.oneHundredPercent', '100%')}</span>
                      </div>
                      <div className='flex items-center justify-between px-3 md:px-4 py-2 md:py-3 bg-white/[0.02] rounded-lg border border-white/5'>
                        <span className='text-white/70'>{t('valueProposition.responseTime', 'Response time')}</span>
                        <span className='text-[#9EB6A9] font-medium'>{t('valueProposition.within24h', '< 24 hours')}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
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
            {t('valueProposition.ctaTitle', 'Ready to create professional video & photo content?')}
          </h3>
          <div className='flex flex-col sm:flex-row gap-6 justify-center'>
            <a
              href='/en/contact'
              className='group inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#205C57] to-[#9EB6A9] text-black font-semibold text-lg rounded-full hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:from-[#9EB6A9] hover:to-[#205C57]'
            >
              {t('valueProposition.ctaQuote', 'Get your free quote')}
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
              {t('valueProposition.ctaWork', 'View our work')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;
