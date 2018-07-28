const validator = require('validator');

const emailValidator = (email) => {
    return validator.isEmail(email);
}

const weekValidator = (num) => {
    return num >= 1 && Number.isInteger(num);
}

module.exports = {
    emailValidator,
    weekValidator
}