

const verifyDataClient = (req, res, next) => {
    let {name, lastName, age} = req.body
    if(!name || !lastName || !age){
        return res.status(400).json({message: "Invalid data"})
    }
    if(name == ""){
        return res.status(400).json({message: "Invalid Name"})
    }
    if(lastName == ""){
        return res.status(400).json({message: "Invalid lastName"})
    }
    if(age == 0){
        return res.status(400).json({message: "Invalid Age"})
    }
    next()
}
module.exports = {
    verifyDataClient
}
const verifyDataCity = (req, res, next) => {
    let {name, state, image, interestPoint} = req.body
    if(!name || !state || !image || !interestPoint){
        return res.status(400).json({message: "Invalid data"})
    }
    if(name == ""){
        return res.status(400).json({message: "Invalid Name"})
    }
    if(state == ""){
        return res.status(400).json({message: "Invalid state"})
    }
    if(image == ""){
        return res.status(400).json({message: "Image are empty"})
    }
    next()
}
module.exports = {
    verifyDataCity
}