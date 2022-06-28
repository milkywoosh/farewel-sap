import React, { useState } from "react";
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
        <details>
          <summary
            style={{
              textAlign: "center",
              background: " #d865c9",
              padding: "5px",
              borderRadius: "5px",
              boxShadow: "2px 2px 2px 1px black",
              fontWeight: "900"
            }}
          >

            THOUGHT
          </summary>
          <h4
            style={{
              color: "#ffffff",
              margin: "1rem 1rem 1rem 1rem",
              textIndent: "40px",
              lineHeight: "40px",
            }}
          >
            {KKSquad[indexText].text}
          </h4>
        </details>
      </div>
    </div>
  );
}

export default People;
