import React from "react";

import OurTeamCard from "../components/OurTeamCard";

const OurTeam = () => {
  return (
    <div id="our-team" className="min-vh-100  bg-primary pt-2 pb-5 bg-opacity-50" >
      <div className="container p-1">
        
        <h1 className="font-monospace text-center text-primary py-5">Our Team </h1>
        <div className="row g-4">
           <OurTeamCard/>
           <OurTeamCard/>
           <OurTeamCard/>
           <OurTeamCard/>
       

        </div>
      </div>
    </div>
  );
};

export default OurTeam;
