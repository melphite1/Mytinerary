import React from "react"
import img from "../imagenes/logoPag.jpg"
import { NavLink } from "react-router-dom"


function Logo (){
    
    return  <div style= {{display:"flex", justifyContent:"center"}}  id="logo"><NavLink to="/Home"><img src= {img} style={{width :"350px"}} alt="foto"></img></NavLink></div>
}
export default Logo