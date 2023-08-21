const Cities = require("../models/Cities");


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
 
        let cityFounded = await Cities.findById(id)

        res.status(200).json({cityFounded})

    }catch(err){
        res.status(500).json({message: err})
    }
}

const addCity = async(req, res) => {
    try{
        let payload = req.body

        let addedCity = await Cities.create(payload)

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
/* const updateCity = async(req, res) => {
    let{id} = req.query
    let{update} = req.body
    await Cities.findByIdAndUpdate(id,update)
} */

module.exports = {getCities, getCity, addCity, deleteCity}