const itinerary = require("../models/Itinerary")
const Usuario = require("../models/User")
const controllerIty = {

    getItinerarys: async (req, res) => {
        const itineraries = await itinerary.find()

        res.json({
            succes: true,
            itineraries: itineraries

        })
    },

    saveItinerary: async (req, res) => {
        const { hashtag, title, profilePic, rating, duration, price, cityId, comments } = req.body

        const newItinerary = new itinerary({
            hashtag: hashtag,
            comments: comments,
            title: title,
            profilePic: profilePic,
            rating: rating,
            duration: duration,
            price: price,
            cityId: cityId
        })

        const savedItynerary = await newItinerary.save()

            .then(itinerary => {
                res.json({
                    succes: true, itinerary: itinerary
                })
            })

            .catch(error => {
                res.json({
                    succes: false, error: error
                })
            })



    },
    getItinerary: async (req, res) => {


        const itinerarioBuscado = await itinerary.find({ cityId: req.params.id })
        res.json(
            {
                itinerario: itinerarioBuscado
            }
        )
    },

    addComment: async (req, res) => {
        const newcomment = req.body.comentario

        const Comentarios = await itinerary.findOneAndUpdate({ _id: req.body.id }, { $push: { comments: newcomment } }, { new: true },)

        res.json({
            success: true, comments: Comentarios
        })
    },
    modifyComment: async (req, res) => {
       
      
        
    },
    deleteComment: async (req, res) => {
        const { id, idITI } = req.body
        const itinerario = await itinerary.findOne({ _id: idITI })
        const comFiltrado = itinerario.comments.filter(comentario => comentario.idComentario != id)
        const newComments = await itinerary.findByIdAndUpdate({ _id: idITI }, { comments: comFiltrado }, { new: true })

        res.json({
            success: true, comments: newComments.comments
        })
    },
    getComment: async (req, res) => {
        const getItinerarioSolo = await itinerary.findOne({ _id: req.body.id })

        res.json({
            succes: true, comments: getItinerarioSolo.comments

        })

    },
    Like: async (req, res) => {

        const usuarioFav = await Usuario.findOneAndUpdate({ username: req.body.username }, { $push: { favItineraries: req.body.id } }, { new: true })
        const ItinerarioLikeado = await itinerary.findOneAndUpdate({ _id: req.body.id }, { $inc: { rating: 1 } }, { new: true })
        res.json({
            succes: true, likeado: ItinerarioLikeado, usuarioFav: usuarioFav
        })
    },
    Dislike: async (req, res) => {
        const usuarioFav = await Usuario.findOneAndUpdate({ username: req.body.username }, { $pull: { favItineraries: req.body.id } }, { new: true })
        const ItinerarioLikeado = await itinerary.findOneAndUpdate({ _id: req.body.id }, { $inc: { rating: -1 } }, { new: true })
        res.json({
            succes: true, likeado: ItinerarioLikeado
        })
    }

}




module.exports = controllerIty 