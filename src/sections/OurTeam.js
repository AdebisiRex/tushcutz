import React from "react";
import tushie from "../assets/tushie.png"
import mera from "../assets/mera.png"
import k9 from "../assets/k9.png"

import OurTeamCard from "../components/OurTeamCard";

const OurTeam = () => {
  return (
    <div id="our-team" className="min-vh-100  bg-primary pt-2 pb-5 bg-opacity-50" >
      <div className="container">
        
        <h1 className="font-monospace text-center text-primary py-5">Our Team </h1>
        <div className="row gy-4 g-md-4">
           <OurTeamCard name="Tushie" photo={tushie} instagramLink={"https://instagram.com/tushiemane?igshid=YmMyMTA2M2Y="} tiktokLink={"https://www.tiktok.com/@tushiemane?_t=8Yc06momeYk&_r=1"}/>
           <OurTeamCard name="Mera The Barber" photo={mera} instagramLink={"https://instagram.com/mera_the_barber_?igshid=YmMyMTA2M2Y="} tiktokLink={"https://www.tiktok.com/@mera_the_barber00?_t=8YJcDK9u0J4&_r=1"}/>
           <OurTeamCard name="K9 CUT" photo={k9} instagramLink={"https://www.instagram.com/invites/contact/?i=5hwkscuoea9w&utm_content=pe2l1h9"} tiktokLink={"https://vm.tiktok.com/ZTRqejry9/"}/>
           
       

        </div>
      </div>
    </div>
  );
};

export default OurTeam;
