import React from "react";
import { Link, useParams } from "react-router-dom";
import OneImg from "./OneImg";
import TwoImg from "./TwoImg";
import ThreeImg from "./ThreeImg";
import FourImg from "./FourImg";
import ErrorPage from "./ErrorPage";

function Imageone() {
  let id = useParams();
  let pt=id.imageno;
  let ans=["image1","image2","image3","image4"]
  for (let i=0; i<4; i++) {
    if (ans[i]===id.imageno){pt=id.imageno; break}
    else {pt="error"}
  }
  return (
    <>
      <div className={`container-fluid m-0 p-0`} style={{ width: "100%" }}>
      {id.imageno === "image1" && <OneImg></OneImg>}
        {pt === "image2" && <TwoImg></TwoImg>}
        {pt === "image3" && <ThreeImg></ThreeImg>}
        {pt === "image4" && <FourImg></FourImg>}
        {pt === "error" && <ErrorPage></ErrorPage>}
        {/* {id.imageno === "image1" && <OneImg></OneImg>}
        {id.imageno === "image2" && <TwoImg></TwoImg>}
        {id.imageno === "image3" && <ThreeImg></ThreeImg>}
        {id.imageno === "image4" && <FourImg></FourImg>}
        {pt === "error" && <Error></Error>} */}
      </div>
    </>
  );
}
export default Imageone;

export const BackButton = ({children}) => {
  return (
    <>
      <div style={{maxWidth: "850px"}} className="mx-auto justify-content-between d-flex">
      <Link to="/"  className="my-auto"><button type="button" className="btn btn-light">← Back</button></Link>
      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        {children}
    </ul>
      </div>
    </>
  )
}

