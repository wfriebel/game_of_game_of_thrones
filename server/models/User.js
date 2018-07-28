const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { emailValidator } = require('../schemaValidators');
const { Schema } = mongoose;
require('./League');

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
            unique: true,
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
            unique: true
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
            unique: true
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

userSchema.pre('find', function() {
    this.populate('league');    
});

userSchema.methods.isValidPassword = async function (password) {
    return await bcrypt.compare(password, this.local.password);
}

const User = mongoose.model('User', userSchema);

module.exports = { userSchema, User };