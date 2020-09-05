import React from 'react'
import "../styles/signUpIN.css"
import Header from '../components/Header'
import Footer from '../components/Footer'
import Connect, { connect } from "react-redux"
import ActionUser from "../redux/actions/ActionUser"
import usuarioActions from '../redux/actions/ActionUser'

class SignUp extends React.Component {
    state={
        countries:[
            {country: "Spain", value:"ES"},
            {country: "Argentina", value:"AR"},
            {country: "Brasil", value:"BR"},
            {country: "France", value:"FR"},
            {country: "Ingland", value:"IN"},
            {country: "Portugal", value:"PO"},
            {country: "United States", value:"US"},
            {country: "Mexico", value:"MX"},
            {country: "Chile", value:"CH"},
            {country: "Italy", value:"IT"},

        ],

        newUser:{
            name:"",
            lastname:"",
            email:"",
            username:"",
            password:"",
            picurl:"",
            country:""
   
        }
    }
    CapturarValor = e =>{
        const campo = e.target.name
        const valor = e.target.value
        this.setState({
           newUser:{
           ...this.state.newUser,
               [e.target.name] : e.target.value
           }
        })
    }
validacionDatos (campo) {
  const objeto = this.state.newUser
  Object.values(objeto)
  return  this.state.newUser[campo].length== 0
    
}

   enviarInfo = e=>{
        e.preventDefault()
        this.props.crearCuenta(this.state.newUser)
      
    }
  render() {

    return (
      
      <>
      <Header/>
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
            {this.state.countries.map(country=>{
                return <option value={country.value}>{country.country}</option>
            })}
        </select>
        <button onClick={this.enviarInfo}>Sign UP</button>
        </div>
        <Footer/>
      </>
    )
  }
}



const mapDispatchToProps = {
  crearCuenta : usuarioActions.crearCuenta,
 
}

export default connect (null, mapDispatchToProps) (SignUp)