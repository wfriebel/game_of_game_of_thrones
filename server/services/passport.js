const passport = require('passport');
const { User } = require('../models/User');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const GooglePlusTokenStrategy = require('passport-google-plus-token');
const FacebookTokenStrategy = require('passport-facebook-token');

passport.use(new JwtStrategy(
    {
        jwtFromRequest: ExtractJwt.fromHeader('authorization'),
        secretOrKey: process.env.JWT_SECRET
    }, async (payload, done) => {
        try {
            const currentUser = await User.findById(payload.sub);
            if(!currentUser) {
                return done(null, false);
            }
            done(null, currentUser);
        } catch (error) {
            done(error, false);
        }
    })
)

passport.use('googleToken', new GooglePlusTokenStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }, async (accessToken, refreshToken, profile, done) => {
        try {
            const existingUser = await User.findOne({ "google.id": profile.id });
            if(existingUser) {
                return done(null, existingUser)
            }
            const newUser = new User({
                method: 'google',
                google: {
                    id: profile.id,
                    email: profile.emails[0].value,
                    first: profile.name.givenName,
                    last: profile.name.familyName,
                    imageURL: profile.photos[0].value 
                }
            })
            await newUser.save();
            done(null, newUser);
        } catch(error) {
            done(error, false, error.message);
        }
       
    }
));

passport.use('facebookToken', new FacebookTokenStrategy(
    {
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    },
    async (accessToken, refreshToken, profile, done) => {
        try {
            const existingUser = await User.findOne({ 'facebook.id': profile.id });
            if (existingUser) {
                return done(null, existingUser);
            }
            const newUser = new User({
                method: 'facebook',
                facebook: {
                    first: profile.name.givenName,
                    last: profile.name.familyName,
                    id: profile.id,
                    email: profile.emails[0].value
                }
            });
            await newUser.save();
            done(null, newUser);
        } catch (error) {
            done(error, false);
        }
    }
));

passport.use(new LocalStrategy(
    {
        usernameField: 'email'
    }, async (email, password, done) => {
        try {
            const currentUser = await User.findOne({ "local.email": email });
            if(!currentUser) {
                return done(null, false);
            }
            const validPassword = await currentUser.isValidPassword(password);
            if(!validPassword) {
                return done(null, false);
            }
            done(null, currentUser);
        } catch (error) {
            done(error, false, { message: 'Unable to save new user' });
        }
    }
))

// passport.use(new GoogleStrategy(
//     {
//         clientID: process.env.GOOGLE_CLIENT_ID,
//         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//         callbackURL: '/auth/google/callback',
//         proxy: true
//     }, 
//     async (accessToken, refreshToken, profile, done) => {
//         try {
//             const existingUser = await User.findOne({ googleId: profile.id });
//             if(existingUser) {
//                 return done(null, existingUser);
//             }
//             const newUser = await new User({ 
//                 googleId: profile.id ,
//                 first: profile.name.givenName,
//                 last: profile.name.familyName,
//                 imageURL: profile.photos[0].value
//             }).save();
//             done(null, newUser);
//         } catch (e) {
//             done(e);
//         }
//     })
// );

module.exports = passport;