const passport = require("passport")
const jwtStrategy = require("passport-jwt").Strategy
const ExtraJwt = require("passport-jwt").ExtractJwt


const Usuario = require("../models/User")


module.exports = passport.use(new jwtStrategy({
    jwtFromRequest: ExtraJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRETORKEY
},(payload, done) =>{
    Usuario.findById(payload._doc._id)
    .then(user =>{
        if(!user){
            return done(null, false)
        } else {
            return(null, user)
        }
    })
    .catch(error  =>{
      return  done(error, false)
    })

}))

