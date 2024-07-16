import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { weekPlanSlide } from '../../helpers/helper'

export default function WeekPlan() {
  return (
    <section className="section-b-space">
        <div className="container">
            <div className="title">
                <h2>Les plans de la semaine</h2>
                <div className="loader-line"></div>
                <div className="sub-title">
                    <p>Profitez des offres exclusives de la semaine</p>
                </div>
            </div>
            <div className="position-relative">
                
                <div className="swiper banner1-slider">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={5}
                        autoplay={true}
                        pagination={true}
                        breakpoints={weekPlanSlide}
                        className='swiper-wrapper'
                    >
                        <SwiperSlide className='swiper-slide'>
                            <div className="banner-part">
                                <a href="offer.html">
                                    <img className="img-fluid banner-img" src="/assets/images/banner/banner1.jpg"
                                        alt="banner" />
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='swiper-slide'>
                            <div className="swiper-slide">
                                <div className="banner-part">
                                    <a href="offer.html">
                                        <img className="img-fluid banner-img" src="/assets/images/banner/banner2.jpg"
                                            alt="banner" />
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='swiper-slide'>
                            <div className="swiper-slide">
                                <div className="banner-part">
                                    <a href="offer.html">
                                        <img className="img-fluid banner-img" src="/assets/images/banner/banner3.jpg"
                                            alt="banner" />
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='swiper-slide'>
                            <div className="swiper-slide">
                                <div className="banner-part">
                                    <a href="offer.html">
                                        <img className="img-fluid banner-img" src="/assets/images/banner/banner4.jpg"
                                            alt="banner" />
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='swiper-slide'>
                            <div className="swiper-slide">
                                <div className="banner-part">
                                    <a href="offer.html">
                                        <img className="img-fluid banner-img" src="/assets/images/banner/banner4.jpg"
                                            alt="banner" />
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='swiper-slide'>
                            <div className="swiper-slide">
                                <div className="banner-part">
                                    <a href="offer.html">
                                        <img className="img-fluid banner-img" src="/assets/images/banner/banner5.jpg"
                                            alt="banner" />
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    </section>
  )
}
