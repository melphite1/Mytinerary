import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Logo from "../components/Logo"
import backGround from "../imagenes/fondo.jpg"
import "../styles/cities.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import fondo from "../imagenes/fondo2.jpg"
import Ciudad from "../components/Ciudad"



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
        const filtrado = this.state.ciudades.filter(ciudad => ciudad.nameCity.toLowerCase().indexOf(valorCapturado.trim().toLowerCase()) ? valorCapturado === ciudad.nameCity[0] : null !== -1)

        this.setState({
            ciudadesFiltradas: filtrado,

        })



    }
    render() {
        console.log(this.state.ciudades)
        const element = <FontAwesomeIcon icon={faSearch} />
        return (

            <>
                <body style={{ backgroundImage: `url(${backGround})` }}>
                    <Header />
                    <Logo />
                    <main id="main2" style={{ backgroundImage: `url(${fondo})`, backgroundSize: "cover", backgroundPosition: "center", display: "flex", flexDirection: "column", justifyContent:"start", height:"80%" }}>
                        <div id="search">
                            <div style={{ marginRight: "10px" }}>{element}</div>
                            <input type="text" id="name" name="name" placeholder="Where do you want to travel ?" onChange={this.capturoValor}></input>
                        </div>
                        <div style={{width:"100%", height:"80%", display:"flex", flexDirection:"row"}}>
                            <ul style={{ display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"center"}}>

                                {this.state.ciudadesFiltradas.map(ciudad => {

                                    return (
                                        <>
                                            <Ciudad ciudad={ciudad} />
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