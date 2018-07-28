const passport = require('../services/passport');
const authRoutes = require('express').Router();
const authControllers = require('../controllers/authControllers');
const { validateBody, schemas } = require('../helpers/routeHelpers');

// // Routes for /api/auth
// authRoutes.get(
//   '/google',
//   passport.authenticate('google', {
//     scope: ['profile', 'email']
//   })
// );

// authRoutes.get(
//   '/google/callback',
//   passport.authenticate('google', { session: false }),
//   (req, res) => {
//     // res.redirect('/');
//     res.send({ user: req.user });
//   }
// );

// authRoutes.get('/current_user', (req, res) => {
//   res.send({ user: req.user });
// })

// authRoutes.get('/logout', (req, res) => {
//   req.logout();
//   res.redirect('/');
// })

authRoutes.post(
  '/signup',
  validateBody(schemas.newUserSchema),
  authControllers.signUp
);

authRoutes.post(
  '/signin',
  passport.authenticate('local', { session: false }),
  authControllers.generateAuthToken
);

authRoutes.post(
  '/google',
  passport.authenticate('googleToken', { session: false }),
  authControllers.generateAuthToken,
  authControllers.google
)

authRoutes.post(
  '/facebook',
  passport.authenticate('facebookToken', { session: false }),
  authControllers.generateAuthToken
)

module.exports = authRoutes;
