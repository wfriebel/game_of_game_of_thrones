const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
    .then(() => {
        console.log(`Connected to ${process.env.MONGODB_URI}`);
    })
    .catch(() => {
        console.log('Could not connect to database');
    })
