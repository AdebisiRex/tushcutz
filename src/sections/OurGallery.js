import React from "react";
import classes from "../styles/OurGallery.module.css"
import img1 from "../assets/IMG-1080.JPG";
import img2 from "../assets/IMG-1160.PNG";
import img3 from "../assets/IMG-1167.PNG";
import img4 from "../assets/IMG-1163.PNG";
import img5 from "../assets/IMG-1100.JPG";
import img6 from "../assets/IMG-1096.JPG";
import img7 from "../assets/IMG-1104.JPG";
import img8 from "../assets/IMG-1164.PNG";
import img9 from "../assets/IMG-1159.PNG";
import img10 from "../assets/IMG-1093.JPG";
import img11 from "../assets/IMG-1101.JPG";
import img12 from "../assets/IMG-1083.JPG";
import GalleryImage from "../components/GalleryImage";
const OurGallery = () => {
  return (
    <div id="gallery" className="min-vh-100 pt-2">
      <div className="container p-2">
        <h1 className="font-monospace text-center text-primary py-5">
          Our gallery
        </h1>
        <div className={classes.img_div + "  gap-0 bg-success grid"}>
          <GalleryImage img={img1} />
          <GalleryImage img={img2} />
          <GalleryImage img={img3} />
          <GalleryImage img={img4} />
          
          <GalleryImage img={img5} />
          <GalleryImage img={img6} />
          <GalleryImage img={img7} />
          <GalleryImage img={img8} />

          <GalleryImage img={img9} />
          <GalleryImage img={img10} />
          <GalleryImage img={img11} />
          <GalleryImage img={img12} />
        </div>
      </div>
    </div>
  );
};

export default OurGallery;