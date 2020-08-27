const mongoose = require("mongoose")

const ItinerarySchema = new mongoose.Schema({
    hashtag: {type: Array, required:true},
    comments:{type: Array},
    title : {type: String, required: true},
    profilePic:{type: String,required: true},
    rating :{type: Number, required:true},
    duration :{type: Number, required:true},
    price :{type: Number, required:true},
    cityId: {type: mongoose.Types.ObjectId, ref: "City"}
})


const itinerary = mongoose.model("itinerary", ItinerarySchema)

module.exports = itinerary
