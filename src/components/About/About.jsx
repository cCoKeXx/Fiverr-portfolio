import React from 'react'
import './About.css'


//importing icons from react-icons
import {GiMiningHelmet} from 'react-icons/gi'

const About = () => {
  return (
    <div className="about">
        <div className="a-left">
            <span>SAMPLE TEXT</span>
            <span>Sample Subtitle Text</span>
            <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Cupiditate, tempora ratione maxime, quasi magni, corporis illo 
            officiis facere quas inventore sint! Recusandae similique illum 
            consequatur sit blanditiis repellat error ad?
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Harum, optio, hic atque 
            perferendis quaerat provident esse amet 
            ullam odit exercitationem facere dignissimos
             voluptatibus. Tempora consectetur sit quod 
             dolores inventore reiciendis?
            </span>
        </div>
        <div className="a-right">
            <GiMiningHelmet className='a-logo'/>
        </div>
    </div>
  )
}

export default About