const { Schema, model, Types, mongoose } = require('mongoose');

const schemaInterestPoint = new Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: mongoose.Types.ObjectId, ref: 'city'
    }
})

const InterestPoint = model("InterestPoint", schemaInterestPoint)
module.exports = InterestPoint