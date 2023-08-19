const express = require('express')

const router = express.Router()


//endpoint routes
router.get('/clients', (req, res) => {
    res.json({
        name: 'Luquitas',
        lastName: 'Berazadi',
        age: 36
    })
})

module.exports = router