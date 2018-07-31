const { User } = require('../models/User');
const JWT = require('jsonwebtoken');

const signToken = (user) => {
   return JWT.sign({
        sub: user.id
    }, process.env.JWT_SECRET);
}

module.exports = {
    signUp: async (req, res, next) => {
        try {
            const { first, last, email, password } = req.body;
            const foundUser = await User.findOne({ "local.email": email });
            if(foundUser) {
                return res.status(403).send({ error: 'A user with this email already exists' });
            }
            const newUser = new User({
                method: 'local',
                local: {
                    first,
                    last,
                    email,
                    password 
                }
            })
            await newUser.save();
            const token = signToken(newUser);
            res.send({ token });
        } catch (error) {
            next(error);
        }
    },
    
    generateAuthToken: async (req, res, next) => {
       try {
           req.token = signToken(req.user);
           next();
       } catch (error) {
           next(error);
       }
    },

    google: (req, res, next) => {
        if (req.token && req.user) {
            const user = {
                _id: req.user._id,
                first: req.user.google.first,
                last: req.user.google.last,
                email: req.user.google.email,
                imageURL: req.user.google.imageURL
            }
            res.send({ user, token: req.token})
        }
    }
}
