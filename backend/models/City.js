const mongoose = require("mongoose")

const CitySchema = new mongoose.Schema({
    nameCity : {type: String, required: true},
    nameCountry:{type: String,required: true},
    url: {type: String, required: true},
})


const City = mongoose.model("City", CitySchema)

module.exports =City
