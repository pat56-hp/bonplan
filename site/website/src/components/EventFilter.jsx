import React from "react";
import EventRelated from "./EventRelated";

export default function EventFilter () {
    return (
        <aside className="sidebar">
            <div className="widget">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Rechercher..." />
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button" style={{ marginLeft:0 }}>
                            <i className="icon-search"></i>
                        </button>
                    </span>
                </div>
            </div>
            <hr />
            <div className="widget" id="cat_shop">
                <h4>Categories</h4>
                <ul>
                    <li><a href="#">Places to visit</a>
                    </li>
                    <li><a href="#">Top tours</a>
                    </li>
                    <li><a href="#">Tips for travellers</a>
                    </li>
                    <li><a href="#">Events</a>
                    </li>
                </ul>
            </div>
            <hr/>
            <div className="widget">
                <h4>Filter</h4>
                <input type="text" id="range" name="range" value="" />
            </div>
            <hr/>

            <EventRelated />
        </aside>
    )
}