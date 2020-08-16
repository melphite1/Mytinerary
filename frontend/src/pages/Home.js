import React from "react"
import Header from "../components/Header"
import Browser from "../components/Browser"
import Footer from "../components/Footer"
import Carousel1 from "../components/Carousel"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Logo from "../components/Logo"
import backGround from "../imagenes/fondo.jpg"








class Home extends React.Component {

  render() {
    return (
      <>
        <body style={{backgroundImage:`url(${backGround})`}}>
          <Header />
          <Logo />
          <main id="main1">
            <div><Browser /></div>
            <div>   <Carousel1 /></div>
          </main>
          <Footer />
        </body>
      </>


    )
  }
}

export default Home