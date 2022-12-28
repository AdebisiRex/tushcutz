import React from "react";
import line from "../assets/line.png";
import classes from "../styles/Price.module.css";

const Price = () => {
  return (
    <div className="bg-primary text-white p-5">
      <div className={classes.price_div + "  d-md-flex"}>
        <div className={classes.each_container + " w-100  mb-4"}>
          <div className={" d-flex align-items-center"}>
            <img src={line} height={3} alt="" className="p-0 m-0 me-2" />
            <p className="m-0 fs-6">Price List</p>
          </div>
          <h2 className="mb-4">Free Hair Cutz</h2>

          <div className={classes.content}>
            <table className="table text-white">
              <tr>
                <td>Hair Cutz </td>
                <td>$30</td>
              </tr>
              <tr>
                <td>Razor + Beard</td>
                <td>$35</td>
              </tr>
              <tr>
                <td>Shape up</td>
                <td>$15</td>
              </tr>
              <tr>
                <td>Shape up + Beard</td>
                <td>$17</td>
              </tr>
              <tr>
                <td>Adult baldie + beard</td>
                <td>$20</td>
              </tr>
            </table>
          </div>
        </div>
        <div className={classes.each_container + " w-100"}>
          <div className={" d-flex align-items-center"}>
            <img src={line} height={3} alt="" className="p-0 m-0 me-2" />
            <p className="m-0 fs-6">Price List</p>
          </div>
          <h2 className="mb-4">Free Hair Cutz</h2>

          <div className={classes.content}>
            <table className="table text-white">
              <tr>
                <td>Hair Cutz </td>
                <td>$30</td>
              </tr>
              <tr>
                <td>Razor + Beard</td>
                <td>$35</td>
              </tr>
              <tr>
                <td>Shape up</td>
                <td>$15</td>
              </tr>
              <tr>
                <td>Shape up + Beard</td>
                <td>$17</td>
              </tr>
              <tr>
                <td>Adult baldie + beard</td>
                <td>$20</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
