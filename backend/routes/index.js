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
.put(controllerIty.addComment)

rutas.route("/comments")
.post(controllerIty.getComment)
.put(controllerIty.deleteComment)

rutas.route("/edditComments")
.put(controllerIty.modifyComment)
rutas.route("/like")
.put(controllerIty.Like)

rutas.route("/dislike")
.put(controllerIty.Dislike)

rutas.route("/city/:id")
.get(controllerCities.getCity)

rutas.route("/activity")
.get(controllerActivity.getActivities)
.post(controllerActivity.postActivity)

rutas.route("/activities")
.post(controllerActivity.getAcitivy)

rutas.route("/userRegister")
.post( usuarioController.nuevoUsuario)

rutas.route("/login")
.post(usuarioController.loguearUsuario)


module.exports = rutas