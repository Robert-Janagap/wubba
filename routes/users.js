const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

// Database config
const config = require('../config/database');

// Schema
const Users = require('../models/users');

router.post('/register', ( req, res, next ) => {
    // Encryption of Password
	bcrypt.genSalt(10, ( err, salt ) => {
        bcrypt.hash( req.body.password, salt, ( err, hash ) => {
            if( err ) throw err;

            let newUser = new Users({
                email: req.body.email,
                password: hash,
                profile:{
                    name: req.body.name,
                }
            });
            // Save new user
            let saveNewUser = newUser.save();
        
            saveNewUser.then( ( user ) => {
                res.json( user );
            }, err => {
                res.json( {msg: 'Failed to register'} );
            });
        });
    });
});

router.post('/auth', ( req, res, next ) => {
    const email = req.body.email;
    const password = req.body.password;

    Users.findOne({ email: email }, ( err, user ) => {
        if( err ) throw err;
        
        if( !user ){
            return res.json({ success: false, msg: 'Email not found' });	
        }
        bcrypt.compare( password, user.password, ( err, isMatch ) => {
            if( err ) throw err;

            if( isMatch ){
                const token = jwt.sign( user.toObject(), config.secret, {
					expiresIn: 604800 // 1 week
                });

                res.json({
					success: true,
                    token: 'JWT ' + token,
                    msg: 'Success login',
                    user_id: user._id,
					user: {
						id: user._id,
						name: user.profile.name,
						email: user.email
					}
				});
            }else{
				return res.json({ success: false, msg: 'Wrong password'});
			}
        });
    });
});

router.get('/dashboard', passport.authenticate('jwt', {session: false}), ( req, res, next) =>{
	res.json({ user: req.user });
});

module.exports = router;