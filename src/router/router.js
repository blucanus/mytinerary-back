const express = require('express')
const router = express.Router()
//const {getClients, getClient, addClient, deleteClient} = require('../controllers/clientsControler')
const {getCities, getCity, addCity, deleteCity} = require('../controllers/citiesControler')
const { /* verifyDataClient */ verifyDataCity } = require('../middlewares/verifications')



//endpoint routes
/* router.get('/clients', getClients)
router.get('/clients/:id', getClient)
router.post('/clients', verifyDataClient, addClient)
router.delete('/clients', deleteClient) */

//endpoints cities routes
router.get('/cities', getCities)
router.get('/cities/:id', getCity)
router.post('/cities', verifyDataCity, addCity)
router.delete('/cities', deleteCity)


module.exports = router