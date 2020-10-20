const User = require("../models/User")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

const usuarioController = {

    nuevoUsuario :  async (req, res) => {

        const { name, lastname, email, username, password, picurl, country } = req.body
        const passwordHash = bcryptjs.hashSync(password.trim(), 10)
        const userExists = await User.findOne({username: username})

        if (userExists){
            res.json({success: false, error: "El nombre de usuario ya existe."})
        } else {
            const newUser= new User({
                name: name.trim(), lastname: lastname.trim(), email: email.trim(), username: username.trim(), password: passwordHash, picurl:picurl.trim(), country
            })

           var user = await newUser.save()
          jwt.sign({...newUser}, process.env.SECRETORKEY, {}, (error, token) =>{
              if(error){
                  res.json({success: false, error})
              } else {
                res.json({success: true, token, urlpic: newUser.picurl, username: newUser.username })
              }
          })

        }

    },

    tokenLS: (req, res) => {

        const {name, lastname, email, username, picurl, country} = req.user
        res.json({
            success: true, name, lastname, email, username, picurl, country
        })
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
                jwt.sign({...userExist}, process.env.SECRETORKEY, {}, (error, token) => {
                    if(error){
                        res.json({success: false, error: "Ha ocurrido un error"} )
                    }else{
                     
                        res.json({success: true, token, picurl: userExist.picurl, username: userExist.username})
                    }
                })
    
            }


        }

    },

  



}

module.exports = usuarioController