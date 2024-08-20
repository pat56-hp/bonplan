import React, { useEffect, useState } from 'react'
import ImageGallery from "react-image-gallery";
import { apiUrl } from '../scripts/helper';
import "react-image-gallery/styles/css/image-gallery.css";
import "react-image-gallery/styles/scss/image-gallery.scss"


export default function Gallery({image, gallery, alt = ''}) {

    const [images, setImages] = useState([
      {
        original: apiUrl() + image,
        thumbnail: apiUrl() + image
      }
    ])

    useEffect(() => {
      if (gallery && gallery.length > 0) {
          const newImages = gallery?.map(image => ({
              original: apiUrl() + image.image,
              thumbnail: apiUrl() + image.image,
          }))

          setImages(prev => {
            const existingUrls = prev.map(img => img.original);
            const filteredNewImages = newImages.filter(img => !existingUrls.includes(img.original));
            return [...prev, ...filteredNewImages];
          });
      }

      
    }, [gallery])

  return (
    <ImageGallery 
        items={images}
        autoPlay={true}
        loading='lazy'
        showNav={false}
        showPlayButton={false}
        originalClass='gallery_image'
        thumbnailClass='gallery_thumbnail'
        slideInterval={5000}
        slideDuration={1000}
        thumbnailAlt= {alt + '-thumbnail'}
        originalAlt={alt}
        originalTitle={alt}
        thumbnailTitle={alt}
    />
  )
}
