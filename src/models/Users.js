const { Schema, model, Types, mongoose } = require('mongoose');

const userSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String       
    },

    password: {
        type: String,
        required: true
    },
    country: {
        type: String
    }
});

const User = model("User", userSchema)
module.exports = User;