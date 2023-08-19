const {Schema, model, Types} = require('mongoose')

const schemaClient = new Schema({
    name:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    }/*, //si quiero relacionar
    business_BelongTo: {
        type: Types.ObjectId,
        ref: 'Business'
    }*/
})

const Client = model("Client", schemaClient)

module.exports = Client