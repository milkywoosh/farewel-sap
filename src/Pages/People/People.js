import React, { useState, useEffect } from "react";
import FramePhoto from "./FramePhoto";
import "./People.css";
import { KKSquad } from "../People/FramePhoto/dataFramePhoto.js";

function People(props) {
  const [indexText, setIndexText] = useState(0);

  const handlerSetIndexText = (data) => {
    console.log(data);
    setIndexText(data);
  };


  return (
    <div className="row">
      <div className="column1">
        <FramePhoto SetIndex={handlerSetIndexText} />
      </div>
      <div className="column2">
        <h4
          style={{
            color: "#ffffff",
            margin: "3rem 3rem 3rem 3rem",
          }}
        >
          {KKSquad[indexText].text}
        </h4>
      </div>
    </div>
  );
}

export default People;
