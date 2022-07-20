import React from 'react'
import './project.css'
import IMG1 from '../../assests/projects/project1.jpg'
import IMG2 from '../../assests/projects/project2.png'
import IMG3 from '../../assests/projects/project3.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Game',
    code: 'https://codesandbox.io/s/focused-swirles-9v5j2g?file=/src/App.js',
    demo: 'https://9v5j2g.csb.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'API-Calling',
    code: 'https://codesandbox.io/s/jovial-marco-1712kh?file=/src/styles.css',
    demo: 'https://1712kh.csb.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'To-Do List',
    code: 'https://github.com/Siddhesh1402/todolist/tree/master',
    demo: 'https://github.com/Siddhesh1402/todolist/tree/master'
  }
]
const Project = () => {
  return (
    <section id='project'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container project__container">
        {
          data.map(({id, image, title, code, demo}) => {
            return (
              <article key={id} className='project__item'>
          <div className="project__item-image">
            <img src={image} alt={title} />
          </div> 
          <h3>{title}</h3>
         <div className="project__item-cta">
         <a href={code} className='btn' target='_blank'>Code</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
        </article>
            )
          })
        }

        

      </div>
    </section>
  )
}

export default Project