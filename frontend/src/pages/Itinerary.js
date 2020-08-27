import React from 'react'
import axios from "axios"
import backGround from "../imagenes/fondo.jpg"
import "../styles/itinerarys.css"



class Itinerary extends React.Component {
    state = {
        itinerary: [],
        ciudad: []

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

        console.log(this.state.itinerary)

        return (
            <div>
                <body style={{ backgroundImage: `url(${backGround})` }}>

                    <header style={{ height: "60vh", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", marginBottom: "10px" }}>
                        <h1 style={{ margin: "20px" }}>Itineraries for {this.state.ciudad.nameCity}!!</h1>

                        <div className="sombra" style={{ height: "100%", width: "50%", backgroundImage: `url(${this.state.ciudad.url})`, backgroundRepeat: "no-repeat", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", marginTop: "10px" }}></div>

                    </header>
                    <div style={{ height: "5vh", width: "100%" }}></div>

                    <main id="main">
                        <div style={{ width: "100%", height:"100%" }}>
                            {this.state.itinerary.length == 0
                                ? <div  id="contenedorVacio"><p>NOT ITINERARIES YET</p></div>
                                : this.state.itinerary.map(itinerario => {
                                    return <div id="contenedor">
                                        <div style={{ display: "flex", alignItems: "start", justifyContent: "space-around", width: "100%", height: "100%" }}>

                                            <div style={{ display: "flex", alignItems: "flex-start", width: "25%", marginTop:"20px" }}>
                                                <div style={{ display: "flex", flexDirection: "column", alignItems: "start", flexWrap: "wrap" }}>
                                                    <img src={`${itinerario.profilePic}`} style={{ width: "200px", border: "1 px solid black", borderRadius: "10%" }}></img>
                                                    <p style={{fontSize:"15px"}}>{itinerario.hashtag.join(" ")}</p>
                                                </div>
                                                <div style={{ display: "flex", flexDirection: "row", width: "100%", textAlign: "justify", marginLeft:"10px" }}>

                                                    <ul >
                                                        <li><p>Likes: {itinerario.rating}</p>   </li>
                                                        <li><p>{itinerario.duration} Hours</p></li>
                                                        <li>  <p>{itinerario.price}</p></li>
                                                    </ul>

                                                </div>

                                            </div>
                                            <div style={{ display: "flex", alignItems: "start", fontSize:"50px", fontFamily:"sans-serif"}} >{itinerario.title}</div>
                                            <div></div>
                                        </div>


                                    </div>
                                })}

                        </div>
                    </main>







                </body>

            </div>
        )
    }
}


export default Itinerary    