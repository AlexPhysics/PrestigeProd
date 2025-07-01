import React, { useState, useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {
  PaperAirplaneIcon,
  EnvelopeIcon,
  UserIcon,
  ChatBubbleBottomCenterTextIcon,
} from '@heroicons/react/24/outline';
import { TagIcon } from '@heroicons/react/24/solid';
import { GRADIENT_CLASS } from '../constants';
import Particles from '../components/Particles';
import { useTranslation } from 'react-i18next';
import { useParams, useLocation } from 'react-router-dom';

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const location = useLocation();
  const currentLang = lang || i18n.language || 'en';
  const { selectedPackage } = location.state || {};

  useEffect(() => {
    document.title = t('contact.pageTitle', 'Contact | Prestige Production');
  }, [t]);

  // Handle URL parameters for prefilling form
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const service = urlParams.get('service');
    const subject = urlParams.get('subject');

    if (service && subject) {
      // Create a personalized message based on the service
      let prefillMessage = '';

      switch (service) {
        case 'video-production':
          prefillMessage = `Hi! I'm interested in your video production services. I'd like to discuss my project and get a custom quote.`;
          break;
        case 'photography':
          prefillMessage = `Hello! I'd like to learn more about your photography services and get a quote for my project.`;
          break;
        case 'complete-package':
          prefillMessage = `Hi! I'm interested in your complete video + photo package. Could we discuss my project requirements and pricing?`;
          break;
        default:
          prefillMessage = `Hello! I'm interested in your services and would like to discuss my project.`;
      }

      setFormData(prev => ({
        ...prev,
        message: prefillMessage,
      }));

      // Analytics: Track prefilled form views
      if (typeof gtag !== 'undefined') {
        gtag('event', 'contact_form_prefilled', {
          event_category: 'Contact',
          event_label: service,
          service_type: service,
        });
      }
    }
  }, [location.search]);

  useEffect(() => {
    const calendlyScriptId = 'calendly-widget-script';
    let script = document.getElementById(calendlyScriptId);

    const hideLoadingOverlay = () => {
      const loadingOverlay = document.querySelector('.calendly-loading');
      if (loadingOverlay) {
        loadingOverlay.style.opacity = '0';
        setTimeout(() => {
          if (loadingOverlay) loadingOverlay.style.display = 'none';
        }, 300);
      }
    };

    const initializeCalendly = () => {
      if (window.Calendly) {
        const widgetContainer = document.querySelector(
          '.calendly-inline-widget',
        );
        if (widgetContainer && !widgetContainer.hasChildNodes()) {
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/dorian-balli/30min',
            parentElement: widgetContainer,
            prefill: {},
            utm: {},
          });
        }
        const observer = new MutationObserver((mutationsList, observer) => {
          for (const mutation of mutationsList) {
            if (
              mutation.type === 'childList' &&
              widgetContainer.querySelector('iframe')
            ) {
              hideLoadingOverlay();
              observer.disconnect();
              return;
            }
          }
        });
        if (widgetContainer) {
          observer.observe(widgetContainer, { childList: true, subtree: true });
        }
      }
    };

    if (script && window.Calendly) {
      initializeCalendly();
    } else if (!script) {
      script = document.createElement('script');
      script.id = calendlyScriptId;
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;

      script.onload = () => {
        initializeCalendly();
      };

      script.onerror = () => {
        console.error('Failed to load Calendly script.');
        const loadingOverlay = document.querySelector('.calendly-loading');
        if (loadingOverlay) {
          loadingOverlay.innerHTML = `
            <div class="text-center">
              <p class="text-red-400 mb-2">${t(
                'contact.calendarLoadError',
                'Failed to load calendar',
              )}</p>
              <p class="text-white/60 text-sm">${t(
                'contact.contactDirectly',
                'Please contact us directly',
              )}</p>
            </div>
          `;
        }
      };

      document.body.appendChild(script);
    }

    const fallbackTimeout = setTimeout(hideLoadingOverlay, 5000);

    return () => {
      clearTimeout(fallbackTimeout);
    };
  }, [t]);

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
    setFormData(prev => ({ ...prev, [name]: value }));

    let fieldError;

    if (name === 'email') {
      if (!value.trim())
        fieldError = t('contact.emailRequired', 'Email is required');
      else if (!validateEmail(value))
        fieldError = t(
          'contact.emailInvalid',
          'Please enter a valid email address',
        );
    } else {
      if (!value.trim())
        fieldError = t(
          `contact.${name}Required`,
          `${name.charAt(0).toUpperCase() + name.slice(1)} is required`,
        );
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
    setIsSubmitting(true);
    setStatus(null);
    setErrors({});

    const formData = new FormData(formRef.current);
    const name = formData.get('name')?.trim();
    const email = formData.get('email')?.trim();
    const message = formData.get('message')?.trim();

    // Get URL parameters for analytics
    const urlParams = new URLSearchParams(location.search);
    const service = urlParams.get('service');
    const subject = urlParams.get('subject');

    const newErrors = {};
    if (!name) newErrors.name = t('contact.nameRequired', 'Name is required');
    if (!email)
      newErrors.email = t('contact.emailRequired', 'Email is required');
    else if (!validateEmail(email))
      newErrors.email = t(
        'contact.emailInvalid',
        'Please enter a valid email address',
      );
    if (!message)
      newErrors.message = t('contact.messageRequired', 'Message is required');

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      setIsSubmitting(false);
      // Focus on first error field for accessibility
      const firstErrorField = Object.keys(newErrors)[0];
      document.getElementById(firstErrorField)?.focus();
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
        setFormData({ name: '', email: '', message: '' });

        // Analytics: Track successful form submission
        if (typeof gtag !== 'undefined') {
          gtag('event', 'contact_form_submit', {
            event_category: 'Contact',
            event_label: service || 'general',
            service_type: service || 'general',
            value: 1,
          });
        }

        // Announce success to screen readers
        setTimeout(() => {
          document.getElementById('success-message')?.focus();
        }, 100);
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('ERROR');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className='relative w-full min-h-screen bg-black text-white py-20 px-6 sm:px-10 overflow-hidden'>
      <div className='max-w-3xl mx-auto'>
        <h1 className='text-5xl md:text-6xl font-light fade-in mb-6 text-center'>
          {t('contact.title', "Let's create something ")}
          <span
            style={{
              background: 'linear-gradient(135deg, #205C57, #9EB6A9)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {t('contact.exceptional', 'exceptional')}
          </span>
        </h1>
        <p className='text-lg text-center text-white/80 fade-in mb-12'>
          {t(
            'contact.subtitle',
            'Reach out to discuss your project and discover how we can bring it to life.',
          )}
        </p>

        {selectedPackage && (
          <div className='mb-8 flex justify-center'>
            <div className='flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20'>
              <TagIcon className='w-5 h-5 text-pp-teal' />
              <span className='text-white/90 text-sm font-medium'>
                {t('contact.selectedPackage', 'Selected Package:')}{' '}
                <span className='font-semibold text-white'>
                  {selectedPackage}
                </span>
              </span>
            </div>
          </div>
        )}

        {status === 'SUCCESS' ? (
          <div
            id='success-message'
            tabIndex='-1'
            className='text-center py-8 rounded-2xl bg-gradient-to-r from-pp-teal/10 to-pp-sage/10 border border-pp-teal/30'
            role='alert'
            aria-live='polite'
          >
            <div className='text-4xl mb-4'>✨</div>
            <p className='text-pp-teal text-xl mb-2 font-medium'>
              {t(
                'contact.successMessage',
                'Thank you! Your message has been sent.',
              )}
            </p>
            <p className='text-white/70 text-sm'>
              {t(
                'contact.successSubtext',
                "We'll get back to you within 24 hours.",
              )}
            </p>
          </div>
        ) : (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            className='space-y-8'
            aria-label={t('contact.formLabel', 'Contact form')}
          >
            <input
              type='hidden'
              name='_subject'
              value={(() => {
                const urlParams = new URLSearchParams(location.search);
                const service = urlParams.get('service');
                const subject = urlParams.get('subject');

                if (service && subject) {
                  return `${subject} - ${currentLang.toUpperCase()}`;
                }
                return `Message from Prestige Production site (${currentLang})`;
              })()}
            />

            <div className='fade-in'>
              <label htmlFor='name' className='block text-sm mb-2 font-medium'>
                {t('contact.namePlaceholder', 'Name')}
              </label>
              <div className='relative'>
                <UserIcon className='w-5 h-5 absolute left-0 top-2.5 text-white/50' />
                <input
                  id='name'
                  name='name'
                  type='text'
                  value={formData.name}
                  placeholder={t('contact.namePlaceholder', 'Your Name')}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  aria-invalid={!!errors.name}
                  className={`contact-input pl-7 w-full bg-transparent border-b py-2 text-base focus:outline-none transition-all duration-300 disabled:opacity-50 ${
                    errors.name
                      ? 'border-red-400 focus:border-red-400 text-red-400'
                      : 'border-pp-grey focus:border-pp-teal hover:border-pp-sage'
                  }`}
                />
              </div>
              {errors.name && (
                <p
                  id='name-error'
                  className='text-red-400 text-sm mt-1'
                  role='alert'
                >
                  {errors.name}
                </p>
              )}
            </div>

            <div className='fade-in'>
              <label htmlFor='email' className='block text-sm mb-2 font-medium'>
                {t('contact.emailPlaceholder', 'Email')}
              </label>
              <div className='relative'>
                <EnvelopeIcon className='w-5 h-5 absolute left-0 top-2.5 text-white/50' />
                <input
                  id='email'
                  name='email'
                  type='email'
                  value={formData.email}
                  placeholder={t('contact.emailPlaceholder', 'you@example.com')}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  aria-invalid={!!errors.email}
                  className={`contact-input pl-7 w-full bg-transparent border-b py-2 text-base focus:outline-none transition-all duration-300 disabled:opacity-50 ${
                    errors.email
                      ? 'border-red-400 focus:border-red-400 text-red-400'
                      : 'border-pp-grey focus:border-pp-teal hover:border-pp-sage'
                  }`}
                />
              </div>
              {errors.email && (
                <p
                  id='email-error'
                  className='text-red-400 text-sm mt-1'
                  role='alert'
                >
                  {errors.email}
                </p>
              )}
            </div>

            <div className='fade-in'>
              <label
                htmlFor='message'
                className='block text-sm mb-2 font-medium'
              >
                {t('contact.messagePlaceholder', 'Tell us about your project')}
              </label>
              <div className='relative'>
                <ChatBubbleBottomCenterTextIcon className='w-5 h-5 absolute left-0 top-2.5 text-white/50' />
                <textarea
                  id='message'
                  name='message'
                  rows={5}
                  value={formData.message}
                  placeholder={t(
                    'contact.messagePlaceholder',
                    'Tell us about your project, timeline, and budget...',
                  )}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  aria-describedby={
                    errors.message ? 'message-error' : undefined
                  }
                  aria-invalid={!!errors.message}
                  className={`contact-input pl-7 w-full bg-transparent border-b py-2 text-base resize-none focus:outline-none transition-all duration-300 disabled:opacity-50 ${
                    errors.message
                      ? 'border-red-400 focus:border-red-400 text-red-400'
                      : 'border-pp-grey focus:border-pp-teal hover:border-pp-sage'
                  }`}
                />
              </div>
              {errors.message && (
                <p
                  id='message-error'
                  className='text-red-400 text-sm mt-1'
                  role='alert'
                >
                  {errors.message}
                </p>
              )}
            </div>

            {status === 'ERROR' && (
              <div
                className='text-center py-4 rounded-lg bg-red-500/10 border border-red-400/20'
                role='alert'
                aria-live='polite'
              >
                <p className='text-red-400 font-medium'>
                  {t(
                    'contact.errorMessage',
                    'Something went wrong. Please try again.',
                  )}
                </p>
                <p className='text-white/60 text-sm mt-1'>
                  {t(
                    'contact.errorSubtext',
                    'Or contact us directly at info@prestigeproduction.ch',
                  )}
                </p>
              </div>
            )}

            {/* Submit Button */}
            <div className='relative group fade-in'>
              <button
                type='submit'
                disabled={isSubmitting || Object.keys(errors).length > 0}
                className={`w-full px-8 py-4 text-base font-medium rounded-full relative overflow-hidden transition-all duration-300 ${
                  isSubmitting || Object.keys(errors).length > 0
                    ? 'bg-pp-grey text-white cursor-not-allowed opacity-50'
                    : 'text-white hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg'
                }`}
                style={
                  isSubmitting || Object.keys(errors).length > 0
                    ? {}
                    : {
                        background: 'linear-gradient(135deg, #205C57, #9EB6A9)',
                      }
                }
                aria-describedby='submit-status'
              >
                {isSubmitting ? (
                  <>
                    <div className='inline-block w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin mr-2'></div>
                    {t('contact.sendingButton', 'Sending...')}
                  </>
                ) : (
                  <>
                    <PaperAirplaneIcon className='w-5 h-5 inline-block mr-2' />
                    {t('contact.sendButton', 'Send message')}
                  </>
                )}
                {!isSubmitting && Object.keys(errors).length === 0 && (
                  <span className='absolute left-[-30%] top-0 w-[200%] h-full bg-white opacity-10 group-hover:animate-flare'></span>
                )}
              </button>
              <div id='submit-status' className='sr-only' aria-live='polite'>
                {isSubmitting
                  ? t('contact.submittingStatus', 'Form is being submitted')
                  : ''}
              </div>
            </div>
          </form>
        )}

        <div className='mt-20 border-t border-pp-grey/30 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4'>
          <div className='text-sm space-y-1 text-pp-grey'>
            <p>
              {t('contact.email', 'Email')}:{' '}
              <a
                href='mailto:info@prestigeproduction.ch'
                className='underline hover:text-pp-teal transition-colors'
              >
                info@prestigeproduction.ch
              </a>
            </p>
            <p>
              {t('contact.phone', 'Phone')}:{' '}
              <a
                href='tel:+41762021959'
                className='underline hover:text-pp-teal transition-colors'
              >
                +41 76 202 19 59
              </a>
            </p>
          </div>
          <a
            href='https://wa.me/41762021959'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center px-6 py-3 bg-green-500 text-white font-medium rounded-full hover:scale-105 hover:bg-green-600 transition-all duration-300 hover:shadow-lg'
            aria-label={t('contact.whatsappLabel', 'Chat with us on WhatsApp')}
          >
            <svg
              className='w-5 h-5 mr-2'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488' />
            </svg>
            {t('contact.whatsapp', 'Chat on WhatsApp')}
          </a>
        </div>
      </div>

      {/* Calendly CTA */}
      <div className='max-w-3xl mx-auto mt-24 text-center'>
        <h2 className='text-4xl font-light mb-4'>
          {t('contact.meetingCTA', 'Prefer a live meeting?')}
        </h2>
        <h2 className='text-5xl font-light mb-4'>
          {t('contact.reserveTime1', 'Reserve your')}{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #205C57, #9EB6A9)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {t('contact.creative', 'creative')}
          </span>{' '}
          {t('contact.reserveTime2', 'time')}
        </h2>
        <p className='text-1xl text-white/70 mb-6'>
          {t(
            'contact.scheduleCall',
            'Schedule a quick call with us at your convenience.',
          )}
        </p>

        {/* Calendly inline widget */}
        <div className='relative'>
          <div
            className='calendly-inline-widget rounded-2xl overflow-hidden shadow-2xl border border-pp-teal/20'
            data-url='https://calendly.com/dorian-quilfen/30min'
            style={{
              minWidth: '300px',
              height: 'clamp(600px, 80vh, 900px)',
              maxWidth: '100%',
            }}
          ></div>

          {/* Loading placeholder */}
          <div className='absolute inset-0 bg-pp-charcoal/80 backdrop-blur-sm flex items-center justify-center calendly-loading'>
            <div className='text-center'>
              <div className='w-8 h-8 border-2 border-pp-teal border-t-transparent rounded-full animate-spin mx-auto mb-4'></div>
              <p className='text-pp-sage'>
                {t('contact.loadingCalendar', 'Loading calendar...')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Animation Styles */}
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
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(20, 184, 166, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(20, 184, 166, 0.6), 0 0 30px rgba(20, 184, 166, 0.3);
          }
        }
        
        .group-hover\\:animate-flare {
          animation: flare 1.4s ease-in-out forwards;
        }
        
        .calendly-loading {
          transition: opacity 0.5s ease-in-out;
        }
        
        .calendly-inline-widget iframe {
          border-radius: 1rem;
        }
        
        /* Hide loading overlay when Calendly loads */
        .calendly-inline-widget[data-processed="true"] + .calendly-loading {
          opacity: 0;
          pointer-events: none;
        }
        
        /* Focus indicators for better accessibility */
        input:focus, textarea:focus, button:focus {
          outline: 2px solid rgba(32, 92, 87, 0.6);
          outline-offset: 2px;
        }
        
        /* Smooth micro-interactions */
        .contact-input {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .contact-input:hover {
          transform: translateY(-1px);
        }
        
        .contact-input:focus {
          transform: translateY(-2px);
        }
        
        /* Mobile optimizations */
        @media (max-width: 640px) {
          .calendly-inline-widget {
            min-height: 500px !important;
            height: 70vh !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
