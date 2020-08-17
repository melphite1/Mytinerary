import React from "react"
import Carousel from 'react-bootstrap/Carousel'
import "../styles/Carousel.css"

function Carousel1() {


    const ciudades1 = ["London", "Chicago", "LosAngeles", "NuevaYork"]
    const ciudades2 = ["Osaka", "Paris", "SaoPaulo", "Seul"]
    const ciudades3 = ["Shangai", "Taipei", "Tokio", "Yakarta"]
    return (

        <Carousel className="carousel" interval={2000}>

            <Carousel.Item>

                <div id="contenedorCarr">
                    {ciudades1.map(ciudad => {
                        const fotoCiudad = require(`../imagenes/ImagLugares/${ciudad}.jpg`)
                        return (
                            <>
                                <div
                                    id="contenedorImg"
                                    style={{ backgroundImage: `url(${fotoCiudad})`, display: "flex", alignItems: "center", fontSize:"45px" }}
                                >            <div id="nombreCiudad"><p style={{ margin: "0", padding: "0", color: "#F1F3AE" }}>{ciudad}</p></div></div>


                            </>)
                    })}
                </div>




            </Carousel.Item>
            <Carousel.Item>
            <div id="contenedorCarr">
                    {ciudades2.map(ciudad => {
                        const fotoCiudad = require(`../imagenes/ImagLugares/${ciudad}.jpg`)
                        return (
                            <>
                                <div
                                    id="contenedorImg"
                                    style={{ backgroundImage: `url(${fotoCiudad})`, display: "flex", alignItems: "center", fontSize:"45px" }}
                                >            <div id="nombreCiudad"><p style={{ margin: "0", padding: "0", color: "#F1F3AE" }}>{ciudad}</p></div></div>


                            </>)
                    })}
                </div>



            </Carousel.Item>
            <Carousel.Item>

            <div id="contenedorCarr">
                    {ciudades3.map(ciudad => {
                        const fotoCiudad = require(`../imagenes/ImagLugares/${ciudad}.jpg`)
                        return (
                            <>
                                <div
                                    id="contenedorImg"
                                    style={{ backgroundImage: `url(${fotoCiudad})`, display: "flex", alignItems: "center", fontSize:"45px" }}
                                >            <div id="nombreCiudad"><p style={{ margin: "0", padding: "0", color: "#F1F3AE" }}>{ciudad}</p></div></div>


                            </>)
                    })}
                </div>


            </Carousel.Item>





        </Carousel>
    )

}
export default Carousel1