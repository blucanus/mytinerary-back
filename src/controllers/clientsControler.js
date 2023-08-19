const Client = require("../models/Client")

const getClients = async(req, res) => {

    try{
        let clients = await Client.find()
        res.json(
            //clienteCreado
            clients
        )
    }catch(err){

    }

    /*  const clienteCreado = new Client ({ esto no se hace
        name: 'Luquitas',
        lastName: 'Berazadi',
        age: 36
    })

    clienteCreado.save() */
}

const getClient = (req, res) => {
    //capturo los parámetros que vienen desde el router (:id) es una constante con una desustruturación
    const {id} = req.params
    res.json({
        name: 'Pepito',
        lastName: 'Garcia',
        age: 36,
        paramId: id
    })
}

module.exports = {getClients, getClient}