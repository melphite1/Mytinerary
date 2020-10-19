const initialState = {
    comments: [],
       listaCOM : []
}

const commentsRed = (state = initialState, action) => {
    switch (action.type) {
        case "CREARCOMENTARIOS":
            return {
                ...state,
                comments: action.payload
            }

        case "COMLISTA":
            return {
                ...state,
                listaCOM: action.payload

            }
        default:
            return state
    }
}

export default commentsRed