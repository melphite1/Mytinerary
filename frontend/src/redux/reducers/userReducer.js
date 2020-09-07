const initialState = {
    name:"",
    lastname:"",
    password:"",
    email:"",
    picurl:"",
    country:"",
    username:""
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOG_USER_TO_APP":
            return {
                ...state,
                name: action.payload.name,  
                lastname: action.payload.lastname,  
                password: action.payload.password,  
                email: action.payload.email,  
                picurl: action.payload.picurl,  
                country: action.payload.country,  
                username: action.payload.username 
            }
        case "UNLOG_USER":
            return{
                ...state,
                ...initialState 
            } 
        default:
            return state

    }
}

export default userReducer