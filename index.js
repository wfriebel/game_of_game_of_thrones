require('./config');

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello');
})

app.listen(process.env.PORT, () => {
    console.log(`Server up on port ${process.env.PORT}`);
})