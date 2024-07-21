import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {weekPlanSlide} from "../scripts/helper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import PlanItem from "./PlanItem";

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
                {
                    Array.from({length:5}, (_, i) => (
                        <SwiperSlide className='item' key={i}>
                            <PlanItem key={i}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <p className="text-center add_bottom_30">
                <a href="#" className="btn_1">Voir plus</a>
            </p>
        </div>
    )
}

export default HomeWeekPlan