import React from 'react';
import './Navbar.css';


// Importing icons from react-icons library
import {AiFillInstagram} from 'react-icons/ai';
import {AiOutlineFacebook} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';
import {BsFillEmojiSmileFill} from 'react-icons/bs';

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <BsFillEmojiSmileFill className='n-logo'/>
        <b></b> 
        <div className="nav-links">
          <AiFillGithub/>
          <AiOutlineFacebook/>
          <AiFillInstagram/>
        </div>
        <b></b>
      </div>
    </div>
  )
}

export default Navbar