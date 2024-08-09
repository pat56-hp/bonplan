import React from 'react'

export default function RatingFilter() {
  return (
    <div className="filter_type">
        <h6>Par étoiles</h6>
        <ul>
            <li>
                <label className="container_check">
                    <span className="rating">
                        <i className="icon_set_1_icon-81 voted"></i>
                        <i className="icon_set_1_icon-81 voted"></i>
                        <i className="icon_set_1_icon-81 voted"></i>
                        <i className="icon_set_1_icon-81 voted"></i>
                        <i className="icon_set_1_icon-81 voted"></i>
                    </span>(15)
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
            </li>
            <li>
                <label className="container_check">
                    <span className="rating">
                        <i className="icon_set_1_icon-81 voted"></i>
                        <i className="icon_set_1_icon-81 voted"></i>
                        <i className="icon_set_1_icon-81 voted"></i>
                        <i className="icon_set_1_icon-81 voted"></i>
                        <i className="icon_set_1_icon-81"></i>
                    </span>(10)
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
            </li>
            <li>
                <label className="container_check">
                    <span className="rating">
                        <i className="icon_set_1_icon-81 voted"></i>
                        <i className="icon_set_1_icon-81 voted"></i>
                        <i className="icon_set_1_icon-81 voted"></i>
                        <i className="icon_set_1_icon-81"></i>
                        <i className="icon_set_1_icon-81"></i>
                    </span>(22)
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                </label>
            </li>
            <li>
                <label className="container_check">
                    <span className="rating">
                        <i className="icon_set_1_icon-81 voted"></i>
                        <i className="icon_set_1_icon-81 voted"></i>
                        <i className="icon_set_1_icon-81"></i>
                        <i className="icon_set_1_icon-81"></i>
                        <i className="icon_set_1_icon-81"></i>
                    </span>(08)
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
            </li>
            <li>
                <label className="container_check">
                    <span className="rating">
                        <i className="icon_set_1_icon-81 voted"></i>
                        <i className="icon_set_1_icon-81"></i>
                        <i className="icon_set_1_icon-81"></i>
                        <i className="icon_set_1_icon-81"></i>
                        <i className="icon_set_1_icon-81"></i>
                    </span>(08)
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                </label>
            </li>
        </ul>
    </div>
  )
}
