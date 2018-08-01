require('./config');
require('./database');

const express = require('express');
const passport = require('./services/passport');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const apiRoutes = require('./routes/apiRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/auth', authRoutes);
app.use('/api', passport.authenticate('jwt', { session: false }), apiRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/build/index.html'));
    })
  }

if (!process.env.NODE_ENV === 'test') {
  app.use(morgan('dev'));
}

module.exports = app;