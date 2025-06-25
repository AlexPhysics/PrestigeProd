import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import TrueFocus from './TrueFocus';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  useGSAP(() => {
    // Enhanced animation sequence
    const tl = gsap.timeline();

    tl.to('#hero-title', { opacity: 1, y: 0, duration: 1.2, delay: 0.5 })
      .to(
        '#hero-subtitle',
        { opacity: 1, y: 0, duration: 1, delay: 0.2 },
        '-=0.8',
      )
      .to(
        '#hero-stats',
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
        '-=0.6',
      )
      .to('#cta', { opacity: 1, y: 0, duration: 0.8 }, '-=0.4');
  }, []);

  return (
    <section className='w-full min-h-screen relative overflow-hidden'>
      {/* Multi-layered attractive background */}
      <div className='absolute inset-0'>
        {/* Base gradient */}
        <div className='absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-zinc-900'></div>

        {/* Animated mesh gradient */}
        <div className='absolute inset-0 opacity-40'>
          <div
            className='absolute inset-0 bg-gradient-to-r from-[#2d5f59] via-transparent to-[#F4FF78] animate-pulse'
            style={{ animationDuration: '1.5s' }}
          ></div>
          <div
            className='absolute inset-0 bg-gradient-to-br from-transparent via-[#F4FF78]/20 to-transparent animate-pulse'
            style={{ animationDuration: '2s', animationDelay: '0.7s' }}
          ></div>
          <div
            className='absolute inset-0 bg-gradient-to-l from-[#2d5f59]/10 via-transparent to-[#F4FF78]/10 animate-pulse'
            style={{ animationDuration: '2.5s', animationDelay: '0.3s' }}
          ></div>
        </div>

        {/* Floating orbs with better positioning */}
        <div
          className='absolute top-10 right-10 w-[400px] h-[400px] rounded-full blur-3xl animate-pulse'
          style={{
            background:
              'radial-gradient(circle, rgba(45, 95, 89, 0.3) 0%, rgba(45, 95, 89, 0.1) 50%, transparent 100%)',
            animationDuration: '2s',
          }}
        ></div>
        <div
          className='absolute bottom-10 left-10 w-[350px] h-[350px] rounded-full blur-3xl animate-pulse'
          style={{
            background:
              'radial-gradient(circle, rgba(244, 255, 120, 0.25) 0%, rgba(244, 255, 120, 0.08) 50%, transparent 100%)',
            animationDuration: '2.2s',
            animationDelay: '0.5s',
          }}
        ></div>
        <div
          className='absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full blur-2xl animate-pulse'
          style={{
            background:
              'radial-gradient(circle, rgba(45, 95, 89, 0.15) 0%, rgba(244, 255, 120, 0.1) 50%, transparent 100%)',
            animationDuration: '1.8s',
            animationDelay: '1s',
          }}
        ></div>
        <div
          className='absolute bottom-1/3 right-1/4 w-[250px] h-[250px] rounded-full blur-2xl animate-pulse'
          style={{
            background:
              'radial-gradient(circle, rgba(244, 255, 120, 0.2) 0%, rgba(45, 95, 89, 0.08) 50%, transparent 100%)',
            animationDuration: '2.4s',
            animationDelay: '1.5s',
          }}
        ></div>

        {/* Geometric shapes */}
        <div
          className='absolute top-20 left-20 w-32 h-32 border border-[#F4FF78]/20 rotate-45 animate-spin'
          style={{ animationDuration: '8s' }}
        ></div>
        <div
          className='absolute bottom-32 right-32 w-24 h-24 border border-[#2d5f59]/30 rotate-12 animate-pulse'
          style={{ animationDuration: '1.5s' }}
        ></div>

        {/* Subtle grid pattern */}
        <div
          className='absolute inset-0 opacity-[0.08]'
          style={{
            backgroundImage: `
            linear-gradient(rgba(244, 255, 120, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(244, 255, 120, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: '60px 60px',
          }}
        ></div>

        {/* Radial gradient overlay for depth */}
        <div
          className='absolute inset-0'
          style={{
            background:
              'radial-gradient(circle, transparent 30%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0.6) 100%)',
          }}
        ></div>

        {/* Moving light rays */}
        <div
          className='absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#F4FF78]/30 to-transparent transform -skew-x-12 animate-pulse'
          style={{ animationDuration: '1.2s' }}
        ></div>
        <div
          className='absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#2d5f59]/20 to-transparent transform skew-x-12 animate-pulse'
          style={{ animationDuration: '1.6s', animationDelay: '0.3s' }}
        ></div>

        {/* Vignette effect */}
        <div
          className='absolute inset-0'
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 40%, rgba(0, 0, 0, 0.4) 100%)',
          }}
        ></div>
      </div>

      <div className='relative z-10 pt-20 md:pt-32 pb-20'>
        {/* Main content */}
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            {/* Enhanced title with better typography */}
            <div className='mb-8'>
              <TrueFocus
                sentence='Prestige Production'
                manualMode
                blurAmount={7.5}
                borderColor='rgba(45, 95, 89, 1)'
                glowColor='rgba(244, 255, 120, 0.6)'
                animationDuration={0.4}
                pauseBetweenAnimations={3}
              />
            </div>

            <h1
              id='hero-title'
              className='text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 opacity-0 translate-y-8 leading-tight drop-shadow-2xl'
            >
              {t('hero.title')}
            </h1>

            <p
              id='hero-subtitle'
              className='text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto opacity-0 translate-y-8 leading-relaxed drop-shadow-lg'
            >
              {t('hero.subtitle')}
            </p>

            {/* Trust indicators / Quick stats */}
            <div
              id='hero-stats'
              className='flex flex-wrap justify-center gap-8 mb-16 opacity-0 translate-y-8'
            >
              <div className='bg-white/5 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20 shadow-2xl hover:bg-white/10 transition-all duration-300'>
                <div className='text-2xl font-bold text-[#F4FF78] mb-1 drop-shadow-lg'>
                  50+
                </div>
                <div className='text-white/70 text-sm'>Projects Delivered</div>
              </div>
              <div className='bg-white/5 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20 shadow-2xl hover:bg-white/10 transition-all duration-300'>
                <div className='text-2xl font-bold text-[#F4FF78] mb-1 drop-shadow-lg'>
                  15+
                </div>
                <div className='text-white/70 text-sm'>Happy Clients</div>
              </div>
              <div className='bg-white/5 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20 shadow-2xl hover:bg-white/10 transition-all duration-300'>
                <div className='text-2xl font-bold text-[#F4FF78] mb-1 drop-shadow-lg'>
                  100%
                </div>
                <div className='text-white/70 text-sm'>Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA section */}
          <div id='cta' className='text-center opacity-0 translate-y-8'>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-6'>
              <Link
                to='/en/contact'
                className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#2d5f59] to-[#F4FF78] text-black font-semibold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group shadow-lg'
              >
                {t('contactSection.cta')}
                <svg
                  className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform'
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
              </Link>

              <Link
                to='/en/portfolio'
                className='inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white border border-white/30 rounded-full hover:border-white/60 transition-all duration-300 hover:scale-105 group shadow-lg hover:bg-white/20'
              >
                View Our Work
                <svg
                  className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                  />
                </svg>
              </Link>
            </div>

            <p className='text-white/60 text-lg max-w-2xl mx-auto'>
              {t('contactSection.projectInfo')}
            </p>

            {/* Scroll indicator */}
            <div className='mt-16 flex justify-center'>
              <div className='animate-bounce'>
                <svg
                  className='w-6 h-6 text-white/40'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 14l-7 7m0 0l-7-7m7 7V3'
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
