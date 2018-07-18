require('./config')();

const express = require('express');
const passport = require('./services/passport');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);

const apiRoutes = require('./routes/apiRoutes');

const app = express();

// Middleware
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  }))
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.send('Homepage');
})

app.listen(process.env.PORT, () => {
    console.log(`Server up on port ${process.env.PORT}`);
});
