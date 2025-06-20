import React, { useState, useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {
  PaperAirplaneIcon,
  EnvelopeIcon,
  UserIcon,
  ChatBubbleBottomCenterTextIcon,
} from '@heroicons/react/24/outline';
import { GRADIENT_CLASS } from '../constants';
import Particles from '../components/Particles';

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    document.title = 'Contact | Prestige Production';
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useGSAP(() => {
    gsap.from('.fade-in', {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.15,
      ease: 'power2.out',
    });
  }, []);

  const validateEmail = email => /^\S+@\S+\.\S+$/.test(email);

  const handleInputChange = e => {
    const { name, value } = e.target;
    let fieldError;

    if (name === 'email') {
      if (!value.trim()) fieldError = 'Email is required';
      else if (!validateEmail(value))
        fieldError = 'Please enter a valid email address';
    } else {
      if (!value.trim())
        fieldError = `${
          name.charAt(0).toUpperCase() + name.slice(1)
        } is required`;
    }

    setErrors(prev => {
      const newErrors = { ...prev };
      if (fieldError) newErrors[name] = fieldError;
      else delete newErrors[name];
      return newErrors;
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const name = formData.get('name')?.trim();
    const email = formData.get('email')?.trim();
    const message = formData.get('message')?.trim();

    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    else if (!validateEmail(email))
      newErrors.email = 'Please enter a valid email address';
    if (!message) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/mrbqwrvq', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        setStatus('SUCCESS');
        formRef.current.reset();
      } else setStatus('ERROR');
    } catch {
      setStatus('ERROR');
    }
  };

  return (
    <section className='relative w-full min-h-screen bg-black text-white py-20 px-6 sm:px-10 overflow-hidden'>
      <div className='max-w-3xl mx-auto'>
        <h1 className='text-5xl md:text-6xl font-light fade-in mb-6 text-center'>
          See what{' '}
          <span className={`${GRADIENT_CLASS} bg-clip-text text-transparent`}>
            Prestige Production
          </span>{' '}
          can do for you
        </h1>
        <p className='text-lg text-center text-white/80 fade-in mb-12'>
          Please fill out the form. Our team will respond within 24 hours. We
          look forward to learning more about you and your projects!
        </p>

        {status === 'SUCCESS' ? (
          <p className='text-green-400 text-center text-xl mb-8'>
            ✅ Thank you! Your message has been sent.
          </p>
        ) : (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            className='space-y-8'
          >
            <input
              type='hidden'
              name='_subject'
              value='Message from Prestige Production site'
            />

            <div className='fade-in'>
              <label htmlFor='name' className='block text-sm mb-2 font-medium'>
                Name
              </label>
              <div className='relative'>
                <UserIcon className='w-5 h-5 absolute left-0 top-2.5 text-white/50' />
                <input
                  id='name'
                  name='name'
                  type='text'
                  placeholder='Your Name'
                  onChange={handleInputChange}
                  className={`pl-7 w-full bg-transparent border-b py-2 text-base focus:outline-none transition-all ${
                    errors.name
                      ? 'border-red-500 ring-1 ring-red-500 ring-opacity-50'
                      : 'border-gray-600 focus:border-white'
                  }`}
                />
              </div>
              {errors.name && (
                <p className='text-red-500 text-sm mt-1'>{errors.name}</p>
              )}
            </div>

            <div className='fade-in'>
              <label htmlFor='email' className='block text-sm mb-2 font-medium'>
                Email
              </label>
              <div className='relative'>
                <EnvelopeIcon className='w-5 h-5 absolute left-0 top-2.5 text-white/50' />
                <input
                  id='email'
                  name='email'
                  type='email'
                  placeholder='you@example.com'
                  onChange={handleInputChange}
                  className={`pl-7 w-full bg-transparent border-b py-2 text-base focus:outline-none transition-all ${
                    errors.email
                      ? 'border-red-500 ring-1 ring-red-500 ring-opacity-50'
                      : 'border-gray-600 focus:border-white'
                  }`}
                />
              </div>
              {errors.email && (
                <p className='text-red-500 text-sm mt-1'>{errors.email}</p>
              )}
            </div>

            <div className='fade-in'>
              <label
                htmlFor='message'
                className='block text-sm mb-2 font-medium'
              >
                Tell us about your project
              </label>
              <div className='relative'>
                <ChatBubbleBottomCenterTextIcon className='w-5 h-5 absolute left-0 top-2.5 text-white/50' />
                <textarea
                  id='message'
                  name='message'
                  rows={5}
                  placeholder='Eg. Video Production'
                  onChange={handleInputChange}
                  className={`pl-7 w-full bg-transparent border-b py-2 text-base resize-none focus:outline-none transition-all ${
                    errors.message
                      ? 'border-red-500 ring-1 ring-red-500 ring-opacity-50'
                      : 'border-gray-600 focus:border-white'
                  }`}
                />
              </div>
              {errors.message && (
                <p className='text-red-500 text-sm mt-1'>{errors.message}</p>
              )}
            </div>

            {status === 'ERROR' && (
              <p className='text-red-500 text-center'>
                Oops! Something went wrong.
              </p>
            )}

            <div className='relative group fade-in'>
              <button
                type='submit'
                className='w-full px-8 py-3 text-base font-medium bg-white text-black rounded-full relative overflow-hidden'
              >
                <PaperAirplaneIcon className='w-5 h-5 inline-block mr-2' />
                Send Message
                <span className='absolute left-[-30%] top-0 w-[200%] h-full bg-white opacity-10 group-hover:animate-flare'></span>
              </button>
            </div>
          </form>
        )}

        <div className='mt-20 border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4'>
          <div className='text-sm space-y-1 text-white/70'>
            <p>
              Email:{' '}
              <a href='mailto:info@prestigeproduction.ch' className='underline'>
                info@prestigeproduction.ch
              </a>
            </p>
            <p>
              Phone:{' '}
              <a href='tel:+41762021959' className='underline'>
                +41 76 202 19 59
              </a>
            </p>
          </div>
          <a
            href='https://wa.me/41762021959'
            target='_blank'
            rel='noopener noreferrer'
            className='px-6 py-3 bg-green-500 text-white rounded-full hover:scale-105 transition-transform duration-300'
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Calendly CTA */}
      <div className='max-w-3xl mx-auto mt-24 text-center'>
        <h2 className='text-4xl font-light mb-4'>Prefer a live meeting? </h2>
        <h2 className='text-5xl font-light mb-4'>
          Reserve your{' '}
          <span className={`${GRADIENT_CLASS} bg-clip-text text-transparent`}>
            creative
          </span>{' '}
          time
        </h2>
        <p className='text-1xl text-white/70 mb-6'>
          Schedule a quick call with us at your convenience.
        </p>

        {/* Calendly inline widget */}
        <div
          className='calendly-inline-widget'
          data-url='https://calendly.com/dorian-quilfen/30min'
          style={{ minWidth: '320px', height: '100vh' }}
        ></div>
      </div>

      {/* Flare Animation Tailwind Keyframes */}
      <style>{`
        @keyframes flare {
          0% {
            transform: translateX(-100%) skewX(-20deg);
            opacity: 0.1;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            transform: translateX(100%) skewX(-20deg);
            opacity: 0;
          }
        }
        .group-hover\\:animate-flare {
          animation: flare 1.4s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Contact;
