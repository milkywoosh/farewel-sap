
import React, { useState } from "react";
import "./About.css";


function About() {
  const [words, setWords] = useState(true);

  const setToSAP = () => {
    setWords(true);
  };
  const setToClient = () => {
    setWords(false);
  };

  const forSAP = (
    <div
      style={{
        border: "9px dashed  #800080",

        marginTop: "30px",
        marginRight: "60px",
        marginLeft: "60px",
        marginBottom: "60px",
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: "#d865c9",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginTop: "1.5rem",
          marginBottom: "1.5rem",
        }}
      >
        {" "}
        <b>Assalamualaikum Wr Wb ...</b>
      </h1>

      <section
        style={{
          marginLeft: "60px",
        }}
      >
        <h2 class="introWord">
          {" "}
          <b>
            {" "}
            Saya <u> Auliya Lukman</u> <br /> dengan ini menyatakan telah resign
            dari SAP pada tanggal <u>28 Juni 2022</u>
          </b>
        </h2>
        <br />
        <br />
        <h4 id="someWords">
          {" "}
          <b>
            {" "}
            Kemudian saya mengucapkan terimakasih sebanyak"nya kepada
            teman-teman SAPX atas kebaikannya, khususnya Pak Budi dan Bu Nency
            selaku petinggi di PT SAP Tbk, Pak Fredy, Bu Ade Suminar, pak Hani,
            Pak Ridwan sebagai atasan saya yang telah mengarahkan, memberikan
            banyak ilmu secara langsung dan tidak langsung. Rekan-rekan SAP
            kantor pusat HO Jakarta Timur yang telah banyak membantu dalam
            proses pekerjaan, tim OPS KK, tim IT(edi sunaryo, randy, keenan),
            filling KK (pak agus, irfan, danang, farid), kurir pick up (bg
            candra, cang man, bg ocid, dika, bg wahid, pa haji rendi), CS DS KK,
            tim marketing pak Ari wp dan terakhir kepada teman-teman CS cabang,
            Kurir dan tim NOS Selindo yang selalu fast respon untuk diminta
            bantuannya mengenai komplain client yang bertubi tubi. <br />
            <br />
            Akhir kata saya memohon maaf atas segala kesalahan yang disengaja
            maupun tidak sengaja, serta mungkin kata-kata yang kurang berkenan
            kepada rekan-rekan semua. <br />
            🙇 🙇 🙇 🙏🙏🙏{" "}
          </b>
        </h4>
      </section>
    </div>
  );

  const forClient = (
    <div
      style={{
        border: "9px dashed  #800080",

        marginTop: "30px",
        marginRight: "60px",
        marginLeft: "60px",
        marginBottom: "60px",
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: "#d865c9",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginTop: "1.5rem",
          marginBottom: "1.5rem",
        }}
      >
        {" "}
        <b>Assalamualaikum Wr Wb ...</b>
      </h1>

      <section
        style={{
          marginLeft: "60px",
        }}
      >
        <h2 class="introWord">
          {" "}
          <b>
            {" "}
            Selanjutnya saya memohon maaf sebesar-besarnya kepada tim Client yang selama ini berada di bawah tanggung jawab sayaa
          </b>
        </h2>
        <br />
        <br />
        <h4 id="someWords">
          {" "}
          <b>
            {" "}
           Kepada tim Bank Mega khususnya pak Maruto, bu Ria, pak Ikhwan, pak Irwan, pak Agus, pak irfan, bu Grace selanjutnya
           kepada tim Maybank  khususnya pak Gerrid, pak Irfan, pak Welin.. <br/>
            dari saya mengucapkan terimakasih banyak atas kerjasamanya, dan yang mungkin dirasa belum maksimal dalam handle complain
            dan permasalahan.
              🙇 🙇 🙇 🙏🙏🙏{" "}
          </b>
        </h4>
      </section>
    </div>
  );

  return (
    <div className="outter">
      <div className="buttonChoice">
        <button className="button" onClick={setToSAP}> <b> SAP X</b></button>
        <button className="button" onClick={setToClient}> <b> CLIENT </b> </button>
      </div>
      <div>{words ? forSAP : forClient}</div>
    </div>
  );
}

export default About;
