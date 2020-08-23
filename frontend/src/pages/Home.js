import React from "react"

import Browser from "../components/Browser"
import backGround from "../imagenes/fondo.jpg"
import Carousel1 from "../components/Carousel"

import Header from "../components/Header"
import Logo from "../components/Logo"
import Footer from "../components/Footer"











class Home extends React.Component {

  render() {
    return (
      <>
        <body style={{backgroundImage:`url(${backGround})`}}>
        <Header/>
        <Logo/>
          <main id="main1">
            <div><Browser /></div>
            <div>   <Carousel1 /></div>
          </main>
          <Footer/>
        </body>
      </>


    )
  }
}

export default Home