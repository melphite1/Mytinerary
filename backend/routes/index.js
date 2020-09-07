const express = require ("express")
const rutas = express.Router()
const controllerCities = require("../controllers/controllerCities")
const controllerIty = require("../controllers/controllerIty")
const controllerActivity = require("../controllers/controllerActivity")
const validator  = require("../config/validator")
const usuarioController = require("../controllers/controllerUser")

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

rutas.route("/activity")
.get(controllerActivity.getActivities)
.post(controllerActivity.postActivity)

rutas.route("/activities")
.post(controllerActivity.getAcitivy)

rutas.route("/userRegister")
.post(validator.validateData, usuarioController.nuevoUsuario)

rutas.route("/login")
.post(usuarioController.loguearUsuario)

module.exports = rutas