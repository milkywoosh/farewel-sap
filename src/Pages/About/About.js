import React from "react";
import "./About.css";


function About() {
  return (
    <div
      style={{
        border : "9px dashed  #800080",
        marginTop: "40px",
        marginRight: "20px",
        marginLeft: "20px",
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: "#d865c9"
      }}
    >
      <h1 style={{
        textAlign:"center",
        marginTop:"1.5rem",
        marginBottom:"1.5rem",
      }}>Assalamualaikum Wr Wb ...</h1>
   
      <section style={{
        marginLeft: "60px",
      }}>

        <h2 class="introWord">Saya <b><u> Auliya Lukman</u></b>  <br/> dengan ini menyatakan telah resign dari SAP pada tanggal <b><u>28 Juni 2022</u></b></h2>
        <br/>
        <br/>
        <h4 id="someWords"> Kemudian saya mengucapkan terimakasih sebanyak"nya kepada teman-teman SAPX atas kebaikannya, khususnya Pak Budi dan Bu Nency selaku petinggi di PT SAP Tbk, Pak Fredy, Bu Ade Suminar, 
        pak Hani, Pak Ridwan sebagai atasan saya yang telah mengarahkan, memberikan banyak ilmu secara langsung dan tidak langsung. 
        Rekan-rekan SAP kantor pusat HO Jakarta Timur, tim OPS KK, tim IT(edi sunaryo, randy, keenan), filling KK (pak agus, irfan, danang, farid), kurir pick up (bg candra, cang man, bg ocid, dika, bg wahid, pa haji rendi), CS DS KK, tim marketing pak Ari wp dan teman-teman CS cabang, Kurir dan tim NOS Selindo yang selalu fast respon 
        untuk diminta bantuannya mengenai komplain client yang bertubi tubi. <br/>
        <br/>

        Akhir kata saya memohon maaf atas segala kesalahan yang disengaja maupun tidak sengaja, serta mungkin kata-kata yang kurang berkenan
        kepada rekan-rekan semua.
        </h4>
      </section>
    </div>
  );
}

export default About;
