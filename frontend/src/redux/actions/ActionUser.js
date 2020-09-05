import axios from "axios"
const usuarioActions = {
    crearCuenta : newUser =>{
        return async (dispatch, getState) =>{
            const respuesta = await axios.post("http://localhost:4000/api/userRegister", newUser)
       
            if( !respuesta.data.success){
                alert(respuesta.data.error)
            } else {
                dispatch({
                    type: "NEW_USER",
                    payload: respuesta.data.user
                })
            }
        }
    }
}

export default usuarioActions