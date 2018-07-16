const express = require('express');

require('./config');

const apiRoutes = require('./routes/apiRoutes');

const app = express();

// Middleware
app.use('/api', apiRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server up on port ${process.env.PORT}`);
})