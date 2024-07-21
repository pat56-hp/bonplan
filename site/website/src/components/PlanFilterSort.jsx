import React from "react";

export default function PlanFilterSort(){
    return (
        <div id="tools">
            <div className="row justify-content-between">
                <div className="col-md-3 col-sm-4">
                    <div className="styled-select-filters">
                        <select name="sort_price" id="sort_price">
                            <option value="" selected>Sort by price</option>
                            <option value="lower">Lowest price</option>
                            <option value="higher">Highest price</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}