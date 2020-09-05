const mongoose = require("mongoose")

const ActivitySchema = new mongoose.Schema({
    idItinerary : {type: mongoose.Types.ObjectId, ref:"itinerary", required: true},
    activities: {type: Array, required: true},
})

const  Activity = mongoose.model("Activity", ActivitySchema)

module.exports = Activity