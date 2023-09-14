const { Strategy, ExtractJwt } = require("passport-jwt");
const User = require("../models/Users");
const Passport = require("passport");


const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : "2211AbbA"
}

const fn = async (jwt_payload, done) => { 
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
const passport = Passport.use(new Strategy(options, fn))
module.exports = {passport}