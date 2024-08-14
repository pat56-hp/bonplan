import React, { useEffect, useState } from 'react'
import ImageGallery from "react-image-gallery";
import { apiUrl } from '../scripts/helper';
import "react-image-gallery/styles/css/image-gallery.css";
import "react-image-gallery/styles/scss/image-gallery.scss"


export default function Gallery({gallery, alt = ''}) {

    const [images, setImages] = useState([])

    useEffect(() => {
        const images = gallery?.map(image => ({
            ...image,
            original: apiUrl() + image.image,
            thumbnail: apiUrl() + image.image,
        }))

        setImages(images)
    }, [gallery])

  return (
    <ImageGallery 
        items={images}
        autoPlay={true}
        loading='lazy'
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
