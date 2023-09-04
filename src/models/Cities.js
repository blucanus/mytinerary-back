const { Schema, model, Types, mongoose} = require('mongoose');

const schemaCities = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    interestPoint: [{
         type: mongoose.Types.ObjectId, ref: 'InterestPoint'
    }],
    itinerary : [{
        type: mongoose.Types.ObjectId, ref: 'Itinerary'
    }]


})
const Cities = model("City", schemaCities)
module.exports = Cities