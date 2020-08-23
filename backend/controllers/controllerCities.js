const City = require("../models/City")
const controllerCities = {

    GetCities:  async (req, res) => {
        // pedirle base de datos lista de cities
            const lista =  await City.find()
        // devolver  al front end  la lista  de cities  de la base de datos 
        res.json({
            succes: true,
            ciudades: lista

        })
    },




    grabarNuevaCitie: (req, res) => {
        // abro la peticion que llega del frontend y se extrae la informacion de la nueva citie
        const { nameCity,nameCountry,url } = req.body


        // validar datos 
        const nuevaCiudad = new Ciudad({
            nameCity:nameCity,
            nameCountry:nameCountry,
            url:url
        })
        //grabar nueva ciudad
        nuevaCiudad.save()
            .then(city => {
                res.json({
                    succes: true, city: city
                })
            })
            .catch(error => {
                res.json({
                    succes: false, error: error
                })
            })



        //respuesta exitosa o no
        res.json({
            succes: true

        })
    }
}
module.exports = controllerCities