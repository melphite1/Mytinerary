import React from 'react'
import axios from "axios"
import backGround from "../imagenes/fondo.jpg"
import "../styles/itinerarys.css"
import { NavLink } from "react-router-dom"
import Itineraries from '../components/itineraries'
import {connect} from "react-redux"
import citiesActions from "../redux/actions/ActionsgetCities"





class Itinerary extends React.Component {
    state = {
        itinerary: [],

    }


    async componentDidMount() {

         this.props.listCities()

        const idAbuscar = this.props.match.params.id

        const respuesta = await axios.get(`http://127.1.1.0:4000/api/itinerary/${idAbuscar}`)

      

        const itinerarios = respuesta.data.itinerario
 
        this.setState({
            itinerary: itinerarios,
   

        })

    }
  
    render() {
const idCity =  this.props.listaCiudades.listaCiudades.filter(ciudad => ciudad._id == this.props.match.params.id)


        return (
   
            <div>
                    
                <body style={{ backgroundImage: `url(${backGround})`, backgroundAttachment:"fixed" }}>
                
                  {idCity.map(ciudad => {
                      return(
                          <>
                            <header  id="headerIT" style={{ height: "60vh", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", marginBottom: "10px" }}>
                        <h1 id="tituloIT"className="sombra1"  style={{ margin: "20px",fontFamily:" sans-serif",display:"flex", justifyContent:"center", fontSize:"60px" }}>{ciudad.nameCity}</h1>

        
                        <div  id="imagenIT" className="sombra" style={{ height: "100%", width: "50%", backgroundImage: `url(${ciudad.url})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", marginTop: "10px" }}></div>

            
     
                    </header>
                          </>
                      )
                  })}
                    <div style={{ height: "5vh", width: "100%" }}>         </div>

                    <main id="main">
                        <div style={{ width: "100%", height: "100%" }}>
                            {this.state.itinerary.length == 0
                                ? <div id="contenedorVacio"><p>NOT ITINERARIES YET</p></div>
                                : this.state.itinerary.map(itinerario => {

                                    return <Itineraries itinerario = {itinerario}/>


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
const mapStateToProps = state =>{
    return {
        listaCiudades: state.cityRed
    }
}
const mapDispatchToProps = {
    listCities: citiesActions.listaCiudades
   
}

export default connect (mapStateToProps, mapDispatchToProps) (Itinerary)