import React, { useState } from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {weekPlanSlide} from "../../scripts/helper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import PlanItem from "../bonplans/PlanItem";

const HomeWeekPlan = ({datas}) => {
    
    return (
        <>
        {
            datas && 
            (
                <div className="container margin_60">

                <div className="main_title">
                    <h2>Les plans de la semaine</h2>
                    <p>Profitez des offres exclusives de la semaine</p>
                </div>

                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    autoplay={true}
                    breakpoints={weekPlanSlide}
                >
                    {
                        datas.map((bonplan, i) => (
                            <SwiperSlide className='item' key={i}>
                                <PlanItem 
                                    bonplan = {bonplan}
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            )
        }
        </>
        
    )
}

export default HomeWeekPlan