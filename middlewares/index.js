const authenticate = (req, res, next) => {
    req.user
        ? next()
        : res.status(401).send({ error: 'authentication is required for this route' });
}

module.exports = {
    authenticate
}