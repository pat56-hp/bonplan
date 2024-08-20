import React from 'react'

export default function Rating({note = 0}) {

  const filledStars = parseInt(note)
  const emptyStars = 5 - filledStars

  return (
    <div className="rating mt-2">
      {
        <>
          {
            Array.from({length: filledStars}).map((_, i) => (
              <i key={i} className="icon_set_1_icon-81 voted"></i>
            ))
          }

          {
            Array.from({length: emptyStars}).map((_, j) => (
              <i key={j} className="icon_set_1_icon-81"></i>
            ))
          }
        </>
      }
    </div>
  )
}
