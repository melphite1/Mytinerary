import React from 'react'
import "../styles/signUpIN.css"
import Header from '../components/Header'
import Footer from '../components/Footer'
import { connect } from "react-redux"
import usuarioActions from '../redux/actions/ActionUser'
import "../styles/itinerarys.css"
import backGround from "../imagenes/fondo.jpg"
import swal from "sweetalert"


class SignUp extends React.Component {
  state = {
    countries: [
      { country: "Spain", value: "ES" },
      { country: "Argentina", value: "AR" },
      { country: "Brasil", value: "BR" },
      { country: "France", value: "FR" },
      { country: "Ingland", value: "IN" },
      { country: "Portugal", value: "PO" },
      { country: "United States", value: "US" },
      { country: "Mexico", value: "MX" },
      { country: "Chile", value: "CH" },
      { country: "Italy", value: "IT" },

    ],

    newUser: {
      name: "",
      lastname: "",
      email: "",
      username: "",
      password: "",
      picurl: "",
      country: ""

    }
  }
  CapturarValor = e => {
    const campo = e.target.name
    const valor = e.target.value
    this.setState({
      newUser: {
        ...this.state.newUser,
        [e.target.name]: e.target.value
      }
    })
  }
  validacionDatos(objeto) {
    let resultado = true
    Object.values(objeto).map(campos => {
      if (campos === "") {
        resultado = false
      }
    })

    return resultado

  }

  enviarInfo =async e => {
    e.preventDefault()
    if (this.validacionDatos(this.state.newUser) === true) {
      await this.props.crearCuenta(this.state.newUser)
    

    } else {
      swal("Hay campos sin completar");
    }


    if(this.props.usuarios.token !== ""){
      this.props.history.push("/")
   }

  }


  render() {
    
    return (

      <>
      <body style={{backgroundImage:`url(${backGround})`,backgroundAttachment:"fixed"}}>
        <Header />
        <div className="singUpContainer">
          <h1>Create account </h1>

          <input type="text" placeholder="Name" name="name" onChange={this.CapturarValor}></input>
          <input type="text" placeholder="Last name" name="lastname" onChange={this.CapturarValor}></input>
          <input type="text" placeholder="Email" name="email" onChange={this.CapturarValor}></input>
          <input type="text" placeholder="Username" name="username" onChange={this.CapturarValor}></input>
          <input type="password" placeholder="Password" name="password" onChange={this.CapturarValor}></input>
          <input type="text" placeholder="Pic url" name="picurl" onChange={this.CapturarValor}></input>
          <label>Choose your Country</label>
          <select onChange={this.CapturarValor} name="country">
            <option value="" disabled selected hidden>Choose One</option>
            {this.state.countries.map(country => {
              return <option value={country.value}>{country.country}</option>
            })}
          </select>
          <button onClick={this.enviarInfo}>Sign UP</button>
        </div>
        <Footer />
        </body>
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
  crearCuenta: usuarioActions.crearCuenta,

}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)