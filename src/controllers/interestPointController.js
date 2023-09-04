const InterestPoint = require("../models/InterestPoint");

const getInterestPoint = async(req, res) => {

    try{
        const intPoint = await InterestPoint.find()
        res.json( { interestPoint: intPoint} )
    }catch(err){
        res.json({message: err.message})
    }
}

const addIntPoint = async(req, res) => {

    try {
        const newIntPoint = await InterestPoint.create( req.body )
        res.status(201).json(  {newIntPoint: newIntPoint})
    }catch(err) {
        res.status(500).json({message: err.message})
    }

    
    
}

module.exports = {getInterestPoint, addIntPoint}