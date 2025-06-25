import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { rightImg, watchImg } from '../utils';
import { Link, useParams } from 'react-router-dom';
import { GRADIENT_CLASS } from '../constants';
import VideoCarousel from './VideoCarousel';
import { useTranslation } from 'react-i18next';

const Highlights = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || i18n.language || 'en';

  useGSAP(() => {
    // Create a timeline for better control
    const tl = gsap.timeline({ defaults: { opacity: 0, y: 20, duration: 1 } });

    // Animate the title first
    tl.to('#title', { opacity: 1, y: 0 })
      // Animate all link elements with stagger
      .to('.link', { opacity: 1, y: 0, stagger: 0.5 }, '-=0.5'); // Overlap a bit for a smoother transition
  }, []);

  return (
    <section
      id='highlights'
      className='w-screen overflow-hidden h-full common-padding bg-zinc'
    >
      <div className='screen-max-width'>
        <div className='mb-12 w-full md:flex items-end justify-between'>
          <h1 id='title' className='section-heading !text-white'>
            {t('highlights.takeALook', 'Take a look at')}{' '}
            <span className={`${GRADIENT_CLASS} bg-clip-text text-transparent`}>
              {t('highlights.ourWork', 'our work!')}
            </span>
          </h1>
          <div className='flex flex-wrap items-end gap-5'>
            <p className='link'>
              <Link to={`/${currentLang}/portfolio`} className='flex items-center'>
                {t('highlights.seeFullPortfolio', 'See full Portfolio here')}
                <img src={watchImg} alt={t('common.watch', 'watch')} className='ml-2' />
              </Link>
            </p>
            <p className='link'>
              <Link to={`/${currentLang}/services`} className='flex items-center'>
                {t('highlights.whatDoWeOffer', 'What do we offer?')}
                <img src={rightImg} alt={t('common.right', 'right')} className='ml-2' />
              </Link>
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
