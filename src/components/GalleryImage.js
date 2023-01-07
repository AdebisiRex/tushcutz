import React from 'react'
import classes from "../styles/OurGallery.module.css"

const GalleryImage = ({img, st_class}) => {
  return (
    <div className={`${classes.image} ${st_class} g-col-6 g-col-md-6  g-col-xl-4`}>
        <img loading='lazy' src={img} alt="" />
    </div>
  )
}

export default GalleryImage