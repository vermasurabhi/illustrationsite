import React from "react";
import {Link} from "react-router-dom";

import potrait2 from "/illustration/strawberrybuccket.png";
import potrait255 from "/illustration/magnilemon.png";
import potrait27 from "/illustration/onlytulip.png";
import potrait1 from "/illustration/stilllife.png";
import potrait30 from "/illustration/simleflorapattn.png";
import potrait43 from "/illustration/pattern4.png";


import Footer from "./Footer";
import { BackButton } from "./Imageone";

const OneImg = () => {
    return (
      <>
        <div
          className={`navlogo px-4 py-5 text-center`}
          style={{ backgroundColor: "#97A2AE" }}
        >
          <img
            src={potrait27}
            style={{ width: "7rem", maxWidth: "7rem", height: "7rem" }}
            className={`loaddes m-0 mx-auto`}
          />
        </div>
        <div
          className="mt-5"
          style={{ width: "100%", fontStyle: "italic", textAlign: "center" }}
        >
          <h2>~ Creating my own world ~</h2>
        </div>
        <BackButton>
        <li ><Link to="/image2"  className="my-auto">
          <img
                src={potrait255}
                style={{ width: "100%", borderRadius: "50%", maxWidth: "70px",maxHeight: "70px"}}
                className={`loaddes m-0 p-2`}
              /></Link></li>
              <li ><Link to="/image3"  className="my-auto"><img
                src={potrait30}
                style={{ width: "100%", borderRadius: "50%", maxWidth: "70px",maxHeight: "70px"}}
                className={`loaddes m-0 p-2`}
              /></Link></li><li ><Link to="/image4"  className="my-auto"><img
              src={potrait43}
              style={{ width: "100%", borderRadius: "50%", maxWidth: "70px",maxHeight: "70px"}}
              className={`loaddes m-0 p-2`}
            /></Link></li>
        </BackButton>
         <div className="row m-0 p-0">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 justify-content-center d-flex m-0 p-0"><img
                src={potrait1}
                style={{ width: "100%", borderRadius: "20px", maxWidth: "850px", maxHeight: "600px"}}
                className={`loaddes m-0 p-2`}
              /></div>
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 justify-content-center d-flex m-0 p-0"><img
                src={potrait2}
                style={{ width: "100%", borderRadius: "20px", maxWidth: "850px",maxHeight: "600px"}}
                className={`loaddes m-0 p-2`}
              /></div>
         </div>
        <br />
        <br />
        <BackButton></BackButton>
        <br />
        <br />
        <div style={{ backgroundColor: "#97A2AE" }}>
          <Footer></Footer>
        </div>
      </>
    );
  };

  export default OneImg