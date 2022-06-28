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
          <div className="cardWrapper">
            <h2
              style={{
                backgroundColor: "#f56505",
                paddingTop: "10px",
                borderRadius: "4px",
                justifyContent: "center",
                width: "700px",
                boxShadow: "2px 2px 1px 1px black",
                border: "3px solid black",
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: "30px", fontWeight: "800" }}>
                AULIYA LUKMAN
              </p>
            </h2>
            <h5
              style={{
                backgroundColor: "#f56505",
                padding: "9px",
                borderRadius: "4px",
                width: "400px",
                boxShadow: "2px 2px 1px 1px black",
                border: "3px solid black",
                textAlign: "left",
                fontWeight: "800",
              }}
            >
              Peran yang kocak bikin kita terbahak-bahak, Peran bercinta bikin
              orang mabuk kepayang, Dunia ini penuh peranan, Dunia ini bagaikan
              jembatan kehidupan
            </h5>
            <h5
              style={{
                backgroundColor: "#f56505",
                padding: "9px",
                borderRadius: "4px",
                width: "400px",
                boxShadow: "2px 2px 1px 1px black",
                border: "3px solid black",
                textAlign: "left",
                marginLeft: "100px",
                fontWeight: "800",
              }}
            >
              Bukan lautan hanya kolam susu Kail dan jalan cukup menghidupimu,
              Tiada badai tiada topan kau temui, Ikan dan udang menghampiri
              dirimu
            </h5>
            <h5
              style={{
                backgroundColor: "#f56505",
                padding: "9px",
                borderRadius: "4px",
                width: "400px",
                boxShadow: "2px 2px 1px 1px black",
                border: "3px solid black",
                textAlign: "left",
                marginLeft: "300px",
                fontWeight: "800",
              }}
            >
              Duduk sini nak dekat pada bapak, Jangan kau ganggu ibumu, Turunlah
              lekas dari pangkuannya, Engkau lelaki kelak sendiri, Jauh jalan
              yang harus kau tempuh, Mungkin samar bahkan mungkin gelap
            </h5>
            <div
              style={{
                // height: "550px",
                borderRadius: "5px",
                marginBottom: "10px",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <img
                className=""
                alt=""
                src={require("../../assets/photocccc.jpg").default}
                style={{
                  boxShadow: "4px 4px 2px 2px black",
                  border: "3px solid black",
                  height: "500px",
                  borderRadius: "5px",
                  marginLeft: "10rem",
                }}
              />
            </div>

            <div
              style={{
                height: "550px",
                borderRadius: "5px",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <img
                className=""
                alt=""
                src={require("../../assets/floating-ban.JPG").default}
                style={{
                  boxShadow: "4px 4px 2px 2px black",
                  border: "3px solid black",
                  height: "500px",
                  borderRadius: "5px",
                }}
              />
            </div>
            <div
              style={{
                height: "550px",
                borderRadius: "5px",
                justifyContent: "center",
                alignContent: "center",
                marginBottom: "100px",
                width: "100%",
              }}
            >
              <img
                className=""
                alt=""
                src={require("../../assets/bertapa.JPG").default}
                style={{
                  boxShadow: "4px 4px 2px 2px black",
                  border: "3px solid black",
                  height: "500px",
                  borderRadius: "5px",
                }}
              />
            </div>
          </div>
        </div>

        <div className="rightcolumn">
          <div className="cards">
            <div className="gitHub" style={{ height: "80px" }}>
              <a
                id="linkGit"
                href="https://github.com/milkywoosh/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontWeight: "600",
                  textAlign: "center",
                  width: "200px",
                }}
              >
                <button className="button">
                  {" "}
                  <b> GITHUB</b>
                </button>
              </a>
            </div>
          </div>
          <div className="cards boxBold ">
            <h3
              className="boxBold"
              style={{
                textAlign: "center",
                background: "#f46505",
                borderRadius: "5px",
                padding: "6px",
                fontWeight: "600",
              }}
            >
              My Articles
            </h3>
            <div className="fakeimg boxBold">
              <p style={{ fontWeight: "600", textAlign: "center" }}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "black" }}
                  href="https://medium.com/p/6615ff5eac2a#d2ac-bd24e91ee8c"
                >
                  {" "}
                  Basic Javascript{" "}
                </a>
              </p>
            </div>
            <div className="fakeimg boxBold">
              <p style={{ fontWeight: "600", textAlign: "center" }}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "black" }}
                  href="https://medium.com/@archer.lukman/basic-looping-in-python-58b22534491c"
                >
                  {" "}
                  Python Intro{" "}
                </a>
              </p>
            </div>
            <div className="fakeimg boxBold">
              <p style={{ fontWeight: "600", textAlign: "center" }}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "black" }}
                  href="https://medium.com/@archer.lukman/spread-syntax-di-javascript-obj-1ca01fa05c6c"
                >
                  Spread Syntax Javascript
                </a>
              </p>
            </div>
          </div>

          <div className="filler"></div>
        </div>
      </div>

      <div className="topnav"></div>

      <div className="footer">
        <p id="footerid">
          {" "}
          <u>
            <b> ©2022 Lukman</b>
          </u>
        </p>
      </div>
    </div>
  );
}

export default Home;
