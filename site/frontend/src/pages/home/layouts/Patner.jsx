import React from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import { partnerSlide } from '../../../helpers/helper'

export default function Partner() {
  return (
    <section className="brand-section">
        <img className="img-fluid item-4" src="assets/images/svg/item4.svg" alt="item-4" />
        <div className="container">
            <div className="title">
                <h2>Ils nous font confiance</h2>
                <div className="loader-line"></div>
                <div className="sub-title">
                    <p>
                        Rejoignez notre communauté et passez de bons moment inoubliables
                    </p>
                </div>
            </div>
            <div className="theme-arrow">
                <div className="swiper brands-logo">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={8}
                        autoplay={true}
                        pagination={true}
                        breakpoints={partnerSlide}
                        className='swiper-wrapper'
                        >
                            <SwiperSlide className='swiper-slide'>
                                <div className="brand-box">
                                    <a href="menu-listing.html" className="food-brands">
                                        <img className="img-fluid brand-img" src="assets/images/icons/brand1.png" alt="brand1" />
                                    </a>
                                    <a href="menu-listing.html">
                                        <h4>La Pino’z</h4>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='swiper-slide'>
                                <div className="brand-box">
                                    <a href="menu-listing.html" className="food-brands">
                                        <img className="img-fluid brand-img" src="assets/images/icons/brand2.png" alt="brand2" />
                                    </a>
                                    <a href="menu-listing.html">
                                        <h4>Mc'd</h4>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='swiper-slide'>
                                <div className="brand-box">
                                    <a href="menu-listing.html" className="food-brands">
                                        <img className="img-fluid brand-img" src="assets/images/icons/brand3.png" alt="brand3" />
                                    </a>
                                    <a href="menu-listing.html">
                                        <h4>Starbucks</h4>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='swiper-slide'>
                                <div className="brand-box">
                                    <a href="menu-listing.html" className="food-brands">
                                        <img className="img-fluid brand-img" src="assets/images/icons/brand4.png" alt="brand2" />
                                    </a>
                                    <a href="menu-listing.html">
                                        <h4>Pizza Hut</h4>
                                    </a>
                                </div>  
                            </SwiperSlide>
                            <SwiperSlide className='swiper-slide'>
                                <div className="brand-box">
                                    <a href="menu-listing.html" className="food-brands">
                                        <img className="img-fluid brand-img" src="assets/images/icons/brand5.png" alt="brand2" />
                                    </a>
                                    <a href="menu-listing.html">
                                        <h4>Wendy's</h4>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='swiper-slide'>
                                <div className="brand-box">
                                    <a href="menu-listing.html" className="food-brands">
                                        <img className="img-fluid brand-img" src="assets/images/icons/brand6.png" alt="brand6" />
                                    </a>
                                    <a href="menu-listing.html">
                                        <h4>Burger King</h4>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='swiper-slide'>
                                <div className="brand-box">
                                    <a href="menu-listing.html" className="food-brands">
                                        <img className="img-fluid brand-img" src="assets/images/icons/brand7.png" alt="brand7" />
                                    </a>
                                    <a href="menu-listing.html">
                                        <h4>Subway</h4>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='swiper-slide'>
                                <div className="brand-box">
                                    <a href="menu-listing.html" className="food-brands">
                                        <img className="img-fluid brand-img" src="assets/images/icons/brand8.png" alt="brand8"/>
                                    </a>
                                    <a href="menu-listing.html">
                                        <h4>Domino's</h4>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='swiper-slide'>
                                <div className="brand-box">
                                    <a href="menu-listing.html" className="food-brands">
                                        <img className="img-fluid brand-img" src="assets/images/icons/brand9.png" alt="brand9"/>
                                    </a>
                                    <a href="menu-listing.html">
                                        <h4>Taco Bell</h4>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='swiper-slide'>
                                <div className="brand-box">
                                    <a href="menu-listing.html" className="food-brands">
                                        <img className="img-fluid brand-img" src="assets/images/icons/brand10.png" alt="brand5"/>
                                    </a>
                                    <a href="menu-listing.html">
                                        <h4>Chipotle</h4>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='swiper-slide'>
                                <div className="brand-box">
                                    <a href="menu-listing.html" className="food-brands">
                                        <img className="img-fluid brand-img" src="assets/images/icons/brand11.png"
                                            alt="brand11"/>
                                    </a>
                                    <a href="menu-listing.html">
                                        <h4>KFC</h4>
                                    </a>
                                </div>
                            </SwiperSlide>
                    </Swiper>
                    
                </div>
            </div>
        </div>
    </section>
  )
}
