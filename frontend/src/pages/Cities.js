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




class Cities extends React.Component {
    state = {
        ciudades: [],
        ciudadesFiltradas: [],

    }

    componentDidMount() {
        fetch("http://localhost:4000/api/cities")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    ciudades: data.ciudades,
                    ciudadesFiltradas: data.ciudades



                })

            }
            )


    }

    capturoValor = e => {

        const valorCapturado = e.target.value
        const filtrado = this.state.ciudades.filter(ciudad => ciudad.nameCity.toLowerCase().indexOf(valorCapturado.trim().toLowerCase()) == 0)


        if (filtrado == 0) {
            this.setState({
                ciudadesFiltradas: ["vacio"],

            })
        } else {
            this.setState({
                ciudadesFiltradas: filtrado,

            })
        }



    }

    render() {
        const element = <FontAwesomeIcon icon={faSearch} />

        return (

            <>

                <body style={{ backgroundImage: `url(${backGround})` }}>
                    <Header />
                    <Logo />

                    <main id="main2" style={{ backgroundSize: "cover", backgroundPosition: "center", display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "center", minHeight: "80vh", height: "80%" }}>
                        <div id="search">
                            <div style={{ marginRight: "10px" }}>{element}</div>
                            <input type="text" id="name" name="name" placeholder="Where do you want to travel ?" onChange={this.capturoValor}></input>
                        </div>
                        <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>


                            <ul style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "start", height: "100%", alignItems: "center" }}>


                                {this.state.ciudadesFiltradas.map(ciudad => {

                                    return (
                                        <>

                                            <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }} >
                                            <NavLink to={`itinerary/${ciudad._id }`} activeClassName="selected"><Ciudad ciudad={ciudad} /></NavLink>
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


export default Cities