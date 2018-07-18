const mongoose = require('mongoose');
const { emailValidator } = require('../schemaValidators');
const { Schema } = mongoose;

const userSchema = new Schema({
    first: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    last: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        validate: {
            validator: emailValidator,
            message: 'email must be a valid email'
        }
        // TODO get user image
    },
    googleId: String,
    league: { 
        type: Schema.Types.ObjectId,
        ref: 'League'
    }, 
    createdAt: Date
})

userSchema.pre('save', function () {
    this.createdAt = Date();
});

const User = mongoose.model('User', userSchema);

module.exports = { userSchema, User };