import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class Activities extends Component {
  state = {

    mostrar: false

}
  render() {
    const mostrar = () => {

      this.setState({
        mostrar: !this.state.mostrar
      })
    }
    return (
      <>
        <div style={{ backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>{this.state.mostrar && <div><h1>Hoal</h1></div>}<Button onClick={mostrar}>{this.state.mostrar ? "View less" : "View more"} </Button></div>
      </>
    )
  }
}
