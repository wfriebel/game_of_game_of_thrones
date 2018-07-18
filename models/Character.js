const mongoose = require('mongoose');
const { Schema } = mongoose;

const characterSchema = new Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    imageURL: {
        type: String,
        // Add validation that it is a url
        // Add default image
    },
    description: {
        type: String
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Character = mongoose.model('Character', characterSchema);

module.exports = { characterSchema, Character };