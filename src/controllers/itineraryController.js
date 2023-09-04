const Itinerary = require('../models/Itinerary')
const Cities = require('../models/Cities')

const getIntineraries = async(req, res) => {
    try {
        const itinerary = await Itinerary.find()
        res.status(201).json({itineraries: itinerary})
    }catch(err) {
        res.json({message: err.message})
    }
}

const getIntineraryForCity = async(req, res) => {
    try {
        const {city_id} = req.params
        const itineraryByIdCity = await Itinerary.findOne({city: city_id})
        res.status(201).json({itineraryByIdCity})
    }catch(err) {
        res.json({message: err.message})
    }
}


const addItinerary = async(req, res) => {
    try {
        const newItinerary = { ... req.body}
        const {city: cityName} = req.body
        const cityId = await Cities.findOne({name: cityName})
        if (cityId) {
            newItinerary.city = cityId._id
            console.log(newItinerary.city);
        }

        const newIt = await Itinerary.create(newItinerary)

        await Cities.findOneAndUpdate( {_id: newItinerary.city}, { $push: {itinerary: newIt._id}})



        res.status(201).json({newItinerary: newItinerary})

    }catch(err) {
        res.json({message: err.message})
    }
}

module.exports = {getIntineraries, addItinerary, getIntineraryForCity}