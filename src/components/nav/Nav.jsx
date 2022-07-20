import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {AiFillAppstore} from 'react-icons/ai'
import {MdMiscellaneousServices} from 'react-icons/md'
import {AiOutlineMessage} from 'react-icons/ai'
import { useState } from 'react'
const Nav = () => {
  const [activeNav, setactiveNav] = useState('#');
  return (
    <nav>
      <a href="#header" onClick={() =>  setactiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setactiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setactiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#project" onClick={() => setactiveNav('#project')} className={activeNav === '#project' ? 'active' : ''}><AiFillAppstore /></a>
      <a href="#services" onClick={() => setactiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdMiscellaneousServices /></a>
      <a href="#contact" onClick={() => setactiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage /></a>
    </nav>
  )
}

export default Nav