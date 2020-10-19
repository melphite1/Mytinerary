const initialState = {
    token: "",
    picurl: "",
    username: "",

}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOG_USER_TO_APP":
            localStorage.setItem("token", action.payload.token)
            return {
                ...state,
                token: action.payload.token,
                picurl: action.payload.picurl,
                username: action.payload.username,

            }
        case "UNLOG_USER":
            localStorage.clear()
            return {
                ...state,
                ...initialState
            }

        default:
            return state

    }
}

export default userReducer