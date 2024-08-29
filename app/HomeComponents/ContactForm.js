'use client'
import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { IoSend } from 'react-icons/io5';
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    message: '',
  });

  useEffect(() => {
    // Replace 'YOUR_PUBLIC_KEY' with the actual Public Key from your EmailJS account
    emailjs.init('ADEpi7IjLDhScCi10');
  }, []); // The empty array ensures this effect runs only once

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setFormStatus({ submitting: false, message: 'Please enter a valid email.' });
      return;
    }

    setFormStatus({ submitting: true, message: '' });

    // emailjs.sendForm('service_blkcc7b', 'template_pserjkx', e.target, 'ADEpi7IjLDhScCi10')
    //   .then((result) => {
    //       setFormData({
    //         name: '',
    //         email: '',
    //         message: '',
    //       }); // Reset form fields
    //       setFormStatus({ submitting: false, message: 'Your message was sent successfully!' });
    //   }, (error) => {
    //       setFormStatus({ submitting: false, message: 'Failed to send your message. Please try again later.' });
    //   });
  };

  return (
  <div className='bg-white p-4 rounded-lg border'>
    <form className='contact-form flex flex-col items-start' onSubmit={handleSubmit}>
        <input
          className='w-full text-white font-primary  mb-1 p-3  rounded border border-1 text-sm'
          placeholder='Your Name'
          aria-label="Name"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className='w-full text-white font-primary  p-3 mb-1 rounded border border-1 text-sm'
          placeholder='Your Email'
          aria-label="Email"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          className=' w-full mb-5  font-primary  p-3  rounded min-h-[150px] border border-1 text-sm'
          id="message"
          name="message"
          placeholder='Your Message'
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button
          className=' bg- p-3 rounded bg-primary text-white font-primary flex space-x-2 items-center font-bold text-sm tracking-wider shadow-lg active:shadow-md active:translate-y-[2px] transition ease-in-out'
          disabled={formStatus.submitting}
        >
          {formStatus.submitting ? (
            <p className='text-[17px] font-medium'>Sending...</p>
          ) : (
            <>
              <p className=' font-semibold uppercase cursor-pointer text-white text-sm'>Submit</p>
            
            </>
          )}
          <IoSend size={16}/>

        </button>
        {formStatus.message && (
          <div className="form-status-message text-[17px] italic">
            {formStatus.message}
            </div>
        )}
    </form>
  </div>
    
  );
}

export default ContactForm;
