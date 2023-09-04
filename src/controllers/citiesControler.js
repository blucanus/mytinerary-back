const Cities = require("../models/Cities");
const InterestPoint = require("../models/InterestPoint");
const Itinerary = require("../models/Itinerary");



const getCities = async(req, res) => {

    try{
        let cities = await Cities.find()
        res.json(
            cities
        )
    }catch(err){
        res.json({message: err.message})
    }
}

const getCity = async(req, res) => {
    //capturo los parámetros que vienen desde el router (:id) es una constante con una desustruturación
    try{
        let {id} = req.params
 
        let cityFounded = await Cities.findById(id).populate("itinerary")
        
        res.status(200).json(cityFounded)

    }catch(err){
        res.status(500).json({message: err})
    }
}

const addCity = async(req, res) => {
    try{
        const newCity = { ... req.body }
        
        const {interestPoint: interestPointName } = req.body
       
        const intPoint = await InterestPoint.findOne({name: interestPointName})

        if(intPoint) {
            newCity.interestPoint = intPoint._id
        }else {
            const newInterestPoint = await InterestPoint.create({ name: req.body.interestPoint})
            newCity.interestPoint = newInterestPoint._id
        }
        const addedCity = await Cities.create(newCity)
        await InterestPoint.findOneAndUpdate( {_id: newCity.interestPoint}, { $push: {city: addedCity._id}})
        res.status(201).json({
            "message": "The city has been added",
            "client": addedCity
        })
    }catch(err){
        res.status(500).json({message: err})
    }
    
}
const deleteCity = async(req, res) => {
    try{
        let {id} = req.query
 
        await Cities.deleteOne({_id: id})

        res.status(201).json({
                "message": "The city has been deleted",
            })
    }catch(err){
        res.status(500).json({message: err})
    }
    
}
const updateCity = async(req, res) => {
    try {
        let{id} = req.query
        const citiesNewInfo = req.body
        const updateNewCity = await Cities.findByIdAndUpdate(id, citiesNewInfo, {new: true})
        res.status(200).json({
            message: "The city was updated",
            updateNewCity
        })

    }catch(err){
        res.status(500).json({message: "There was an error updating the city"})
    }
}

module.exports = {getCities, getCity, addCity, deleteCity, updateCity}