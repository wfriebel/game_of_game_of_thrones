const mongoose = require('mongoose');
const _ = require('lodash');
const { emailValidator } = require('../schemaValidators');
const { Schema } = mongoose;
require('./League');

const userSchema = new Schema({
    first: {
        type: String,
        required: true,
        trim: true
    },
    last: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        validate: {
            validator: emailValidator,
            message: 'email must be a valid email'
        }
    },
    googleId: String,
    league: { 
        type: Schema.Types.ObjectId,
        ref: 'League'
    },
    imageURL: String,
    createdAt: Date
})

userSchema.pre('save', function () {
    this.createdAt = Date();
    this.first = _.capitalize(this.first);
    this.last = _.capitalize(this.last);
});

userSchema.pre('find', function() {
    this.populate('league');    
});

const User = mongoose.model('User', userSchema);

module.exports = { userSchema, User };