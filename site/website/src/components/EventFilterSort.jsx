import React from "react";

export default function EventFilterSort (){
    return (
        <div className="items-sorting">
            <div className="row">
                <div className="col-6">
                    <div className="results_shop">
                        Showing 1–9 of 15 results
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group">
                        <select name="sort-by">
                            <option>Sorting by</option>
                            <option>Order</option>
                            <option>Price</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}