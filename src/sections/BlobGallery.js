import React from "react";
import image1 from "../assets/IMG-1095.JPG";
import line from "../assets/line.png";
import classes from "../styles/BlobGallery.module.css";
import pic from "../assets/photo_4.jpg";
const BlobGallery = () => {
  return (
    <section
      id='gallery'
      className={"bg-secondary bg-opacity-75 p-2 py-5 " + classes.section}
    >
      <div className='container p-2 text-center '>
        <div className='mb-5'>
          <h3 className='text-white m-0'>Our Gallery</h3>
          <img src={line} height={3} alt='' className='p-0 m-0 me-2' />
        </div>
        <div className={classes.grid}>
          <div className=''>
            <div className={`${classes.blob1} ${classes.blobs}`}></div>
          </div>
          <div className=''>
            <div className={`${classes.blob4} ${classes.blobs}`}></div>
          </div>
          <div className=''>
            <div className={`${classes.blob3} ${classes.blobs}`}></div>
          </div>
          <div className=''>
            <div className={`${classes.blob8} ${classes.blobs}`}></div>
          </div>
          <div className=''>
            <div className={`${classes.blob2} ${classes.blobs}`}></div>
          </div>
          <div className=''>
            <div className={`${classes.blob6} ${classes.blobs}`}></div>
          </div>
          <div className=''>
            <div className={`${classes.blob7} ${classes.blobs}`}></div>
          </div>
          <div className=''>
            <div className={`${classes.blob5} ${classes.blobs}`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlobGallery;
