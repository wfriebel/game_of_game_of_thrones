const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { User } = require('../models/User');

passport.serializeUser((user, done) => {
  done(null, user._id);
})

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    }).catch(e => {
      console.log("No user could be found in the database when attempting to deserialize user out of session cookie");
    })
})

passport.use(new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/api/auth/google/callback',
        proxy: true
    }, 
    async (accessToken, refreshToken, profile, done) => {
        try {
        const existingUser = await User.findOne({ googleId: profile.id });
        if(existingUser) {
            return done(null, existingUser);
        }
        const newUser = await new User({ 
            googleId: profile.id ,
            name: profile.displayName
            }).save();
        done(null, newUser);
        } catch (e) {
        done(e);
        }
    })
);

module.exports = passport;