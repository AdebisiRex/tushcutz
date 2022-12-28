import React from "react";
import classes from "../styles/NewPriceList.module.css";
import logo from "../assets/logo.png";
const NewPriceList = () => {
  return (
    <div className={classes.pricelist_bg}>
      <div
        className={"border border-white pb-3 border-4 h-100 " + classes.border}
      >
        <img src={logo} className="d-block mx-auto mb-2 " alt="" />
        <div className="mb-3">
          <h1 className="text-center text-white font-monospace fs-3">
            Price List
          </h1>
          <div
            className={
              "d-md-flex justify-content-evenly mx-auto " + classes.table_div
            }
          >
            <table className="table table-borderless text-white mx-auto m-0">
              <tbody>
                <tr className="">
                  <td>HAIR CUT</td>
                  <td>$30</td>
                </tr>
                <tr>
                  <td>HAIR CUT + BEARD</td>
                  <td>$35</td>
                </tr>
                <tr>
                  <td>KIDS REGULAR</td>
                  <td>$15</td>
                </tr>
                <tr>
                  <td>KIDS FADE</td>
                  <td>$17</td>
                </tr>
                <tr>
                  <td>CRYING KIDS</td>
                  <td>$20</td>
                </tr>
                <tr>
                  <td>DESIGN + HAIRCUT</td>
                  <td>$17</td>
                </tr>
              </tbody>
            </table>

            <table className="table table-borderless text-white mx-auto m-0">
              <tbody>
                <tr>
                  <td>COLOUR + CUTTING </td>
                  <td>$30</td>
                </tr>
                <tr>
                  <td>ADULT BALDIE</td>
                  <td>$35</td>
                </tr>
                <tr>
                  <td>SHAPE UP</td>
                  <td>$15</td>
                </tr>
                <tr>
                  <td>EYE BROWS</td>
                  <td>$20</td>
                </tr>
                <tr>
                  <td>DESIGN + HAIRCUT</td>
                  <td>$17</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={classes.deals + " text-white mx-auto"}>
          <h3 className="font-monospace  text-center fw-bold fs-4">DEALS</h3>
          <p>HAIRCUT + BEARD + EYEBROWS = $38</p>
          <p>HAIRCUT + BEARD + EYEBROWS + DESIGN= $40</p>

          <p className="fw-bold fs-5 m-0">NOTE:</p>
          <ul>
            <li>TAPER IS A HAIRCUT</li>
            <li>SHAPE UP DOES NOT REQUIRE CLIPPER WORK</li>
            <li>KIDS ARE 13 AND BELOW</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewPriceList;
