const express = require ("express")
const rutas = express.Router()
const controllerCities = require("../controllers/controllerCities")
const controllerIty = require("../controllers/controllerIty")

rutas.route("/itinerary/:id")
.get(controllerIty.getItinerary)

rutas.route("/cities")
.get(controllerCities.GetCities)

.post(controllerCities.grabarNuevaCitie)

rutas.route("/itineraries")
.get(controllerIty.getItinerarys)
.post(controllerIty.saveItinerary)


rutas.route("/city/:id")
.get(controllerCities.getCity)



module.exports = rutas