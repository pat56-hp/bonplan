import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {weekPlanSlide} from "../scripts/helper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const HomeWeekPlan = () => {
    return (
        <div className="container margin_60">

            <div className="main_title">
                <h2>Les plans de la semaine</h2>
                <p>Profitez des offres exclusives de la semaine</p>
            </div>

            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                autoplay={true}
                breakpoints={weekPlanSlide}
            >
                <SwiperSlide className='item'>
                    <div className="tour_container">
                        <div className="ribbon_3 popular"><span>Popular</span></div>
                        <div className="img_container">
                            <a href="single_tour.html">
                                <img src="img/tour_box_1.jpg" width="800" height="533" className="img-fluid"
                                     alt="image"/>
                                <div className="short_info">
                                    <i className="icon_set_1_icon-44"></i>Historic Buildings<span className="price"><sup>$</sup>39</span>
                                </div>
                            </a>
                        </div>
                        <div className="tour_title">
                            <h3><strong>Arc Triomphe</strong> tour</h3>
                            <div className="rating">
                                <i className="icon-smile voted"></i><i className="icon-smile voted"></i><i
                                className="icon-smile voted"></i><i className="icon-smile voted"></i><i
                                className="icon-smile"></i><small>(75)</small>
                            </div>
                            <div className="wishlist">
                                <a className="tooltip_flip tooltip-effect-1" href="#">+<span
                                    className="tooltip-content-flip"><span
                                    className="tooltip-back">Add to wishlist</span></span></a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='item'>
                    <div className="tour_container">
                        <div className="ribbon_3 popular"><span>Popular</span></div>
                        <div className="img_container">
                            <a href="single_tour.html">
                                <img src="img/tour_box_1.jpg" width="800" height="533" className="img-fluid"
                                     alt="image"/>
                                <div className="short_info">
                                    <i className="icon_set_1_icon-44"></i>Historic Buildings<span className="price"><sup>$</sup>39</span>
                                </div>
                            </a>
                        </div>
                        <div className="tour_title">
                            <h3><strong>Arc Triomphe</strong> tour</h3>
                            <div className="rating">
                                <i className="icon-smile voted"></i><i className="icon-smile voted"></i><i
                                className="icon-smile voted"></i><i className="icon-smile voted"></i><i
                                className="icon-smile"></i><small>(75)</small>
                            </div>
                            <div className="wishlist">
                                <a className="tooltip_flip tooltip-effect-1" href="#">+<span
                                    className="tooltip-content-flip"><span
                                    className="tooltip-back">Add to wishlist</span></span></a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='item'>
                    <div className="tour_container">
                        <div className="ribbon_3 popular"><span>Popular</span></div>
                        <div className="img_container">
                            <a href="single_tour.html">
                                <img src="img/tour_box_1.jpg" width="800" height="533" className="img-fluid"
                                     alt="image"/>
                                <div className="short_info">
                                    <i className="icon_set_1_icon-44"></i>Historic Buildings<span className="price"><sup>$</sup>39</span>
                                </div>
                            </a>
                        </div>
                        <div className="tour_title">
                            <h3><strong>Arc Triomphe</strong> tour</h3>
                            <div className="rating">
                                <i className="icon-smile voted"></i><i className="icon-smile voted"></i><i
                                className="icon-smile voted"></i><i className="icon-smile voted"></i><i
                                className="icon-smile"></i><small>(75)</small>
                            </div>
                            <div className="wishlist">
                                <a className="tooltip_flip tooltip-effect-1" href="#">+<span
                                    className="tooltip-content-flip"><span
                                    className="tooltip-back">Add to wishlist</span></span></a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='item'>
                    <div className="tour_container">
                        <div className="ribbon_3 popular"><span>Popular</span></div>
                        <div className="img_container">
                            <a href="single_tour.html">
                                <img src="img/tour_box_1.jpg" width="800" height="533" className="img-fluid"
                                     alt="image"/>
                                <div className="short_info">
                                    <i className="icon_set_1_icon-44"></i>Historic Buildings<span className="price"><sup>$</sup>39</span>
                                </div>
                            </a>
                        </div>
                        <div className="tour_title">
                            <h3><strong>Arc Triomphe</strong> tour</h3>
                            <div className="rating">
                                <i className="icon-smile voted"></i><i className="icon-smile voted"></i><i
                                className="icon-smile voted"></i><i className="icon-smile voted"></i><i
                                className="icon-smile"></i><small>(75)</small>
                            </div>
                            <div className="wishlist">
                                <a className="tooltip_flip tooltip-effect-1" href="#">+<span
                                    className="tooltip-content-flip"><span
                                    className="tooltip-back">Add to wishlist</span></span></a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='item'>
                    <div className="tour_container">
                        <div className="ribbon_3 popular"><span>Popular</span></div>
                        <div className="img_container">
                            <a href="single_tour.html">
                                <img src="img/tour_box_1.jpg" width="800" height="533" className="img-fluid"
                                     alt="image"/>
                                <div className="short_info">
                                    <i className="icon_set_1_icon-44"></i>Historic Buildings<span className="price"><sup>$</sup>39</span>
                                </div>
                            </a>
                        </div>
                        <div className="tour_title">
                            <h3><strong>Arc Triomphe</strong> tour</h3>
                            <div className="rating">
                                <i className="icon-smile voted"></i><i className="icon-smile voted"></i><i
                                className="icon-smile voted"></i><i className="icon-smile voted"></i><i
                                className="icon-smile"></i><small>(75)</small>
                            </div>
                            <div className="wishlist">
                                <a className="tooltip_flip tooltip-effect-1" href="#">+<span
                                    className="tooltip-content-flip"><span
                                    className="tooltip-back">Add to wishlist</span></span></a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <p className="text-center add_bottom_30">
                <a href="#" className="btn_1">Voir plus</a>
            </p>
        </div>
    )
}

export default HomeWeekPlan