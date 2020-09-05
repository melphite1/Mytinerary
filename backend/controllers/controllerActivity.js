const Activity = require("../models/Activity")


const controllerActivity = {

    getActivities: async (req, res) => {
        const lista = await Activity.find()
        res.json({
            succes: true,
            Activities : lista
        })
    },


    postActivity:  async (req, res) => {
        const {idItinerary, activities } = req.body
        
        const newActivity = new Activity({
            idItinerary: idItinerary,
            activities: activities
        })

        const savedActivity = await newActivity.save()

            .then(activity => {
                res.json({
                    success: true, activity: activity
                })
            })
            .catch(error => {
                res.json({
                    succes: false, error: error
                })
            })


    },

    getAcitivy : async (req, res) =>{
        const oneActivity = await Activity.find({idItinerary: req.body.id})
        res.json({
            oneActivity : oneActivity
        })
    }
}

module.exports = controllerActivity
