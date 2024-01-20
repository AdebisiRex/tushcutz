import React from "react";
import image1 from "../assets/IMG-1095.JPG"
import line from "../assets/line.png";
import classes from "../styles/BlobGallery.module.css"
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
        <div className='row'>
          <div className='col-12 col-sm-6 col-md-4 col-lg-3 px-4 d-flex justify-content-center'>
            <div className={`${classes.blob1} ${classes.blobs}`}></div>
          </div>
          <div className='col-12 col-sm-6 col-md-4 col-lg-3 px-4 d-flex justify-content-center'>
            <div className={`${classes.blob2} ${classes.blobs}`}></div>
          </div>
          <div className='col-12 col-sm-6 col-md-4 col-lg-3 px-4 d-flex justify-content-center'>
            <div className={`${classes.blob3} ${classes.blobs}`}></div>
          </div>
          <div className='col-12 col-sm-6 col-md-4 col-lg-3 px-4 d-flex justify-content-center'>
            <div className={`${classes.blob4} ${classes.blobs}`}></div>
          </div>
          <div className='d-none d-md-block col-12 col-sm-6 col-md-4 col-lg-3 px-4 d-flex justify-content-center'>
            <div className={`${classes.blob5} ${classes.blobs}`}></div>
          </div>
          <div className='d-none d-md-block col-12 col-sm-6 col-md-4 col-lg-3 px-4 d-flex justify-content-center'>
            <div className={`${classes.blob6} ${classes.blobs}`}></div>
          </div>
          <div className='d-none d-md-block col-12 col-sm-6 col-md-4 col-lg-3 px-4 d-flex justify-content-center'>
            <div className={`${classes.blob7} ${classes.blobs}`}></div>
          </div>
          <div className='d-none d-md-block col-12 col-sm-6 col-md-4 col-lg-3 px-4 d-flex justify-content-center'>
            <div className={`${classes.blob8} ${classes.blobs}`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlobGallery;
