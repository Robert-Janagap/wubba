const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const Users = require('../models/users');	
const config = require('./database');

// Passport configuration
module.exports = function(passport){
    let opt = {};  

    opt.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
    opt.secretOrKey = config.secret;

    passport.use( new JwtStrategy (opt, function(jwt_payload, done) {
        Users.findById({_id: jwt_payload._id}, function(err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    }));
};