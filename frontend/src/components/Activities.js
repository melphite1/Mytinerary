import React from 'react'
import axios from "axios"
import css from "../styles/Activities.css"
import { connect } from "react-redux"
import citiesActions from '../redux/actions/ActionsgetCities'
import ActionsComment from '../redux/actions/ActionsComment'
import { Button } from "react-bootstrap"
import swal from "sweetalert"



class Activities extends React.Component {
  state = {
    activities: [],
    comentario: {},
    campoAmodificar: false,
    nuevoComentario: {}





  }

  async componentDidMount() {
    const id = await this.props.Activities.itinerario._id
    await this.props.getListaCOM(id)
    await this.props.getCities()




    const idItinerario = this.props.Activities.itinerario._id
    const respuesta = await axios.post("http://localhost:4000/api/activities", { id: idItinerario })
    const activities = respuesta.data.oneActivity

    this.setState({
      activities: activities,

    })
  }

  CapturarValor = e => {

    this.setState({
      comentario: {
        [e.target.name]: e.target.value,
        idComentario: parseInt(Math.random() * (9999999999 - 0) + 0),
        username: this.props.usuarios.username
      }

    })
  }
  CapturarValorNuevoComent = e => {

    this.setState({
      nuevoComentario: {
        [e.target.name]: e.target.value,

      }

    })
  }

  EnviarInfo = async e => {
    e.preventDefault()
    if (this.props.usuarios.username == "") {
      swal("Para comentar ingrese a una cuenta porfavor");
    } else {
      const ComentarioObjeto = this.state.comentario
      const idItinerario = this.props.Activities.itinerario._id
      await this.props.crearComment(idItinerario, ComentarioObjeto)
      const id = this.props.Activities.itinerario._id
      await this.props.getListaCOM(id)
      this.setState({
        comentario: {
          comment: ""
        }

      })
    }

  }
  deleteComment = async (e) => {
    const id = e.target.id
    const idItinerario = this.props.Activities.itinerario._id
    await this.props.deleteComment(id, idItinerario)
    await this.props.getListaCOM(id)
  }

  openEditComment = () => {
    this.setState({
      campoAmodificar: !this.state.campoAmodificar

    })
  }
  editComment = async (e) => {
    const id = e.target.id
    const idItinerario = this.props.Activities.itinerario._id
    const newcomment = this.state.nuevoComentario.comment
    await this.props.modifyComment(id, idItinerario, newcomment)
    await this.props.getListaCOM(id)
  }
  render() {

    return (
      <>
        <div  className ="caja"style={{ textAlign: "center" }}><h1>Activities</h1>
          <div id="contenedorAct">
            {this.state.activities.map(activity => {
              return activity.activities.map(actividad => {
                return <div style={{ backgroundImage: `url(${actividad.urlfoto})`, display: "flex", width: "40%", height: "40vh", backgroundSize: "cover", display: "flex", alignItems: "center", justifyContent: "center" }}><p id="tituloFoto">{actividad.title}</p></div>
              })
            })}
          </div>
          <div className ="caja">
            <h1>COMENTARIOS</h1>
            {this.props.listaCom.listaCOM.map(comentario => {
              return (
                <>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "70%", minHeight: "5vh" }}>
                    {comentario.username !== this.props.usuarios.username
                      ?
                      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <p style={{ marginBottom: "0" }}>{comentario.username}: {comentario.comment}</p>
                      </div>
                      : <div><p style={{ display: "flex", marginBottom: "0", flexDirection: "row", width: "100%" }}>{comentario.username}: {comentario.comment}</p>
                        {this.state.campoAmodificar ?
                          <>
                            <button className="boton" onClick={this.editComment} id={comentario.idComentario}>Enviar</button>
                            <input type="text" placeholder="Edit your comment" name="comment" onChange={this.CapturarValorNuevoComent} value={this.state.comentario.comment}></input>

                          </>
                          : ""}
                        <Button variant="primary" onClick={this.openEditComment}>Modificar</Button>
                        <Button variant="danger" onClick={this.deleteComment} id={comentario.idComentario}>Borrar</Button>
                      </div>}

                  </div>
                </>)


            })}
            <input type="text" style={{ textAlign: "center" }} placeholder="Leave a comment" name="comment" onChange={this.CapturarValor} value={this.state.comentario.comment}></input>
            <Button variant="dark" onClick={this.EnviarInfo}>Comentar</Button>
          </div>
        </div>
      </>
    )
  }
}
const mapStateToProps = state => {
  return {
    usuarios: state.userRed,
    listadoDeCiudades: state.cityRed,
    listaCom: state.CommentsRed
  }
}

const mapDispatchToProps = {
  crearComment: ActionsComment.CrearComentario,
  getCities: citiesActions.listaCiudades,
  getListaCOM: ActionsComment.listaComentario,
  deleteComment: ActionsComment.deleteAction,
  modifyComment: ActionsComment.modifyAction
}
export default connect(mapStateToProps, mapDispatchToProps)(Activities)
