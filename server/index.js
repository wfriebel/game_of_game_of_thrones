const app = require('./app');

app.listen(process.env.PORT, () => {
    console.log(`Server up on port ${process.env.PORT}`);
});