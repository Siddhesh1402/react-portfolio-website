import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assests/Me.png'
import HeaderSocials  from './HeaderSocials'

const Header = () => {
  return (
    <section id='header'>
      <div className=".container header_container">
        <h5>Hello I'm</h5>
        <h1>Siddhesh More</h1>
        <h5 className="text-light">
          Web Developer
          </h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
              <img src={ME} alt="Me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </section>
  )
}

export default Header