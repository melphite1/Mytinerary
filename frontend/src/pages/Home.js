import React from "react"
import Browser from "../components/Browser"
import backGround from "../imagenes/fondo.jpg"
import Carousel1 from "../components/Carousel"
import Header from "../components/Header"
import Logo from "../components/Logo"
import Footer from "../components/Footer"
import { connect } from "react-redux"











class Home extends React.Component {

  render() {
    console.log(this.props)
    return (
      <>
        <body style={{backgroundImage:`url(${backGround})`,backgroundAttachment:"fixed"}}>
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
const mapStateToProps = state => {
  return {
      usuarios: state.userRed
  }
}




export default connect (mapStateToProps, null) (Home)