import React, { useEffect, useState } from 'react'

export default function Commodite({commodites}) {
    const [items, setItems] = useState([])

    useEffect(() =>{
        setItems(commodites)
    }, [commodites])
  return (
        items.length > 0 &&
        <div id="single_tour_feat">
            <ul>
            {
                items.map((commodite, key) => (
                    <li key={key}><i className={commodite.icon}></i>{commodite.libelle}</li>
                ))
            }
            </ul>
        </div>    
  )
}
