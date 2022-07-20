import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
const contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>E-mail</h4>
            <h4>msid1402@gmail.com</h4>
            <a href="mailto:msid1402@gmail.com" target="_blank">Send a Message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required  />
         <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact