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

const deleteItinerary = async(req, res) => {
    try{
        let {id} = req.query
 
        await Itinerary.deleteOne({_id: id})

        res.status(201).json({
                "message": "The Itinerary has been deleted",
            })
    }catch(err){
        res.status(500).json({message: err})
    }
    
}
const updateItinerary = async(req, res) => {
    try {
        let{id} = req.query
        console.log(id);
        const itinerariesNewInfo = req.body
        const updateNewItinerary = await Itinerary.findByIdAndUpdate(id, itinerariesNewInfo, {new: true})
        
        res.status(200).json({
            message: "The Itinerary was updated",
            updateNewItinerary
        })

    }catch(err){
        res.status(500).json({message: "There was an error updating the Itinerary"})
    }
}

module.exports = {getIntineraries, addItinerary, getIntineraryForCity, deleteItinerary, updateItinerary}