const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name : {type:"string", required: true},
    lastname : {type:"string", required: true},
    email: {type:"string", required: true},
    username: {type:"string", required: true},
    password: {type: "string", required: true},
    picurl: {type:"string", required: true},
    country:{ type:"string", required: true},
    favItineraries:{type: Array}
})
const user = mongoose.model("user", userSchema)

module.exports = user