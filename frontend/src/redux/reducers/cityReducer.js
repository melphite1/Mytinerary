const initialState = {
    listaCiudades: [],
    listaCiudadesFiltradas: []
}

const cityReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CITIES":
            return {
                ...state,
                listaCiudades: action.payload,
                listaCiudadesFiltradas: action.payload
            }


        case "FILTER_CITIES":
            const filtrado = state.listaCiudades.filter(ciudad => ciudad.nameCity.toLowerCase().indexOf(action.payload.trim().toLowerCase()) == 0)
            return {
                ...state,
                listaCiudadesFiltradas: filtrado
            }


        default:
            return state

    }
}

export default cityReducer   