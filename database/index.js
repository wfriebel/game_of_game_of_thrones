const mongoose = require('mongoose');

module.exports = () => {
    const database = process.env.MONGODB_URI;
    return mongoose.connect(database, { useNewUrlParser: true })
    .then(() => {
        return console.log(`Connected to ${database}`);
    })
    .catch(e => {
        console.log(`Could not connect to database ${database}`);
        return Promise.reject(e);
    })
}
