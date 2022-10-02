import React from 'react'
import './Form.css'


//importing form background images
import box from '../../assets/images/Footer shape 1.png';
import dots from '../../assets/images/Footer shape 2.png'

const Form = () => {
  return (
    
        <form>
            <span>Contact me</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate distinctio corrupti numquam non accusamus quo officia
              </span> 
            <input type="email" name="User_email" placeholder='E-mail'/>
            <input type="text" name="Title" placeholder='Title'/>
            <input type="text" name="Text"  placeholder='Text'/>
            <input type="submit" className='button f-button' />
            <img src={box} alt="" className='box-decor'/>
            <img src={dots} alt="" className='dots-decor'/>
        </form>

  )
}

export default Form