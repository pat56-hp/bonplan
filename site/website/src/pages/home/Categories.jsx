import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = ({datas}) => {
    const [columns, setColumns] = useState([[], [], []])

    const structuredDatas = () => {
        const newColumns = [[], [], []];
        datas.forEach((item, index) => {
            newColumns[index % 3].push(item);
        });

        setColumns(newColumns)
    }

    useEffect(() => {
        structuredDatas()
    }, [datas])
    
    return (
        <div className="white_bg">
            <div className="container margin_60">
                <div className="row add_bottom_45">
                {columns.map((column, colIndex) => (
                    <div className="col-lg-4 other_tours" key={colIndex}>
                        <ul>
                            {column.map((item) => (
                                <li key={item.id}>
                                    <Link to={`/explorer?category=${item.id}`}>
                                        <i className={item.icon}></i>
                                        {item.libelle}
                                        <span className="other_tours_price">{item.total_entreprise}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                </div>

                <div className="banner colored">
                    <h4>Discover our Top tours <span>from $34</span></h4>
                    <p>
                        Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in.
                    </p>
                    <a href="single_tour.html" className="btn_1 white">Read more</a>
                </div>
            </div>
        </div>
    )
}

export default Categories