import React from "react";

const Caro = () => {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div data-bs-interval="5000" class="carousel-item active">
            <p>
              "First time visit, had excellent hair cut and beard trim, very
              happy and will come back"
            </p>
            <p className="float-end border-start  border-3 border-danger px-3"> John Doe</p>
          </div>
          <div data-bs-interval="5000" class="carousel-item">
            <p>
              "I was referred by my friends and I wasn't disappointed, GREAT
              SERVICE AND SKILL"
            </p>
            <p className="float-end border-start  border-3 border-danger px-3"> John Doe</p>
          </div>
          <div data-bs-interval="5000" class="carousel-item">
            <p>
              "This is one of those barbershops I can conveniently recomment"
            </p>
            <p className="float-end border-start  border-3 border-danger px-3"> John Doe</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Caro;
