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

        // TODO
        // Add default image
    },
    description: {
        type: String
    }
});

const Character = mongoose.model('Character', characterSchema);

module.exports = { characterSchema, Character };