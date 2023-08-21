const { Schema, model, Types } = require('mongoose');

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
    interestPoint: {
        type: String,
        required: false
    }
})
const Cities = model("Cities", schemaCities)
module.exports = Cities