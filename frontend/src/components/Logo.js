import React from "react"
import img from "../imagenes/logoPag.jpg"

function Logo (){
    return  <div style= {{display:"flex", justifyContent:"center"}}  id="logo"><img src= {img} style={{width :"350px"}}></img></div>
}
export default Logo