import React from "react"

import img1 from "../imagenes/redes sociales/face.png"
import img2 from "../imagenes/redes sociales/twitter.png"
import img3 from "../imagenes/redes sociales/instagram.png"
import img4 from "../imagenes/redes sociales/llamar.png"
import img5 from "../imagenes/redes sociales/email.png"



function Footer() {


    return (
        <div id="footer" style={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
            <div id ="col2">
                
                <div style={{ marginTop: "15px" }}> @ 2020 Cristian Suarez</div>
                <div><img src={img1} style={{ width: "50px", marginTop: "15px" }} className="icons" alt="foto"></img>
                    <img src={img2} style={{ width: "50px", marginTop: "15px" }} className="icons" alt="foto"></img>
                    <img src={img3} style={{ width: "50px", marginTop: "15px" }}  className="icons" alt="foto"></img>
                </div>
            </div>
            <div  id="col1"  >

                <p style={{fontSize:"25px", margin:"0 20px"}}>MyTinery</p>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={img4} style={{ width: "25px",  }} alt="foto"></img>
                    <p style={{fontSize:"25px", margin:"0 10px"}}>42574259</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={img5} style={{ width: "25px",  alignItems: "center" }} alt="foto"></img>
                    <p style={{fontSize:"25px", margin:"0 10px"}}>mytinerary2020@hotmail.com</p>
                </div>
            </div>

        </div>
    )
}


export default Footer

