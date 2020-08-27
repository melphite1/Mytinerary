const itinerary = require("../models/Itinerary")
const controllerIty = {

    getItinerarys: async (req, res) =>{
        const  itineraries = await itinerary.find()

        res.json({
            succes : true,
            itineraries : itineraries
            
        })},

    saveItinerary:  async (req, res)  =>{
        const {hashtag, title,profilePic,rating,duration,price,cityId, comments} = req.body

        const newItinerary = new itinerary({
            hashtag:hashtag,
            comments: comments,
            title:title,
            profilePic:profilePic,
            rating:rating,
            duration:duration,
            price:price,
            cityId:cityId
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
    getItinerary: async (req, res) =>{

      
             const  itinerarioBuscado = await  itinerary.find({cityId: req.params.id})
             res.json(
                {
                     itinerario : itinerarioBuscado
                }
             )
    }

}

module.exports = controllerIty 