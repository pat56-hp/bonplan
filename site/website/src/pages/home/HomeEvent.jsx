import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiUrl, getDate, slug } from "../../scripts/helper";

const HomeEvent = ({datas}) => {

    return (
        <>
            {
                datas.length > 0 &&
                <div className="white_bg">
                    <div className="container margin_60">
                        <div className="row small-gutters categories_grid">
                            {
                                datas[0] &&
                                <div className="col-sm-12 col-md-6">
                                    <Link to={`/evenements/${slug(datas[0].id + '-' + datas[0].titre)}`} className="first_data">
                                        <img src={apiUrl() + datas[0].image} alt={datas[0].titre} className="img-fluid"/>
                                        <div className="wrapper">
                                            <h2>{datas[0].titre}</h2>
                                            <p><i className={datas[0].category_icon}></i>{datas[0].category}</p>
                                        </div>
                                    </Link>
                                </div>

                            }
                            <div className="col-sm-12 col-md-6">
                                <div className="row small-gutters mt-md-0 mt-sm-2">
                                    {
                                        datas[1] &&
                                        <div className="col-sm-6">
                                            <Link to={`/evenements/${slug(datas[1].id + '-' + datas[1].titre)}`} className="second_data">
                                                <img src={apiUrl() + datas[1].image} alt={datas[1].titre} className="img-fluid"/>
                                                <div className="wrapper">
                                                    <h2>{datas[1].titre}</h2>
                                                    <p><i className={datas[1].category_icon}></i>{datas[1].category}</p>
                                                </div>
                                            </Link>
                                        </div>

                                    }
                                    {
                                        datas[2] &&
                                        <div className="col-sm-6">
                                            <Link to={`/evenements/${slug(datas[2].id + '-' + datas[2].titre)}`} className="second_data">
                                                <img src={apiUrl() + datas[2].image} alt={datas[2].titre} className="img-fluid"/>
                                                <div className="wrapper">
                                                    <h2>{datas[2].titre}</h2>
                                                    <p><i className={datas[2].category_icon}></i>{datas[2].category}</p>
                                                </div>
                                            </Link>
                                        </div>
                                    }
                                    {
                                        datas[3] &&
                                        <div className="col-sm-12 mt-sm-2">
                                            <Link to={`/evenements/${slug(datas[3].id + '-' + datas[3].titre)}`} className="last_data">
                                                <img src={apiUrl() + datas[3].image} alt={datas[3].titre} className="img-fluid"/>
                                                <div className="wrapper">
                                                    <h2>{datas[3].titre}</h2>
                                                    <p><i className={datas[3].category_icon}></i>{datas[3].category}</p>
                                                </div>
                                            </Link>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default HomeEvent