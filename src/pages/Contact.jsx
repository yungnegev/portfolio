import React from 'react'
import { motion as m } from 'framer-motion'
import { useRef } from 'react';
import { TypeAnimation } from 'react-type-animation'
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {

  const form = useRef()


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3vrdqof', 'template_snd2jyh', form.current, '3raFiDgCzgIoBR2eW')
      .then((result) => {
          console.log(result.text);
          toast('Sent succesfully.')
      }, (error) => {
          console.log(error.text);
          toast.error('Failed to send.')
      });
  };

  return (
    <m.main
      className="page contact-page"
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
        <div className='page-wrapper'>
          <div className="form-title">
          <TypeAnimation
                sequence={[
                  'Contact me', // Types 'One'
                  1000, // Waits 1s
                  'Contact me...', // Deletes 'One' and types 'Two'
                  2000, // Waits 2s
                ]}
                wrapper="h1"
                cursor={false}
                repeat={Infinity}
              />
          </div>
          <div id="form-wrapper">
            <form ref={form} onSubmit={sendEmail} id='contact-form'>
              <div className="form-field">
                {/* <label>Name</label> */}
                <input type="text" name="user_name" placeholder='Name'/>
              </div>
              <div className="form-field">
                {/* <label>Email</label> */}
                <input type="email" name="user_email" placeholder='Email' />
              </div>
              <div className="form-field">
                {/* <label>Message</label> */}
                <textarea name="message" />
              </div>
              <input type="submit" value="Send" />
            </form>  
          </div>          
        </div>
    </m.main>
  );
}

export default Contact