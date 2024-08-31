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
                    <h4>Plans de divertissement</h4>
                    <p>
                        Découvrez une sélection des meilleurs plans de divertissement à proximité. Trouvez l'option idéale pour vous divertir, sans avoir besoin de vous déplacer.
                    </p>                
                    <Link to="/explorer" className="btn_1 white">Explorer</Link>
                </div>
            </div>
        </div>
    )
}

export default Categories