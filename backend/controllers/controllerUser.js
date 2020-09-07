const User = require("../models/User")
const bcryptjs = require("bcryptjs")

const usuarioController = {

    nuevoUsuario :  async (req, res) => {

        const { name, lastname, email, username, password, picurl, country } = req.body
        const passwordHash = bcryptjs.hashSync(password, 10)
        const userExists = await User.findOne({username: username})

        if (userExists){
            res.json({success: false, error: "El nombre de usuario ya existe."})
        } else {
            const newUser= new User({
                name, lastname, email, username, password: passwordHash, picurl, country
            })

           var user = await newUser.save()
          
           res.json({ success: true, user})
        }

    },


    loguearUsuario: async (req, res) => {
        const {username, password} = req.body

        const userExist = await User.findOne({username})

        if(!userExist){
            res.json({
                success:false, mensaje:"Usuario y/o contraseña incorrectos"
            })
        } else {
            const passwordMatches =  bcryptjs.compareSync(password, userExist.password)

            if(!passwordMatches){
                res.json({
                    success:false, mensaje:"Usuario y/o contraseña incorrectos"
                })
            } else {
                res.json({
                    success: true, user: userExist 
                })
            }


        }

    }




}

module.exports = usuarioController