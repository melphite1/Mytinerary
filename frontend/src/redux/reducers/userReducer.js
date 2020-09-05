const initialState = {
    name:"",
    lastname:"",
    password:"",
    email:"",
    urlpic:"",
    country:"",
    username:""
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "NEW_USER":
            return {
                ...state,
                name: action.payload.name,  
                lastname: action.payload.lastname,  
                password: action.payload.password,  
                email: action.payload.email,  
                urlpic: action.payload.urlpic,  
                country: action.payload.country,  
                username: action.payload.username 
            }
        default:
            return state

    }
}

export default userReducer