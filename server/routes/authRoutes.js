const passport = require('../services/passport');
const authRoutes = require('express').Router();
const authControllers = require('../controllers/authControllers');
const { validateBody, schemas } = require('../helpers/routeHelpers');

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
