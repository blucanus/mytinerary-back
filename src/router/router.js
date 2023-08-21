const express = require('express')
const router = express.Router()
const {getClients, getClient, addClient, deleteClient} = require('../controllers/clientsControler')
const { verifyDataClient } = require('../middlewares/verifications')



//endpoint routes
router.get('/clients', getClients)
router.get('/clients/:id', getClient)
router.post('/clients', verifyDataClient, addClient)
router.delete('/clients', deleteClient)


module.exports = router