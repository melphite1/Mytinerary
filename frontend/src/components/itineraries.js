import React, { Component } from 'react'
import Activities from "../components/Activities"
export default class Itineraries extends Component {

    state = {

        mostrar: false

    }

    render() {


        const mostrar = () => {

            this.setState({
                mostrar: !this.state.mostrar,


            })

        }
        var renderizoPrecio = ""
        const precio = this.props.itinerario.price

        switch (precio) {
            case 1:
                var renderizoPrecio = "$"
                break;
            case 2:
                var renderizoPrecio = "$$"
                break;
            case 3:
                var renderizoPrecio = "$$$"
                break;
            case 4:
                var renderizoPrecio = "$$$$"
                break;
            case 5:
                var renderizoPrecio = "$$$$$"
                break;

            default:
                break;

        }


        const props = this.props

        return (
            <>
                <div id="contenedor">

                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div id="apilar" style={{ display: "flex", alignItems: "center", justifyContent: "space-around", width: "100%", height: "100%" }}>

                            <div id="imagenIT" style={{ display: "flex", alignItems: "flex-start", width: "25%", marginTop: "20px" }}>


                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
                                    <p>NOMBRE</p>
                                    <img src={`${this.props.itinerario.profilePic}`} style={{ width: "200px", borderRadius: "10%" }}></img>
                                    <p style={{ fontSize: "13px" }}>{this.props.itinerario.hashtag.join(" ")}</p>
                                </div>


                            </div>

                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                <div id="tituloITIT" style={{ display: "flex", alignItems: "center", fontSize: "50px", fontFamily: "sans-serif", flexDirection: "column", }} >{this.props.itinerario.title} </div>

                                <div style={{ display: "flex", width: "100%", textAlign: "justify", marginLeft: "10px", justifyContent: "center", alignItems: "center" }}>


                                    <p className="informacionITI" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}><img src={require("../imagenes/like.png")} style={{ width: "50px" }}></img> {this.props.itinerario.rating}</p>
                                    <p className="informacionITI" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}><img src={require("../imagenes/hour.png")} style={{ width: "50px" }}></img>{this.props.itinerario.duration} Hours</p>
                                    <p className="informacionITI" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>Price: <div>{renderizoPrecio}</div></p>


                                </div>
                            </div>
                            <div id="logoIT" style={{ marginRight: "200px" }}><img src={require("../imagenes/logoPag.jpg")} style={{ width: "250px" }}></img> </div>
                        </div>
                    </div>
                   {this.state.mostrar &&  <Activities props ={this.props}/>}
        <div><button onClick ={mostrar}>{this.state.mostrar ? "View less" : " View more"}</button></div>
                   
                </div>

            </>
        )
    }
}
