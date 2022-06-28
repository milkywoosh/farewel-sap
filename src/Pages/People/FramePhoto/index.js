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
      props.SetIndex(data + 1);
    }
    if (data === 3) {
      setData(0);
      props.SetIndex(0);
    }
  };
  const PrevPhoto = () => {
    if (data > 0) {
      setData(data - 1);
      props.SetIndex(data - 1);
    }
    if (data === 0) {
      setData(3);
      props.SetIndex(3);
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
          style={{
            borderRadius: "5px",
            border: "5px solid black",
            backgroundColor: "#9b20b7",
            boxShadow: "2px 2px 2px 1px rgb(0, 0, 0)",
            margin: "40px",
            width: "500px",
            height: "600px",
          }}
        >
          {DataPerson[data]}
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
            onClick={PrevPhoto}
          >
            <span
              className="carousel-control-prev-icon "
              aria-hidden="true"
            ></span>
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
            textAlign: "center",
            // padding: "1rem ",
            marginTop: "5px",
            marginRight: "3rem",
            marginLeft: "3rem",
            backgroundColor: "#d865c9",
            boxShadow: "2px 2px 2px 1px black",
            border: "3px solid black",
          }}
        >
          <h4 style={{ color: "black", fontSize: "40px" }}>{KKSquad[data].name}</h4>
        </div>
      </div>
    </div>
  );
}

export default FramePhoto;
