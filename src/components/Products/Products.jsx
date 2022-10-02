import React from 'react'
import './Products.css'

import Product from '../Product/Product'


//importing swiper
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'
//importing pagination from swiper (dots bellow product)
import {Pagination} from 'swiper'
import "swiper/css/pagination";

//importing navigation from swiper (two arrows)
import { Navigation } from "swiper";
import "swiper/css/navigation";


const Products = () => {
  return (
    <div className="products">
      <div className="p-content">
        <span>PRODUCTS</span>
        <span>This is a sample text</span>
      </div>
      <Swiper
        grabCursor ={true}
        modules={[Pagination,Navigation]}
        navigation={
          true
        }
        pagination={{
          dynamicBullets: false,
          clickable: true
        }}
        slidesPerView={1}
        spaceBetween={10}
        className="swiper-container"
      >
        <SwiperSlide><Product/></SwiperSlide>
        <SwiperSlide><Product/></SwiperSlide>
        <SwiperSlide><Product/></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Products