import React, { Component } from 'react'
import axios from "axios"



export default class Activities extends Component {
  state = {
    activities: []
  }

 async componentDidMount(){
  const idItinerario = this.props.props.itinerario._id
  const respuesta = await axios.post("http://localhost:4000/api/activities", {id: idItinerario})
  const activities = respuesta.data.oneActivity

  this.setState({
    activities: activities
  })
}

  render() {
    console.log(this.state.activities)

    return (
      <>
       <div><h1>hola</h1></div>
      </>
    )
  }
}
