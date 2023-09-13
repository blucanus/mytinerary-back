const { Strategy, ExtractJwt } = require("passport-jwt");
const User = require("../models/Users");
const passport = require("passport");


const options = {
    jwtRequest: ExtractJwt.fromAuthHeaderAsBearerToken,
    secretOrKey : "2211AbbA"
}

const fn = async(jwt_payload, done) => { 
    try {
        const user = await User.findOne({email: jwt_payload.email })
        if(!user) {
            done(null, false)
        }
        done(null, user)
    } catch (error) {
        done(null, false)
    }
}
module.exports = passport.use(new Strategy(options, fn))