const { default: Axios } = require("axios")

const citiesActions = {
    listaCiudades: () => {
        return async (dispatch, getState) => {
            const respuesta = await Axios.get("http://localhost:4000/api/cities")
           const info = respuesta.data.ciudades
           
            dispatch({
                type: "GET_CITIES",
                payload: info
            })
        }
    },
    filtrarCiudades : (filtro) =>{
        return async (dispatch,getState) =>{
            dispatch({
                type: "FILTER_CITIES",
                payload: filtro
            })
        }
    }
}


export default citiesActions