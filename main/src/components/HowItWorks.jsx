import React, { useRef } from 'react';
import { chipImg, frameImg, frameVideo } from '../utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';
import RotatingText from './RotatingText';

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom',
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut',
    });

    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut',
    });
  }, []);

  return (
    <section className='common-padding'>
      <div className='screen-max-width'>
        {/*<div id='chip' className='flex-center w-full my-20'>
          <img src={chipImg} alt='chip' width={180} height={180} />
        </div> */}

        {/* Rotating headline & subtitle */}
        <div className='flex flex-col items-center text-center gap-2 md:gap-3'>
          <h2 className='hiw-title flex items-center justify-center flex-wrap'>
            Crafted with&nbsp;
            <RotatingText
              texts={[
                'Swiss Precision',
                'Cinematic Vision',
                'Digital Innovation',
                'Human Emotion',
              ]}
              mainClassName='inline-block px-2 bg-white text-black border border-black overflow-hidden py-0.5 md:py-1 rounded-lg'
              staggerFrom='last'
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-120%' }}
              staggerDuration={0.03}
              splitLevelClassName='overflow-hidden pb-0.5 md:pb-1'
              transition={{ type: 'spring', damping: 30, stiffness: 400 }}
              rotationInterval={2500}
            />
          </h2>

          <p className='hiw-subtitle'>Quality above everything else.</p>
        </div>

        {/*
        <div className='mt-10 md:mt-20 mb-14'>
          <div className='relative h-full flex-center'>
            <div className='relative'>
              <img
                src={frameImg}
                alt='frame'
                className='bg-transparent relative z-10 block w-full h-auto'
              />
              <video
                className='absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none'
                playsInline
                preload='none'
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={frameVideo} type='video/mp4' />
              </video>
            </div>
          </div>
        </div>*/}

        <div className='hiw-text-container'>
          {/* LEFT COLUMN – storytelling & craft */}
          <div className='flex flex-1 justify-center flex-col'>
            <p className='hiw-text g_fadeIn'>
              We blend <span className='text-white'>Swiss precision</span> with
              bold cinematic craft to create visuals that stop thumbs and turn
              heads.
            </p>

            <p className='hiw-text g_fadeIn'>
              From the first storyboard to the final colour grade, every frame
              is engineered to{' '}
              <span className='text-white'>move audiences</span> and
              <span className='text-white'> drive results</span>.
            </p>
          </div>

          {/* RIGHT COLUMN – quick stats / proof points */}
          <div className='flex-1 flex justify-center flex-col g_fadeIn'>
            <p className='hiw-text'>Since</p>
            <p className='hiw-bigtext'>2025</p>
            <p className='hiw-text'>10+ projects delivered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
