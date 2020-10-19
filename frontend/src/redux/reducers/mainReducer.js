import cityReducer from "./cityReducer"
import userReducer from "./userReducer";
import commentsRed from "./ItinerarioReducer";
const { combineReducers } = require("redux");


const mainReducer = combineReducers({
    cityRed : cityReducer,
    userRed: userReducer,
    CommentsRed: commentsRed
})


export default mainReducer