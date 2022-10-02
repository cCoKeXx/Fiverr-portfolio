import React from 'react'
import Form from '../Form/Form'
import './Footer.css'

//importing footer link images
import {AiFillInstagram} from 'react-icons/ai';
import {AiOutlineFacebook} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';




const Footer = () => {
  return (
    <div className="footer">
        <div className="f-left">
            <span style={{marginRight:"auto"}}>CONTACT ME</span>
            <span>SAMPLE TEXT</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa consequuntur at ullam nesciunt. Non accusantium ratione amet sequi ad corrupti, mollitia itaque tempora iusto nisi consequuntur sit? Velit, adipisci doloribus!
                
            </span>
            <div className="line">
              <b></b>
              <div className="footer-links">
                <AiFillGithub/>
                <AiOutlineFacebook/>
                <AiFillInstagram/>
              </div>
              <b></b>
            </div>
        </div>
        <div className="f-right">
            <Form/> 
        </div>
    </div>
  )
}

export default Footer