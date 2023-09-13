const User = require("../models/Users");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const signUp = async(req, res) => {
    try {
        const { name, email, image, password, country} = req.body

        const userInDB = await User.findOne( {email})

        if( userInDB ) {
            return res.json({ success: false, error: "The email address is already in use." })
        }
        const passwordHash = bcrypt.hashSync(password, 10)

        const newObj = {... req.body}
        newObj.password = passwordHash

        const newUser = await User.create(newObj)
        const userResponse = {email: newUser.email, image: newUser.image, name: newUser.name, id: newUser._id}
        const token = jwt.sign({email: newUser.email}, "2211AbbA", {expiresIn: '1h'})


        res.status(201).json({success: true, user: userResponse, token: token})

    } catch (error) {
        res.json({success: false, error: error})
    }
}

const signIn = async(req, res) => {
    try {
        const { name, email, image, password, country} = req.body

        const userInDB = await User.findOne( {email})

        if( !userInDB ) {
            return res.json({ success: false, error: "Email or Password doesn't are incorrect" })
        }

        const validPassword = bcrypt.compareSync(password, userInDB.password)

        if( !validPassword ) {
            return res.json({ success: false, error: "Email or Password doesn't are incorrect" })
        }

        const userResponse = {email: userInDB.email, image: userInDB.image, name: userInDB.name, id: userInDB._id}

        const token = jwt.sign({email: userInDB.email}, "2211AbbA", {expiresIn: '1h'})

        res.status(201).json({success: true, user: userResponse, token: token})

    } catch (error) {
        res.json({success: false, error: error})
    }
}
module.exports = {signIn, signUp}
module.exports = signInToken = (req, res) => {
    console.log(req);
    res.json(req)
}