const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { emailValidator } = require('../schemaValidators');
const { Schema } = mongoose;

const userSchema = new Schema({
    method: {
        type: String,
        enum: ['local', 'google'],
        required: true
    },
    local: {
        first: {
            type: String,
            lowercase: true
        },
        last: {
            type: String,
            lowercase: true
        },
        email: {
            type: String,
            lowercase: true,
            validate: {
                validator: emailValidator,
                message: 'email must be a valid email'
            }
        },
        password: {
            type: String
        },
    },
    google: {
        first: {
            type: String,
            lowercase: true
        },
        last: {
            type: String,
            lowercase: true
        },
        id: {
            type: String
        },
        email: {
            type: String,
            lowercase: true,
        },
        imageURL: String
    },
    facebook: {
        first: {
            type: String,
            lowercase: true
        },
        last: {
            type: String,
            lowercase: true
        },
        id: {
            type: String
        },
        email: {
            type: String,
            lowercase: true,
        },
        imageURL: String
    },
    league: { 
        type: Schema.Types.ObjectId,
        ref: 'League'
    },
    createdAt: Date
})

userSchema.pre('save', async function () {
    this.createdAt = Date();
    if(this.method === 'local') {
        this.local.first = this.local.first.toLowerCase();
        this.local.last = this.local.last.toLowerCase();
        this.local.password = await bcrypt.hash(this.local.password, 10)
    }
});

userSchema.methods.toJSON = function() {
    const userObject = this.toObject()
    switch (userObject.method) {
        case 'google':
            return {
                _id: userObject._id,
                first: userObject.google.first,
                last: userObject.google.last,
                email: userObject.google.email,
                imageURL: userObject.google.imageURL,
                league: userObject.league,
                createdAt: userObject.createdAt
            }
        case 'local':
        return {
            _id: userObject._id,
            first: userObject.local.first,
            last: userObject.local.last,
            email: userObject.local.email,
            imageURL: userObject.local.imageURL,
            league: userObject.league,
            createdAt: userObject.createdAt
        }
        default:
            return userObject
    }
}

userSchema.methods.isValidPassword = async function (password) {
    return await bcrypt.compare(password, this.local.password);
}

const User = mongoose.model('User', userSchema);

module.exports = { userSchema, User };