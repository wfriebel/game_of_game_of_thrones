const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    googleId: String,
    league: { type: Schema.Types.ObjectId, ref: 'League' }, 
    createdAt: Date
})

userSchema.pre('save', function () {
    this.createdAt = Date();
});

const User = mongoose.model('User', userSchema);

module.exports = { userSchema, User };