const Client = require("../models/Client")

const getClients = async(req, res) => {

    try{
        let clients = await Client.find()
        res.json(
            //clienteCreado
            clients
        )
    }catch(err){
        res.json({message: err.message})
    }

    /*  const clienteCreado = new Client ({ esto no se hace
        name: 'Luquitas',
        lastName: 'Berazadi',
        age: 36
    })

    clienteCreado.save() */
}

const getClient = async(req, res) => {
    //capturo los parámetros que vienen desde el router (:id) es una constante con una desustruturación
    try{
        let {id} = req.params
 
        let clientFounded = await Client.findById(id)

        res.status(200).json({clientFounded})

    }catch(err){
        res.status(500).json({message: err})
    }
}
const addClient = async(req, res) => {
    try{
        let payload = req.body

        let addedClient = await Client.create(payload)
        //addedClient.save()

        res.status(201).json({
                "message": "The client has been added",
                "client": addedClient
            })
    }catch(err){
        res.status(500).json({message: err})
    }
    
}

const deleteClient = async(req, res) => {
    try{
        let {id} = req.query
 
        await Client.deleteOne({_id: id})

        res.status(201).json({
                "message": "The client has been deleted",
            })
    }catch(err){
        res.status(500).json({message: err})
    }
    
}
module.exports = {getClients, getClient, addClient, deleteClient}