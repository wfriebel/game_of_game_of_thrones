const passport = require('passport');
const authRoutes = require('express').Router();

// Routes for /api/auth
authRoutes.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

authRoutes.get(
  '/google/callback',
  passport.authenticate('google'),
  (req, res) => {
    res.redirect('/api/auth/current_user');
  }
);

authRoutes.get('/current_user', (req, res) => {
  res.send({ user: req.user });
})

authRoutes.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/')
})

module.exports = authRoutes;
