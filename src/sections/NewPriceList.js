import React from "react";
import classes from "../styles/NewPriceList.module.css";
import logo from "../assets/logo.png";
const NewPriceList = () => {
  let array1 = [
    { description: "HAIR CUT", price: "$30" },
    { description: "HAIR CUT + BEARD", price: "$30" },
    { description: "KIDS REGULAR", price: "$30" },
    { description: "KIDS FADE", price: "$20" },
    { description: "CRYING KIDS", price: "$50" },
    { description: "DESIGN + HAIRCUT", price: "$5 &UP" },
  ];
  let array2 = [
    { description: "COLOUR + CUTTING", price: "$75" },
    { description: "ADULT BALDIE", price: "$25 + Beard = $30" },
    { description: "SHAPE UP", price: "$15 + Beard = $17" },
    { description: "EYEBROWS", price: "$10" },
    { description: "BEARD SHAPE UP", price: "$10" },
    { description: "HAIRCUT + BEARD + EYEBROWS", price: "$38" },
  ];
  return (
    <div className={classes.pricelist_bg}>
      <div className={"border border-white pb-3 border-4 " + classes.border}>
        <img src={logo} className="d-block mx-auto mb-2 " alt="" />
        <div className="mb-3">
          <h1 className="text-center text-white font-monospace fs-3">
            Price List
          </h1>
          <div
            className={
              "mx-auto " + classes.table_div
            }
          >
            

            <div className="text-white mx-auto m-0">
              {array1.map((item, id) => (
                <div key={id} className={`${classes.table_row}  `}>
                  <div
                    className={`${classes.table_data} ${classes.description} `}
                  >
                    {" "}
                    <p className="m-0 p-0 ">{item.description}</p>{" "}
                  </div>

                  <div className={`${classes.table_line}`}></div>

                  <div
                    className={`text-end  ${classes.table_data} ${classes.price}`}
                  >
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-white mx-auto m-0">
              {array2.map((item, id) => (
                <div key={id} className={`${classes.table_row}  `}>
                  <div
                    className={`${classes.table_data} ${classes.description} `}
                  >
                    {" "}
                    <p className="m-0 p-0 ">{item.description}</p>{" "}
                  </div>

                  <div className={`${classes.table_line}`}></div>

                  <div
                    className={`text-end  ${classes.table_data} ${classes.price}`}
                  >
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
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
          {/* <p className="text-center">KINDLY PAY BEFORE YOU LEAVE</p> */}
        </div>
      </div>
    </div>
  );
};

export default NewPriceList;
