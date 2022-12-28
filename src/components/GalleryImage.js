import React from 'react'
import classes from "../styles/OurGallery.module.css"

const GalleryImage = ({img}) => {
  return (
    <div className={classes.image + ' g-col-6 g-col-md-4 g-col-lg-3'}>
        <img loading='lazy' src={img} alt="" />
    </div>
  )
}

export default GalleryImage