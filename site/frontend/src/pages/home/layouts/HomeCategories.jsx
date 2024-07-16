import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { categorySlide } from '../../../helpers/helper';


export default function HomeCategories() {
    const slides = Array.from({ length: 20 }, (_, i) => (
        <SwiperSlide key={i} className='swiper-slide'>
          <a href="restaurant-listing.html" className="food-categories">
            <img className="img-fluid categories-img" src="/assets/images/product/p-1.png" alt="p-1" />
            <h4 className="dark-text">Pizza</h4>
          </a>
        </SwiperSlide>
      ));

  return (
    <div className="categories-section">
        <div className="container">
            <div className="position-relative category-top">
                <div className="swiper categories-no-arrow categories-style">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={8}
                    autoplay={true}
                    breakpoints={categorySlide}
                    className='swiper-wrapper'
                    >
                        { slides }
                </Swiper>
                </div>
            </div>
        </div>
    </div>
  )
}
