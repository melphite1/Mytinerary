import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Logo from "../components/Logo"
import backGround from "../imagenes/fondo.jpg"
import "../styles/cities.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Ciudad from "../components/Ciudad"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import citiesActions from "../redux/actions/ActionsgetCities"




class Cities extends React.Component {


    componentDidMount() {
        this.props.listCities()


    }

    capturoValor = e => {

        const valorCapturado = e.target.value
        this.props.filteredCities(valorCapturado)



    }

    render() {
        const element = <FontAwesomeIcon icon={faSearch} />
        console.log(this.props)

        const noCities = () => {
            if (this.props.listaCiudades.listaCiudadesFiltradas.length == 0) {
                return (
                    <>
                        <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                            <h1 style={{ color: "black" }}>NO CITY FOUND</h1><img src={require("../imagenes/urban.png")}></img>
                        </div>
           

                    </>
                )
            }
        }
        return (

            <>

                <body style={{ backgroundImage: `url(${backGround})`, backgroundAttachment: "fixed" }}>
                    <Header />
                    <Logo />

                    <main id="main2" style={{ backgroundSize: "cover", backgroundPosition: "center", display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "center", minHeight: "80vh", height: "80%" }}>
                        <div id="search">
                            <div style={{ marginRight: "10px" }}>{element}</div>
                            <input type="text" id="name" name="name" placeholder="Where do you want to travel ?" onChange={this.capturoValor}></input>
                        </div>
                        <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        {noCities()}

                            <ul style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "start", height: "100%", alignItems: "center" }}>


                                {this.props.listaCiudades.listaCiudadesFiltradas.map(ciudad => {
                                  
                                    return (
                                        <>


                                         
                                            <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }} >
                                                <NavLink to={`itinerary/${ciudad._id}`} activeClassName="selected"><Ciudad ciudad={ciudad} /></NavLink>
                                            </div>

                                        </>



                                    )
                                })}
                            </ul>

                        </div>


                    </main>
                    <Footer />
                </body>
            </>
        )
    }
}
const mapStateToProps = state => {
    return {
        listaCiudades: state.cityRed
    }
}

const mapDispatchToProps = {
    listCities: citiesActions.listaCiudades,
    filteredCities: citiesActions.filtrarCiudades
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)