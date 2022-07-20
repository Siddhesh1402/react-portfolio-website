import React from 'react'
import './about.css'
import ME from '../../assests/me-about.png'
import {FaAward} from 'react-icons/fa'
import {AiFillAppstore} from 'react-icons/ai'
const about = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image"></div>
            <img src={ME} alt="About" />
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
                  <FaAward className='about__icon'/>
                  <h4>Experience</h4>
                  <small>2+ Years Working</small>
            </article>

            <article className='about__card'>
                  <AiFillAppstore className='about__icon'/>
                  <h4>Projects</h4>
                  <small>3</small>
            </article>

          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, ipsam facere rem cumque placeat consectetur repudiandae sapiente, officiis dolores enim quisquam error harum architecto, laboriosam eveniet. Rem consequuntur fugiat impedit.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about