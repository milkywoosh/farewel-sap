import React from "react";
import "./Home.css";
function Home() {
  return (
    <div id="wrapperHome">
      {/* <div className="header">
        <h1>My Website</h1>
        <p>Resize the browser window to see the effect.</p>
      </div> */}

      <div className="row">
        <div className="leftcolumn">
          <div className="cards">
            <h2
              style={{
                backgroundColor: "#d865c9",
                padding: "4px",
                borderRadius: "4px",
                fontWeight: "500",
              }}
            >
              Lukman CS KK HO SAP
            </h2>
            <h5
              style={{
                backgroundColor: "#d865c9",
                padding: "4px",
                borderRadius: "4px",
              }}
            >
              Periode 2019 - 2022, SAP Halim Perdana Kusuma, no. 28 Jl. Komodor
            </h5>
            <div
              className=""
              style={{
                height: "400px",
                borderRadius: "5px",
                marginBottom: "100px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <img
                className="fakeimg"
                src={require("../../assets/photocccc.jpg").default}
                height={"500px"}
                borderRadius={"5px"}
              />
            </div>

            {/* <div  style={{margin: "100px"}}>
              <p>Some text..</p>
              <p>
                Sunt in culpa qui officia deserunt mollit anim id est laborum
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco.
              </p>
            </div> */}
          </div>
        </div>
        <div className="rightcolumn">
          <div className="cards">
            <div className="gitHub" style={{ height: "50px" }}>
              <a
                id="linkGit"
                href="https://github.com/milkywoosh/farewel-sap/tree/master"
                style={{ fontWeight: "100", textAlign: "center" }}
              >
                <u style={{textAlign: "center"}}>Github</u>
              </a>
            </div>
          </div>
          <div className="cards">
            <h3 style={{textAlign: "center", background: "#f46505", borderRadius: "5px", padding: "6px"}}>Popular Post</h3>
            <div className="fakeimg">
              <p>Sic Parvis Magna</p>
            </div>
            <div className="fakeimg">
              <p>Sic Parvis Magna</p>
            </div>
            <div className="fakeimg">
              <p>Sic Parvis Magna</p>
            </div>
          </div>
        </div>
      </div>

      <div className="topnav"></div>

      <div className="footer">
        <p>© 2022 Lukman</p>
      </div>
    </div>
  );
}

export default Home;
