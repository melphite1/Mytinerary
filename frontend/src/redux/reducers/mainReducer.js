import cityReducer from "./cityReducer"
import userReducer from "./userReducer";
const { combineReducers } = require("redux");


const mainReducer = combineReducers({
    cityRed : cityReducer,
    userRed: userReducer
})


export default mainReducer