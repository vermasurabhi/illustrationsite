import styles from "./Home.module.css";
import pichome from "../assets/peacock.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Home() {
  return (
    <>
    <div id="maintext">
      <div className={`container-fluid m-0 p-0 mt-5`}>
        <div className={`${styles.outerdiv} mx-auto`}>
          <div className={`${styles.innerdiv}`}>
            <img className={`${styles.pic}`} src={pichome} />
            <div className={`${styles.pic}`} id="maintext">
              <h1 className={`${styles.deco}`}>Dreams</h1>
              <h1 className={`${styles.deco}`}>&</h1>
              <h1 className={`${styles.deco}`}>Inspiration</h1>
              <p className={`${styles.decop}`}>
                Creating a journey of Inspirations and memories through my work.
              </p>
            </div>
          </div>
        </div>
      </div>
     
      <div className={`${styles.outerdiv} mx-auto`}>
      <h1 className={`${styles.decophead}`} id="maintext">Projects</h1>
          <div className={`${styles.innerdiv}`}>
          <div className={`${styles.carddesign} mt-3 ms-3`}>
    <Link to="/image1" style={{textDecorationLine: "none"}}><div className={`${styles.cardimage} ${styles.img1}`} >
        <div className={`${styles.cards}`}><h1  className={`${styles.deco}`} id="carddesc">Still Life</h1></div>
    </div></Link>
</div>
<div className={`${styles.carddesign} mt-3 ms-3`}>
<Link to="/image2" style={{textDecorationLine: "none"}}><div className={`${styles.cardimage} ${styles.img2}`} >
        <div className={`${styles.cards}`}><h1  className={`${styles.deco}`} id="carddesc1">Free Style</h1></div>
    </div></Link>
    
</div>
<div className={`${styles.carddesign} mt-3 ms-3`}>
<Link to="/image3" style={{textDecorationLine: "none"}}><div className={`${styles.cardimage} ${styles.img3}`} >
        <div className={`${styles.cards}`}><h1  className={`${styles.deco}`} id="carddesc2">Patterns</h1></div>
    </div></Link>
    
</div>
<div className={`${styles.carddesign} mt-3 ms-3`}>
<Link to="/image4" style={{textDecorationLine: "none"}}><div className={`${styles.cardimage} ${styles.img4}`} >
        <div className={`${styles.cards}`}><h1  className={`${styles.deco}`} id="carddesc3">Retro</h1></div>
    </div></Link>
    </div>
          </div>
        </div>
        </div>
        <br/><br/>
<div style={{ backgroundColor:"",}} className={`foot`}><Footer></Footer></div>

    </>
  );
}

export default Home;
