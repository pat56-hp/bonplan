import React from 'react'

export default function PlanRaiting({notes}) {
  return (
    <ul className='rating_comment'>
        {
            Object.keys(notes).reverse().map((key, index) => {
                const filledStars = parseInt(key)
                const emptyStars = 5 - filledStars;
                return (
                    <li key={index}>
                        <span className="rating">
                            {
                                Array.from({length: filledStars}).map((_, i) => (
                                    <i key={i} className="icon_set_1_icon-81 voted"></i>
                                ))
                            }
                            {
                                //empty > 0 &&
                                Array.from({length: emptyStars}).map((_, j) => (
                                    <i key={j + filledStars} className="icon_set_1_icon-81"></i>
                                ))
                            }
                        </span> ({notes[key]})
                    </li>
                )
            })
        }
    </ul>
  )
}
