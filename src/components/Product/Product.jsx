import React from 'react'
import './Product.css'

// importing icons from react-icons
import {GiTechnoHeart} from 'react-icons/gi'

const Product = () => {
  return (
    <div className="product">
      <GiTechnoHeart className='product-logo'/>
      <div className="product-content">
        <div className="product-header">
          <span>Sample</span>
          <span>Text</span>
        </div>
        <div className="product-text">
          <span>Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat. Duis 
            aute irure dolor in reprehenderit in Lorem ipsum,
             dolor sit amet consectetur adipisicing elit. 
             Sed eius ullam quae excepturi sint pariatur eveniet, 
             et consequuntur laboriosam laudantium nihil eligendi natus eos in iusto! 
             Alias vitae veniam nobis.
          </span>
        </div>
      </div>
    </div>
  )
}

export default Product