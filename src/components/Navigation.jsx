import styles from './Navigation.module.css';
import { Outlet, Link } from "react-router-dom";


function NavHeader() {

  return (
    <>

<div>
<span style={{ display: "flex", justifyContent: "center", width: "100%", height: "fit-content", position: "fixed", top: "0", zIndex: "100"}} id="navbody">
              </span>
</div>
   <Outlet />
    </>
  )
}

export default NavHeader
