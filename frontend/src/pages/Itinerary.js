import React from 'react'
import axios from "axios"
import backGround from "../imagenes/fondo.jpg"
import "../styles/itinerarys.css"

import Button from "../components/Activities"
import { NavLink } from "react-router-dom"




class Itinerary extends React.Component {
    state = {
        itinerary: [],
        ciudad: [],


    }


    async componentDidMount() {
        const idAbuscar = this.props.match.params.id

        const respuesta = await axios.get(`http://127.1.1.0:4000/api/itinerary/${idAbuscar}`)

        const respuestaCiudad = await axios.get(`http://127.1.1.0:4000/api/city/${idAbuscar}`)

        const itinerarios = respuesta.data.itinerario
        const ciudad = respuestaCiudad.data.ciudad
        this.setState({
            itinerary: itinerarios,
            ciudad: ciudad

        })

    }

    render() {

        return (
            <div>
                <body style={{ backgroundImage: `url(${backGround})` }}>

                    <header  id="headerIT" style={{ height: "60vh", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", marginBottom: "10px" }}>
                        <h1 id="tituloIT"className="sombra1"  style={{ margin: "20px",fontFamily:" sans-serif",display:"flex", justifyContent:"center", fontSize:"60px" }}>{this.state.ciudad.nameCity}</h1>

        
                        <div  id="imagenIT" className="sombra" style={{ height: "100%", width: "50%", backgroundImage: `url(${this.state.ciudad.url})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", marginTop: "10px" }}></div>

            
     
                    </header>
                    <div style={{ height: "5vh", width: "100%" }}>         </div>

                    <main id="main">
                        <div style={{ width: "100%", height: "100%" }}>
                            {this.state.itinerary.length == 0
                                ? <div id="contenedorVacio"><p>NOT ITINERARIES YET</p></div>
                                : this.state.itinerary.map(itinerario => {

                                    return <div id="contenedor">
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <div  id="apilar"style={{ display: "flex", alignItems: "center", justifyContent: "space-around", width: "100%", height: "100%" }}>
                                          
                                                <div  id="imagenIT"style={{ display: "flex", alignItems: "flex-start", width: "25%", marginTop: "20px" }}>
                                                
                                           
                                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexWrap: "wrap", justifyContent:"center" }}>
                                                    <p>NOMBRE</p>
                                                        <img src={`${itinerario.profilePic}`} style={{ width: "200px", border: "1 px solid black", borderRadius: "10%" }}></img>
                                                        <p style={{ fontSize: "13px" }}>{itinerario.hashtag.join(" ")}</p>
                                                    </div>


                                                </div>
                                          
                                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                                    <div  id="tituloITIT"style={{ display: "flex", alignItems: "center", fontSize: "50px", fontFamily: "sans-serif", flexDirection: "column", }} >{itinerario.title} </div>

                                                    <div style={{ display: "flex", width: "100%", textAlign: "justify", marginLeft: "10px", justifyContent: "center", alignItems: "center" }}>


                                                        <p className="informacionITI" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}><img src={require("../imagenes/like.png")} style={{ width: "50px" }}></img> {itinerario.rating}</p>
                                                        <p className="informacionITI" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}><img src={require("../imagenes/hour.png")} style={{ width: "50px" }}></img>{itinerario.duration} Hours</p>
                                                        <p className="informacionITI" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}><img src={require("../imagenes/cash.png")} style={{ width: "50px" }}></img>{itinerario.price}/10</p>


                                                    </div>
                                                </div>
                                                <div id="logoIT" style={{ marginRight: "200px" }}><img src={require("../imagenes/logoPag.jpg")} style={{ width: "250px" }}></img> </div>
                                            </div>
                                        </div>
                                        <div style={{ backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}><Button /></div>
                                    </div>


                                })}

                        </div>
                    </main>


<footer style={{display:"flex", justifyContent:"space-around" }}>
   <NavLink to="/Home"><div><img src={require("../imagenes/carrera.png")}  style={{width:"150px", }}></img></div></NavLink> 
   <NavLink to ="/Cities"><div><img src={require("../imagenes/recargar.png")}  style={{width:"150px", }}></img></div></NavLink> 
</footer>




                </body>

            </div>
        )
    }
}


export default Itinerary    