import axios from "axios"
const usuarioActions = {
    crearCuenta: newUser => {
        return async (dispatch, getState) => {
            const respuesta = await axios.post("http://localhost:4000/api/userRegister", newUser)
console.log(respuesta)
            if (!respuesta.data.success) {
                alert(respuesta.data.error)
            } else {
                dispatch({
                    type: "LOG_USER_TO_APP",
                    payload: {
                        token: respuesta.data.token,
                        username: respuesta.data.username,
                        picurl: respuesta.data.picurl
                    }
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
                    payload: {
                        token: respuesta.data.token,
                        username: respuesta.data.username,
                        picurl: respuesta.data.picurl
                    }


                })

            }
        }
    },
    forcedLogin: (tokenLS) => {
        
        return async (dispatch, getState) => {
            const respuesta = await axios.get("http://localhost:4000/api/tokenLS", {
                headers: {
                    Authorization: `Bearer ${tokenLS}`
                }
            })
     
            dispatch({
                type: "LOG_USER_TO_APP",
                payload: {
                    token: tokenLS,
                    username: respuesta.data.username,
                    picurl: respuesta.data.picurl
                }
            })
        }
    },
    desloguear: () => {
        return (dispatch, getState) => {
            dispatch({
                type: "UNLOG_USER"
            })
        }
    },


    like: (id, username) => {
        return async (dispatch, getState) => {
        const respuesta =   await axios.put("http://localhost:4000/api/like", {id : id, username: username})
            return respuesta
        }
    },
    dislike: (id, username) => {
        return async (dispatch, getState) => {
        const respuesta =   await axios.put("http://localhost:4000/api/dislike", {id : id, username: username})
            return respuesta
        }
    }





}

export default usuarioActions