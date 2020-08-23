const express = require ("express")//libreria de node para  mejor manejo a la hora de construir apis
const cors = require("cors")
const rutas=  require("./routes/index")
//ejecutar ddotevn variables de entorno

require("dotenv").config()

// ejecutame la coneccion al base de datos
require("./config/db")




//Crear elemento servidor


const servidor  = express()


//Middleware// Los middlewere funciones cosas que pasan antes de llegar a la ruta 
servidor.use(cors())//acepta peticiones de cualqueir frontend
servidor.use(express.json())//json la formato que viajan los datos entre el frontend y el backend

//Rutas

servidor.use("/api", rutas)


servidor.listen(4000, () => console.log("app listening on port  4000"))