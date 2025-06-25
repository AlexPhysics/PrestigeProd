// videos
import hmv from '/assets/videos/hero.mp4';
import smallmv from '/assets/videos/smallHero.mp4';
import highlight1 from '/assets/videos/highlight1.mp4';
import highlight2 from '/assets/videos/soroush_touring_penthouse.mp4';
import highlight3 from '/assets/videos/hightlight3.mp4';
import highlight4 from '/assets/videos/hightlight4.mp4';
import highlight5 from '/assets/videos/hightlight5.mp4';
import exploremv from '/assets/videos/explore.mp4';
import framemv from '/assets/videos/lowres_short_reel_showcase_v2_1.mp4';
import reelsoroush from '/assets/videos/reel_soroush.mp4';

// images
import logo from '/assets/images/logo.svg';
import pplogo from '/assets/images/logo.png';
import apple from '/assets/images/apple.svg';
import search from '/assets/images/search.svg';
import bag from '/assets/images/bag.svg';
import watch from '/assets/images/watch.svg';
import right from '/assets/images/right.svg';
import replay from '/assets/images/replay.svg';
import play from '/assets/images/play.svg';
import pause from '/assets/images/pause.svg';

import yellow from '/assets/images/yellow.jpg';
import blue from '/assets/images/blue.jpg';
import white from '/assets/images/white.jpg';
import black from '/assets/images/black.jpg';
import explore1 from '/assets/images/explore1.jpg';
import explore2 from '/assets/images/explore2.jpg';
import chip from '/assets/images/chip.jpeg';
import frame from '/assets/images/frame.png';

import star from '/assets/images/star.png';
import exp1 from '/assets/images/exp1.png';
import exp2 from '/assets/images/exp2.png';
import exp3 from '/assets/images/exp3.png';
import logo1 from '/assets/images/logo1.png';
import logo2 from '/assets/images/logo2.png';
import logo3 from '/assets/images/logo3.png';
import iphoneframeimg from '/assets/images/Apple iPhone 15 Frame PNG.jpeg';
import smilogo from '/assets/logos/smi_logo.png';
// declare
export const heroVideo = hmv;
export const smallHeroVideo = smallmv;
export const highlightFirstVideo = highlight1;
export const highlightSecondVideo = highlight2;
export const highlightThirdVideo = highlight3;
export const highlightFourthVideo = highlight4;
export const highlightFifthVideo = highlight5;
export const exploreVideo = exploremv;
export const frameVideo = framemv;
export const reelSoroush = reelsoroush;

export const logoImg = logo;
export const ppLogo = pplogo;
export const appleImg = apple;
export const searchImg = search;
export const bagImg = bag;
export const watchImg = watch;
export const rightImg = right;
export const replayImg = replay;
export const playImg = play;
export const pauseImg = pause;

export const yellowImg = yellow;
export const blueImg = blue;
export const whiteImg = white;
export const blackImg = black;
export const explore1Img = explore1;
export const explore2Img = explore2;
export const chipImg = chip;
export const frameImg = frame;

export const starImg = star;
export const exp1Img = exp1;
export const exp2Img = exp2;
export const exp3Img = exp3;
export const logo1Img = logo1;
export const logo2Img = logo2;
export const logo3Img = logo3;
export const iphoneFrameImg = iphoneframeimg;
export const smiLogo = smilogo;

/**
 * Smoothly scrolls to an element with the given ID
 * @param {string} elementId - The ID of the element to scroll to
 * @param {Object} options - Additional options for scrolling
 * @param {string} options.behavior - The scroll behavior ('auto', 'smooth')
 * @param {string} options.block - Vertical alignment ('start', 'center', 'end', 'nearest')
 * @param {string} options.inline - Horizontal alignment ('start', 'center', 'end', 'nearest')
 */
export const smoothScrollTo = (
  elementId,
  options = { behavior: 'smooth', block: 'start' },
) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView(options);
  }
};

export const sonyCameraImg = '/assets/gear/sony_camera.jpg';
export const droneImg = '/assets/gear/dji_drone.jpg';
