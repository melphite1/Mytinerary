import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const SignIn = () => {

    const [loginUser, setloginUser] = useState({
        username: " ", password: " "
    })

    const CapturarValor = e => {
        setloginUser({
            ...loginUser,
            [e.target.name]: e.target.value
        })

    }
    const enviarInfo = e => {
        e.preventDefault()
        console.log(loginUser)
    }

    return (
        <>
            <Header />
            <div className="singUpContainer">
                <h1>Entrar A mi cuenta</h1>
                <input type="text" placeholder="Username" name="username" onChange={CapturarValor}></input>
                <input type="password" placeholder="Password" name="password" onChange={CapturarValor}></input>
                <button onClick={enviarInfo}>Login</button>
            </div>
            <Footer/>
        </>
    );
}

export default SignIn