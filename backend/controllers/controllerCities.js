const City = require("../models/City")
const controllerCities = {

    GetCities:  async (req, res) => {
        // pedirle base de datos lista de cities
            const lista =  await City.find()
        // devolver  al front end  la lista  de cities  de la base de datos 
        res.json({
            success: true,
            ciudades: lista

        })
    },
    getCity:  async (req, res) => {
        // pedirle base de datos lista de cities
            const ciudadBuscada =  await City.findOne({_id: req.params.id})
        // devolver  al front end  la lista  de cities  de la base de datos 
        res.json({
                ciudad : ciudadBuscada

        })
    },




    grabarNuevaCitie: (req, res) => {
        // abro la peticion que llega del frontend y se extrae la informacion de la nueva citie
        const { nameCity,nameCountry,url } = req.body


        // validar datos 
        const nuevaCiudad = new City({
            nameCity:nameCity,
            nameCountry:nameCountry,
            url:url
        })
        //grabar nueva ciudad
        nuevaCiudad.save()
            .then(city => {
                res.json({
                    success: true, city: city
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