import React, { useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import PortalPopUp from "../../../components/portalPopUp";
import { KKSquad, DataPerson } from "./dataFramePhoto";

function FramePhoto(props) {
  const [data, setData] = useState(0);

  const NextPhoto = () => {
    console.log(data);
    if (data < 3) {
      setData(data + 1);
      props.SetIndex(data+1)
    }
    if (data === 3) {
      setData(0);
      props.SetIndex(0)
    }
  };
  const PrevPhoto = () => {
    if (data > 0) {
      setData(data - 1);
      props.SetIndex(data-1)
    }
    if (data === 0) {
      setData(3);
      props.SetIndex(3)
    }
  };
  const slideIndicator = (arg, currSlide) => {
    if (arg === currSlide) {
      return "active";
    } else {
      return null;
    }
  };


  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
      data-interval="false"
    >
      <ol className="carousel-indicators">
        {/* <li data-target="#carouselExampleIndicators" data-slide-to={0} className={slideIndicator(0,data)}></li>
        <li data-target="#carouselExampleIndicators" data-slide-to={1} className={slideIndicator(1,data)} ></li> */}
      </ol>
      <div className="dividingTextStory">
        <div
          className="carousel-inner"
          style={{ borderRadius: "5px", border: "5px solid #9b20b7" }}

        >
          {DataPerson[data]}
          <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
        onClick={PrevPhoto}
      >
        <span className="carousel-control-prev-icon " aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next "
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
        onClick={NextPhoto}
      >
        <span
          className="carousel-control-next-icon text-secondary"
          aria-hidden="true"
        ></span>
        <span className="sr-only text-secondary">Next</span>
      </a>
        </div>
        <div
          style={{

            display: "flex",
            borderRadius: "5px",
            justifyContent: "center",
            textAlign: "center"
            // padding: "2rem 2rem 2rem 2rem",

          }}
        >
          <h4 style={{color: "#ffffff"}}>{KKSquad[data].name}</h4>
        </div>
      </div>

     
    </div>
  );
}

export default FramePhoto;
