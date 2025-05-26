import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^\S+@\S+\.\S+$/;
    return re.test(email);
  };

  // Real-time validation on change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let fieldError;

    if (name === 'email') {
      if (!value.trim()) fieldError = 'Email is required';
      else if (!validateEmail(value)) fieldError = 'Please enter a valid email address';
    } else {
      if (!value.trim()) fieldError = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }

    setErrors((prev) => {
      const newErrors = { ...prev };
      if (fieldError) newErrors[name] = fieldError;
      else delete newErrors[name];
      return newErrors;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const message = formData.get('message').trim();

    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    else if (!validateEmail(email)) newErrors.email = 'Please enter a valid email address';
    if (!message) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    try {
      const response = await fetch('https://formspree.io/f/mrbqwrvq', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setStatus('SUCCESS');
        form.reset();
      } else {
        setStatus('ERROR');
      }
    } catch {
      setStatus('ERROR');
    }
  };

  return (
    <section className="w-full min-h-screen bg-black text-white py-16 px-6 sm:px-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-semibold mb-4">Get in Touch</h1>
        <p className="text-lg mb-8">We’d love to hear about your project. Let’s create something extraordinary together.</p>

        {status === 'SUCCESS' ? (
          <p className="text-green-400 text-center text-xl mb-8">Thank you! Your message has been sent.</p>
        ) : (
          <form noValidate onSubmit={handleSubmit} className="space-y-8">
            <input type="hidden" name="_subject" value="Nouveau message depuis le site Prestige Production" />

            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                onChange={handleInputChange}
                className={`w-full bg-transparent border-b focus:outline-none py-2 text-base transition-all ${
                  errors.name
                    ? 'border-red-500 ring-1 ring-red-500 ring-opacity-50'
                    : 'border-gray-600 focus:border-white'
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-sm italic text-red-500">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                onChange={handleInputChange}
                className={`w-full bg-transparent border-b focus:outline-none py-2 text-base transition-all ${
                  errors.email
                    ? 'border-red-500 ring-1 ring-red-500 ring-opacity-50'
                    : 'border-gray-600 focus:border-white'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm italic text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell us about your project..."
                onChange={handleInputChange}
                className={`w-full bg-transparent border-b focus:outline-none py-2 text-base resize-none transition-all ${
                  errors.message
                    ? 'border-red-500 ring-1 ring-red-500 ring-opacity-50'
                    : 'border-gray-600 focus:border-white'
                }`}
              />
              {errors.message && (
                <p className="mt-1 text-sm italic text-red-500">{errors.message}</p>
              )}
            </div>

            {status === 'ERROR' && (
              <p className="text-red-500 text-sm text-center">Oops! There was a problem submitting your form.</p>
            )}

            <button
              type="submit"
              className="mt-4 w-full inline-block px-8 py-3 text-base font-medium bg-white text-black rounded-full hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        )}

        <div className="mt-16 border-t border-gray-700 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-sm">Email: <a href="mailto:info@prestigeproduction.ch" className="underline">info@prestigeproduction.ch</a></p>
            <p className="text-sm mt-2">Phone: <a href="tel:+41762021959" className="underline">+41 76 202 19 59</a></p>
          </div>
          <a
            href="https://wa.me/41762021959"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-green-500 text-white font-medium rounded-full hover:opacity-90 transition-opacity"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
