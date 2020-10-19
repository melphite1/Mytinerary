import React from 'react'
import Activities from "../components/Activities"
import { connect } from "react-redux"
import usuarioActions from '../redux/actions/ActionUser'
import {Button} from "react-bootstrap"

class Itineraries extends React.Component {

    state = {

        mostrar: false,
        like: false

    }

    render() {


        const mostrar = () => {

            this.setState({
                mostrar: !this.state.mostrar,


            })

        }

        const likearDislikear = async () => {

            if (this.state.like === false) {

                const username = this.props.usuarios.username
                const iditi = this.props.itinerario._id
                const respuesta = await this.props.likear(iditi, username)

                this.setState({
                    like: !this.state.like
                })
            } else if (this.state.like === true) {
                const username = this.props.usuarios.username
                const iditi = this.props.itinerario._id
                const respuesta = await this.props.dislikear(iditi, username)
                this.setState({
                    like: !this.state.like
                })
            }

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

                                    {!this.state.like ? <p className="informacionITI" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}><img src={require("../imagenes/like.png")} style={{ width: "50px", cursor: "pointer" }} onClick={likearDislikear}></img> {this.props.itinerario.rating}</p> : <p className="informacionITI" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}><img src={require("../imagenes/like2.png")} style={{ width: "50px", cursor: "pointer" }} onClick={likearDislikear}></img> {this.props.itinerario.rating}</p>}

                                    <p className="informacionITI" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}><img src={require("../imagenes/hour.png")} style={{ width: "50px" }}></img>{this.props.itinerario.duration} Hours</p>
                                    <p className="informacionITI" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>Price: <div>{renderizoPrecio}</div></p>


                                </div>
                            </div>
                            <div id="logoIT" style={{ marginRight: "200px" }}><img src={require("../imagenes/logoPag.jpg")} style={{ width: "250px" }}></img> </div>
                        </div>
                    </div>
                    {this.state.mostrar && <Activities Activities={this.props} />}
                    <div><Button variant="light"onClick={mostrar}>{this.state.mostrar ? "View less" : " View more"}</Button></div>

                </div>

            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        usuarios: state.userRed
    }
}
const mapDispatchToProps = {
    likear: usuarioActions.like,
    dislikear: usuarioActions.dislike
}
export default connect(mapStateToProps, mapDispatchToProps)(Itineraries)