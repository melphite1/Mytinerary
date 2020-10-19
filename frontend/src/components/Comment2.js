import React, { useEffect } from 'react';
import { connect } from "react-redux"
import ActionsComment from '../redux/actions/ActionsComment';

function Comment(props) {
  useEffect(async () => {

  }, [])

  const deleteComment = async (e) => {
    const id = e.target.id
    console.log(id)
    const idItinerario = props.itinerario.itinerario._id
    props.deleteComment(id, idItinerario)
   



  }
  return (
    <>
      {props.comentarios.username !== props.usuarios.username
        ?
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <p style={{ marginBottom: "0" }}>{props.comentarios.username}: {props.comentarios.comment}</p>
        </div>
        : <div><p style={{ display: "flex", marginBottom: "0", flexDirection: "row", width: "100%" }}>{props.comentarios.username}: {props.comentarios.comment}</p>
          <button className="boton">Modificar</button>
          <button className="boton" onClick={deleteComment} id={props.comentarios.idComentario}>Borrar</button>
        </div>}
    </>
  );
}

const mapStateToProps = state => {
  return {
    usuarios: state.userRed,
    comentRed: state.CommentsRed

  }
}

const mapDispatchToProps = {
  deleteComment: ActionsComment.deleteAction,
  getListaCOM: ActionsComment.listaComentario
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)

