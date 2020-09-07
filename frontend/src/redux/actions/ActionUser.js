import axios from "axios"
const usuarioActions = {
    crearCuenta: newUser => {
        return async (dispatch, getState) => {
            const respuesta = await axios.post("http://localhost:4000/api/userRegister", newUser)

            if (!respuesta.data.success) {
                alert(respuesta.data.error)
            } else {
                dispatch({
                    type: "LOG_USER_TO_APP",
                    payload: respuesta.data.user
                })
            }
        }
    },

    loguearUsuario: usuarioALoguear => {
        return async (dispatch, getState) => {
            const respuesta = await axios.post("http://localhost:4000/api/login", usuarioALoguear)
            if (!respuesta.data.success) {
                alert(respuesta.data.mensaje)
            } else {
                dispatch({
                    type: "LOG_USER_TO_APP",
                    payload: respuesta.data.user

                })

            }
        }
    },

    desloguear: () =>{
        return(dispatch, getState) =>{
            dispatch({
                type: "UNLOG_USER"
            })
        }
    }
}

export default usuarioActions