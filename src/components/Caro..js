import React from "react";

const Caro = () => {
  let comments = [
    {comment: "He takes his time to get you right, definitely Recommended", name:"Samuel O"},
    {comment: "Best barber in town", name:"Adekeye A"},
    {comment: "Great barber. Always keep me looking fresh!", name:"Izundu j"},
    {comment: "Very impressed with the detail. Very satisfied with the cut. Charismatic barber", name:"Shakeel G"},
    {comment: "Great service. Chill environment", name:"Joachim A"},
    {comment: "Best barber in Newark,  with a clean environment, comfortable, very welcoming, and of course second to none haircuts, highly recommend 10/10", name:"Christain A"},
    {comment: "Tush did a good job. Can't complain and just prices are reasonable! $17 for a shape-up/beard! Go see him!", name:"Dre m"},
    {comment: "Great service and great haircut", name:"Sekou S"},
    {comment: "He LACED my shape up. He listened to what I wanted and he nailed it, he was precise, strategic, sharp & professional. I found my new barber", name:"Rameeka H"},
    {comment: "Skillful Clean & Respectful", name:"Kyree S"},
    {comment: "The best haircut that I had in a while.", name:"Aduol L"},
    {comment: "Excellent service. Money well spent for sure.", name:"Ikedife C"},
    {comment: "Wonderful wonderful service! My sister looked so beautiful after the haircut! Fast and precise! And a clean environment too!", name:"Naa A"},
    {comment: "Best series of haircuts I've had in years. Definitely recommend", name:"Timothy F"},
    {comment: "Best series of haircuts I've had in years. Definitely recommend", name:"Timothy F"},
  ]
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
        <div data-bs-interval="2500" className="carousel-item active">
            <p>
            Spectacular Cutz...He takes his time to know his clients...Nice guy!
            </p>
            <p className="float-end border-start  border-3 border-danger px-3"> Conscience I</p>
          </div>
          {comments.map(((value, id)=>(
            <div data-bs-interval="2500" className="carousel-item ">
            <p>
             {value.comment}
            </p>
            <p className="float-end border-start  border-3 border-danger px-3"> {value.name}</p>
          </div>

)))}
        </div>
      </div>
    </>
  );
};

export default Caro;
