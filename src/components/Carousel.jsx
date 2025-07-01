import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const SmiReel1 = `${import.meta.env.VITE_CLOUDFRONT_URL}/videos/teaser 1_smi.mp4`;
const SmiReel2 = `${import.meta.env.VITE_CLOUDFRONT_URL}/videos/teaser 2_smi.mp4`;
const SmiReel3 = `${import.meta.env.VITE_CLOUDFRONT_URL}/videos/teaser 3_smi.mp4`;

const DEFAULT_VIDEOS = [
  { id: 1, src: SmiReel1 },
  { id: 2, src: SmiReel2 },
  { id: 3, src: SmiReel3 },
];

const GAP = 16;
const SPRING = { type: 'spring', stiffness: 300, damping: 30 };
const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;

export default function Carousel({
  items = DEFAULT_VIDEOS,
  baseWidth = 640,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
}) {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  
  // Responsive width calculation
  const getResponsiveWidth = () => {
    if (windowWidth < 768) return Math.min(windowWidth - 40, 360); // Mobile
    if (windowWidth < 1024) return Math.min(windowWidth - 80, 600); // Tablet
    return Math.min(baseWidth, windowWidth - 120); // Desktop
  };

  const pad = windowWidth < 768 ? 8 : 16;
  const responsiveWidth = getResponsiveWidth();
  const itemW = responsiveWidth - pad * 2;
  const itemH = (itemW * 9) / 16;
  const step = itemW + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [idx, setIdx] = useState(0);
  const x = useMotionValue(0);
  const [hover, setHover] = useState(false);
  const [resetting, setResetting] = useState(false);

  const containerRef = useRef(null);
  const videoRefs = useRef([]);

  const syncVideoStates = active => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === active) {
        v.muted = false;
      } else {
        v.pause();
        v.currentTime = 0;
        v.muted = true;
      }
    });
  };

  useEffect(() => syncVideoStates(0), []); // initial

  useEffect(() => syncVideoStates(idx), [idx]); // after slide change

  const onDragStart = () => syncVideoStates(-1); // silence while dragging

  useEffect(() => {
    if (!pauseOnHover || !containerRef.current) return;
    const c = containerRef.current;
    const enter = () => setHover(true);
    const leave = () => setHover(false);
    c.addEventListener('mouseenter', enter);
    c.addEventListener('mouseleave', leave);
    return () => {
      c.removeEventListener('mouseenter', enter);
      c.removeEventListener('mouseleave', leave);
    };
  }, [pauseOnHover]);

  useEffect(() => {
    if (!autoplay || (pauseOnHover && hover)) return;
    const t = setInterval(() => {
      setIdx(p =>
        p === items.length - 1 && loop
          ? p + 1
          : p === carouselItems.length - 1
          ? loop
            ? 0
            : p
          : p + 1,
      );
    }, autoplayDelay);
    return () => clearInterval(t);
  }, [
    autoplay,
    autoplayDelay,
    hover,
    loop,
    items.length,
    carouselItems.length,
    pauseOnHover,
  ]);

  // Handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onDragEnd = (_, info) => {
    const { x: off } = info.offset;
    const { x: vel } = info.velocity;
    if (off < -DRAG_BUFFER || vel < -VELOCITY_THRESHOLD) {
      loop && idx === items.length - 1
        ? setIdx(idx + 1)
        : setIdx(p => Math.min(p + 1, carouselItems.length - 1));
    } else if (off > DRAG_BUFFER || vel > VELOCITY_THRESHOLD) {
      loop && idx === 0
        ? setIdx(items.length - 1)
        : setIdx(p => Math.max(p - 1, 0));
    }
  };

  const transition = resetting ? { duration: 0 } : SPRING;

  const onAnimComplete = () => {
    if (loop && idx === carouselItems.length - 1) {
      setResetting(true);
      x.set(0);
      syncVideoStates(0);
      setIdx(0);
      setTimeout(() => setResetting(false), 50);
    }
  };

  const dragBounds = loop
    ? {}
    : {
        dragConstraints: { left: -step * (carouselItems.length - 1), right: 0 },
      };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${
        round
          ? 'rounded-full border border-white'
          : 'rounded-[24px] border border-[#222]'
      }`}
      style={{ 
        width: responsiveWidth, 
        padding: `${pad}px`,
        ...(round && { height: responsiveWidth }) 
      }}
    >
      <motion.div
        drag='x'
        onDragStart={onDragStart}
        {...dragBounds}
        className='flex'
        style={{
          width: itemW,
          gap: GAP,
          perspective: 1000,
          perspectiveOrigin: `${idx * step + itemW / 2}px 50%`,
          x,
        }}
        animate={{ x: -(idx * step) }}
        transition={transition}
        onAnimationComplete={onAnimComplete}
        onDragEnd={onDragEnd}
      >
        {carouselItems.map((item, i) => {
          const range = [-(i + 1) * step, -i * step, -(i - 1) * step];
          const rotY = useTransform(x, range, [90, 0, -90], { clamp: false });

          return (
            <motion.div
              key={i}
              className={`relative shrink-0 overflow-hidden ${
                round ? 'rounded-full' : 'rounded-[12px]'
              } bg-black cursor-grab active:cursor-grabbing`}
              style={{
                width: itemW,
                height: round ? itemW : itemH,
                rotateY: rotY,
              }}
              transition={transition}
            >
              <video
                ref={el => (videoRefs.current[i] = el)}
                src={item.src}
                controls
                preload='metadata'
                className='w-full h-full object-cover'
              />
            </motion.div>
          );
        })}
      </motion.div>

      <div
        className={`flex w-full justify-center ${
          round ? 'absolute bottom-12 left-1/2 -translate-x-1/2' : ''
        }`}
      >
        <div className='mt-4 md:mt-6 flex w-[120px] md:w-[180px] justify-between px-2 md:px-4'>
          {items.map((_, i) => (
            <motion.div
              key={i}
              className={`h-2 w-2 md:h-3 md:w-3 rounded-full cursor-pointer border-2 transition-all duration-300 ${
                idx % items.length === i
                  ? round
                    ? 'bg-white border-white'
                    : 'bg-[#9eb6a9] border-[#9eb6a9] shadow-lg shadow-[#9eb6a9]/30'
                  : round
                  ? 'bg-transparent border-white/40 hover:border-white/60'
                  : 'bg-transparent border-white/30 hover:border-[#9eb6a9]/50'
              }`}
              animate={{ 
                scale: idx % items.length === i ? 1.2 : 1,
                opacity: idx % items.length === i ? 1 : 0.7
              }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={() => setIdx(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
