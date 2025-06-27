import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import TrueFocus from './TrueFocus';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to('#hero-main', { opacity: 1, y: 0, duration: 1.5, delay: 0.3 })
      .to('#hero-subtitle', { opacity: 1, y: 0, duration: 1 }, '-=0.8')
      .to('#hero-cta', { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
      .to('#hero-scroll', { opacity: 1, duration: 0.6 }, '-=0.3');
  }, []);

  return (
    <section className='w-full min-h-screen relative overflow-hidden'>
      {/* Brand-aligned sophisticated background */}
      <div className='absolute inset-0'>
        {/* Base gradient using brand charcoal with subtle teal */}
        <div className='absolute inset-0' style={{
          background: 'linear-gradient(135deg, #231f20 0%, #1a1617 40%, #205c57 100%)'
        }}></div>
        
        {/* Subtle sage overlay for warmth */}
        <div className='absolute inset-0' style={{
          background: 'linear-gradient(to top, rgba(35, 31, 32, 0.8) 0%, transparent 50%, rgba(158, 182, 169, 0.05) 100%)'
        }}></div>
        
        {/* Floating geometric elements with brand colors */}
        <div className='absolute top-1/4 right-1/5 w-px h-32 rotate-12 animate-pulse' style={{ 
          background: 'rgba(158, 182, 169, 0.2)',
          animationDuration: '3s' 
        }}></div>
        <div className='absolute bottom-1/3 left-1/6 w-24 h-px rotate-45 animate-pulse' style={{ 
          background: 'rgba(32, 92, 87, 0.3)',
          animationDuration: '4s', 
          animationDelay: '1s' 
        }}></div>
        
        {/* Subtle grain texture */}
        <div 
          className='absolute inset-0 opacity-[0.03]'
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Radial vignette with brand charcoal */}
        <div className='absolute inset-0' style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(35, 31, 32, 0.6) 100%)'
        }}></div>
      </div>

      <div className='relative z-10 min-h-screen flex flex-col'>
        {/* Main content centered */}
        <div className='flex-1 flex items-center justify-center px-6'>
          <div className='max-w-6xl mx-auto text-center'>
            
            {/* TrueFocus component with brand colors */}
            <div className='mb-12'>
              <TrueFocus
                sentence='Prestige Production'
                manualMode
                blurAmount={7.5}
                borderColor='rgba(158, 182, 169, 0.3)'
                glowColor='rgba(32, 92, 87, 0.2)'
                animationDuration={0.4}
                pauseBetweenAnimations={3}
              />
            </div>

            {/* Main headline with brand ice color */}
            <div id='hero-main' className='mb-8 opacity-0 translate-y-12'>
              <h1 className='text-5xl md:text-7xl lg:text-8xl font-extralight leading-[0.9] tracking-tight mb-6' style={{ color: '#eaebec' }}>
                Showcasing prestige<br />
                <span style={{ color: 'rgba(123, 126, 126, 0.8)' }}>in every project</span>
              </h1>
            </div>

            {/* Subtitle with brand grey */}
            <div id='hero-subtitle' className='mb-16 opacity-0 translate-y-8'>
              <p className='text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed' style={{ color: '#7b7e7e' }}>
                Premium video production and photography services
              </p>
            </div>

            {/* CTA buttons with brand colors */}
            <div id='hero-cta' className='opacity-0 translate-y-8'>
              <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
                <Link
                  to='/en/contact'
                  className='group relative inline-flex items-center px-8 py-4 font-medium rounded-full transition-all duration-300 hover:scale-[1.02]'
                  style={{ 
                    backgroundColor: '#eaebec', 
                    color: '#231f20' 
                  }}
                >
                  Start your project
                  <svg
                    className='w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                  </svg>
                </Link>

                <Link
                  to='/en/portfolio'
                  className='group relative inline-flex items-center px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm'
                  style={{ 
                    color: '#eaebec',
                    border: '1px solid rgba(158, 182, 169, 0.3)'
                  }}
                >
                  View our work
                  <svg
                    className='w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal scroll indicator with brand colors */}
        <div id='hero-scroll' className='pb-12 flex justify-center opacity-0'>
          <div className='flex flex-col items-center space-y-2'>
            <span className='text-sm font-light tracking-wider uppercase' style={{ color: 'rgba(123, 126, 126, 0.6)' }}>Scroll</span>
            <div className='w-px h-12 animate-pulse' style={{ backgroundColor: 'rgba(158, 182, 169, 0.4)' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
