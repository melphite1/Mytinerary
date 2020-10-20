import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { connect } from "react-redux"
import usuarioActions from '../redux/actions/ActionUser';
import "../styles/itinerarys.css"
import backGround from "../imagenes/fondo.jpg"
import swal from "sweetalert"
import { NavLink } from 'react-router-dom'



const SignIn = (props) => {

    const [loginUser, setloginUser] = useState({
        username: " ", password: " "
    })

    const CapturarValor = e => {
        setloginUser({
            ...loginUser,
            [e.target.name]: e.target.value
        })

    }
    const validacionDatos = (objeto)  => {
        let resultado = true
        Object.values(objeto).map(campos => {
          if (campos === "") {
            resultado = false
          }
        })
    
        return resultado
    
      }
    const   enviarInfo = async e => {
        e.preventDefault()
        if(validacionDatos(loginUser) === true){
       await props.loguear(loginUser)
        } else {
            swal("Hay campos sin completar");
        }
    
    
      }

 

    return (

        <>
 <body style={{backgroundImage:`url(${backGround})`,backgroundAttachment:"fixed"}}>
         
            <div className="singUpContainer">
                <h1>Entrar A mi cuenta</h1>
                <input type="text" placeholder="Username" name="username" onChange={CapturarValor}></input>
                <input type="password" placeholder="Password" name="password" onChange={CapturarValor}></input>
                <button onClick={enviarInfo}>Login</button>

                <NavLink to="/Sign-Up">Go to Sign Up</NavLink>
            </div>
            <Footer />
            </body>
        </>
    );
}
const mapStateToProps = state => {
    return {
        usuarios: state.userRed
    }
}

const mapDispatchToProps = {
    loguear: usuarioActions.loguearUsuario

}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)