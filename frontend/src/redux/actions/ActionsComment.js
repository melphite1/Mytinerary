import axios from "axios"

const ActionsComment = {
    CrearComentario: (id, comentario) => {
        return async (dispatch, getState) => {
            const respuesta = await axios.put("http://localhost:4000/api/itineraries", {  id: id, comentario: comentario })
            const info = respuesta.data.comments
           
            dispatch({
                type: "CREARCOMENTARIOS",
                payload: info
            })
        }
      
    },

    listaComentario: (id) => {
        return async (dispatch, getState) => {
            const respuesta = await axios.post("http://localhost:4000/api/comments", {  id: id })

            const info = respuesta.data.comments
           
            dispatch({
                type: "COMLISTA",
                payload: info
            })
        }
      
    },

    deleteAction:(id, iditinerario) =>{
        return async (dispatch, getState) =>{
        const respuesta = await axios.put("http://localhost:4000/api/comments", {id: id, idITI: iditinerario})
            const info = respuesta.data.comments
           
            dispatch({
                type: "COMLISTA",
                payload: info
            })
        }
    },
    modifyAction:(id, iditinerario, newComment) =>{
        return async (dispatch, getState) =>{
        const respuesta = await axios.put("http://localhost:4000/api/edditComments", {id: id, idITI: iditinerario, newComment: newComment})
            const info = respuesta.data.comments
            console.log(info)
           
            dispatch({
                type: "COMLISTA",
                payload: info
            })
        }
    }
}  
export default ActionsComment