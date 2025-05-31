import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef, useState } from 'react';

import { hightlightsSlides } from '../constants';
import { pauseImg, playImg, replayImg } from '../utils';

gsap.registerPlugin(ScrollTrigger);

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);
  const progressAnims = useRef([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const [loadedData, setLoadedData] = useState([]);
  const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;

  useGSAP(() => {
    gsap.to('#slider', {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 1.5,
      ease: 'power2.inOut',
    });

    gsap.to('#video', {
      scrollTrigger: {
        trigger: '#video',
        toggleActions: 'restart none none none',
      },
      onComplete: () => {
        setVideo(pre => ({
          ...pre,
          startPlay: true,
          isPlaying: true,
        }));
      },
    });
  }, [isEnd, videoId]);

  useEffect(() => {
    let currentProgress = 0;
    const span = videoSpanRef.current;

    if (span[videoId]) {
      const anim = gsap.to(span[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);
          if (progress !== currentProgress) {
            currentProgress = progress;

            gsap.to(videoDivRef.current[videoId], {
              width: window.innerWidth < 1200 ? '10vw' : '4vw',
            });

            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: 'white',
            });
          }
        },
        onComplete: () => {
          if (isPlaying) {
            gsap.to(videoDivRef.current[videoId], {
              width: '12px',
            });
            gsap.to(span[videoId], {
              backgroundColor: '#afafaf',
            });
          }
        },
      });

      progressAnims.current[videoId] = anim;

      const tickerUpdate = () => {
        const videoEl = videoRef.current[videoId];
        if (videoEl && hightlightsSlides[videoId]) {
          anim.progress(
            videoEl.currentTime / hightlightsSlides[videoId].videoDuration,
          );
        }
      };

      gsap.ticker.add(tickerUpdate);
      anim.tickerUpdate = tickerUpdate;
    }

    return () => {
      const anim = progressAnims.current[videoId];
      if (anim) {
        anim.kill();
        if (anim.tickerUpdate) gsap.ticker.remove(anim.tickerUpdate);
      }
    };
  }, [videoId, startPlay]);

  useEffect(() => {
    if (loadedData.length > 3) {
      const currentVideo = videoRef.current[videoId];
      if (!isPlaying) {
        currentVideo?.pause();
      } else if (startPlay) {
        currentVideo?.play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  const handleProcess = (type, i) => {
    const resetVideosAndProgress = () => {
      progressAnims.current.forEach(anim => {
        if (anim) {
          anim.kill();
          if (anim.tickerUpdate) gsap.ticker.remove(anim.tickerUpdate);
        }
      });

      videoRef.current.forEach((video, idx) => {
        video?.pause();
        video.currentTime = 0;

        gsap.set(videoSpanRef.current[idx], {
          width: 0,
          backgroundColor: '#afafaf',
        });
        gsap.set(videoDivRef.current[idx], { width: '12px' });

        progressAnims.current[idx] = null;
      });
    };

    switch (type) {
      case 'video-end':
        setVideo(prev => ({ ...prev, isEnd: true, videoId: i + 1 }));
        break;
      case 'video-last':
        setVideo(prev => ({ ...prev, isLastVideo: true }));
        break;
      case 'video-reset':
        resetVideosAndProgress();
        setVideo({
          videoId: 0,
          isEnd: false,
          isLastVideo: false,
          startPlay: true,
          isPlaying: true,
        });
        break;
      case 'pause':
      case 'play':
        setVideo(prev => ({ ...prev, isPlaying: !prev.isPlaying }));
        break;
      case 'set-video':
        resetVideosAndProgress();
        setVideo({
          videoId: i,
          isEnd: false,
          isLastVideo: i === hightlightsSlides.length - 1,
          startPlay: true,
          isPlaying: true,
        });
        break;
      default:
        return video;
    }
  };

  const handleLoadedMetaData = (i, e) => setLoadedData(prev => [...prev, e]);

  return (
    <>
      <div className='w-full overflow-hidden'>
        <div
          id='slider'
          className='flex transition-transform duration-700 ease-in-out'
          style={{
            transform: `translateX(-${videoId * 85}vw)`,
            width: `${hightlightsSlides.length * 85}vw`,
          }}
        >
          {hightlightsSlides.map((list, i) => (
            <div key={list.id} className='flex-shrink-0 w-[85vw] h-[80vh] px-2'>
              <div className='relative w-full h-full bg-black rounded-3xl overflow-hidden'>
                <video
                  playsInline
                  preload='auto'
                  muted
                  ref={el => (videoRef.current[i] = el)}
                  onEnded={() =>
                    i !== hightlightsSlides.length - 1
                      ? handleProcess('video-end', i)
                      : handleProcess('video-last')
                  }
                  onPlay={() =>
                    setVideo(prev => ({ ...prev, isPlaying: true }))
                  }
                  onLoadedMetadata={e => handleLoadedMetaData(i, e)}
                  className='w-full h-full object-cover'
                >
                  <source src={list.video} type='video/mp4' />
                </video>

                <div className='absolute top-12 left-6 z-10 text-white'>
                  {list.textLists.map((text, idx) => (
                    <p key={idx} className='md:text-3xl text-xl font-medium'>
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-center mt-10'>
        <div className='flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full'>
          {videoRef.current.map((_, i) => (
            <span
              key={i}
              className='mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer'
              ref={el => (videoDivRef.current[i] = el)}
              onClick={() => handleProcess('set-video', i)}
            >
              <span
                className='absolute h-full w-full rounded-full'
                ref={el => (videoSpanRef.current[i] = el)}
              />
            </span>
          ))}
        </div>

        <button className='control-btn'>
          <img
            src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
            alt={isLastVideo ? 'replay' : !isPlaying ? 'play' : 'pause'}
            onClick={
              isLastVideo
                ? () => handleProcess('video-reset')
                : !isPlaying
                ? () => handleProcess('play')
                : () => handleProcess('pause')
            }
          />
        </button>
      </div>
    </>
  );
};

export default VideoCarousel;
