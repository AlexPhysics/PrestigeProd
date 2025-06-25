import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const WhyUs = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || i18n.language || 'en';

  useEffect(() => {
    document.title = t('whyUs.pageTitle', 'Why Us | Prestige Production');
  }, [t]);

  useGSAP(() => {
    gsap.from('.fade-in', {
      opacity: 0,
      y: 20,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
    });
  }, []);

  // Utiliser t() pour accéder aux traductions
  const teamMembers = [
    {
      nameKey: 'duo',
      image: '/assets/images/duo.png',
      roleKey: 'duoRole',
      descriptionKeys: ['duoDesc1', 'duoDesc2', 'duoDesc3'],
    },
    {
      nameKey: 'dorian',
      image: '/assets/images/dorian.jpg',
      roleKey: 'dorianRole',
      descriptionKeys: ['dorianDesc1', 'dorianDesc2', 'dorianDesc3'],
    },
    {
      nameKey: 'alex',
      image: '/assets/images/alex.jpg',
      roleKey: 'alexRole',
      descriptionKeys: ['alexDesc1', 'alexDesc2', 'alexDesc3'],
    },
  ];

  const [duo, ...individuals] = teamMembers;

  return (
    <section className='relative w-full min-h-screen bg-black text-white py-20 px-6 sm:px-10 overflow-hidden'>
      <div className='max-w-6xl mx-auto'>
        {/* Headline */}
        <h1 className='text-5xl md:text-6xl font-light fade-in mb-6 text-center'>
          {t('whyUs.title', 'Why Work With Us?')}
        </h1>
        <p className='text-lg text-center text-white/70 fade-in mb-16'>
          {t(
            'whyUs.subtitle',
            "Prestige Production is more than just a video company — it's a partnership built on vision, creativity, and performance.",
          )}
        </p>

        {/* Duo Photo */}
        <div key={duo.nameKey} className='fade-in mb-24 text-center'>
          <div className='rounded-xl mb-8 shadow-lg overflow-hidden max-w-4xl mx-auto'>
            <img
              src={duo.image}
              alt={t(`whyUs.team.${duo.nameKey}.name`, "Dorian & Alex")}
              className='w-full h-auto max-h-[700px] object-contain'
              loading='lazy'
            />
          </div>
          <h2 className='text-2xl font-semibold mb-1'>
            {t(`whyUs.team.${duo.nameKey}.name`, "Dorian & Alex")}
          </h2>
          <h3 className='text-white/60 text-sm mb-8 italic'>
            {t(`whyUs.team.${duo.nameKey}.role`, "Founders of Prestige Production")}
          </h3>
          <div className='text-white/70 text-sm space-y-4 max-w-3xl mx-auto'>
            {duo.descriptionKeys.map((key, idx) => (
              <p key={idx}>
                {t(`whyUs.team.${duo.nameKey}.description.${key}`, 
                  "We're Alex and Dorian, co-founders of Prestige Production—a creative studio built on a shared passion for visual storytelling.")}
              </p>
            ))}
          </div>
        </div>

        {/* Individuals Side-by-Side */}
        <div className='grid md:grid-cols-2 gap-16 fade-in items-start'>
          {individuals.map((member) => (
            <div key={member.nameKey} className='flex flex-col items-center text-center'>
              {/* Fixed-ratio container so both pics keep identical size */}
              <div className='w-full relative h-full rounded-xl shadow-lg overflow-hidden mb-6'>
                <img
                  src={member.image}
                  alt={t(`whyUs.team.${member.nameKey}.name`, member.nameKey)}
                  className='w-full h-auto max-h-[700px] object-contain rounded-xl'
                  loading='lazy'
                />
              </div>

              <h2 className='text-2xl font-semibold mb-1'>
                {t(`whyUs.team.${member.nameKey}.name`, member.nameKey)}
              </h2>
              <h3 className='text-white/60 text-sm mb-6 italic'>
                {t(`whyUs.team.${member.nameKey}.role`, "Role")}
              </h3>
              <div className='text-white/70 text-sm space-y-4 max-w-md'>
                {member.descriptionKeys.map((key, idx) => (
                  <p key={idx}>
                    {t(`whyUs.team.${member.nameKey}.description.${key}`, 
                      "Description paragraph")}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className='mt-24 text-center fade-in'>
          <Link
            to={`/${currentLang}/contact`}
            className='bg-white text-black text-xl md:text-2xl font-medium px-8 py-4 rounded-full hover:bg-gray-200 transition duration-300'
          >
            {t('whyUs.cta', "Let's work together")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
