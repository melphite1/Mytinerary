const express = require ("express")
const rutas = express.Router()
const controllerCities = require("../controllers/controllerCities")


rutas.route("/cities")
.get(controllerCities.GetCities)
.post(controllerCities.grabarNuevaCitie)

module.exports = rutas