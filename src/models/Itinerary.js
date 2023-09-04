const { Schema, model, Types, mongoose } = require('mongoose');

const schemaItinerary = new Schema({

    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    city: {
        type: mongoose.Types.ObjectId, ref: 'City'
    },
    duration: {
        type: Number,
        required: true
    },
    tags: {
        type: String
    }

});

const Itinerary = model("Itinerary", schemaItinerary)
module.exports = Itinerary;