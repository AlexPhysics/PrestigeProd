import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useEffect, useState } from 'react';
import TrueFocus from './TrueFocus';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo,
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('reisze', handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 1 });
    gsap.to('#cta', { opacity: 1, y: -50, delay: 1 });
    // Animate the gradient on the word “prestige”
    gsap.to('#prestige', {
      backgroundPosition: '200% center',
      duration: 3,
      ease: 'power3.inOut',
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <section className='w-full nav-height bg-black relative  pt-20 md:pt-28'>
      <div className='h-5/6 w-full flex-center flex-col'>
        <div className='-mt-4 mb-8 text-4xl sm:text-6xl font-light tracking-tight font-sans'>
          <TrueFocus
            sentence='Prestige Production'
            manualMode
            blurAmount={5}
            borderColor='red'
            animationDuration={1}
            pauseBetweenAnimations={1}
          />
        </div>
        <p id='hero' className='hero-title mb-4 sm:mb-6'>
          Showcasing{'  '}
          <span
            id='prestige'
            style={{
              backgroundSize: '200% auto',
              backgroundPosition: '0% center',
            }}
            className='bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent'
          >
            prestige{'  '}
          </span>
          in every project
        </p>
        <div className='md:w-10/12 w-9/12'>
          <video
            className='pointer-events-none'
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type='video/mp4' />
          </video>
        </div>
      </div>

      <div
        id='cta'
        className='flex flex-col items-center opacity-0 translate-y-20'
      >
        <Link to='/contact' className='btn'>
          Contact us
        </Link>
        <p className='font-normal text-xl'>
          Let’s Talk About Your Project – No Cost
        </p>
      </div>
    </section>
  );
};

export default Hero;
