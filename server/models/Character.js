const mongoose = require('mongoose');
const { Schema } = mongoose;
require('./Action');

const characterSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    imageURL: {
        type: String,
        default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwNWn1BMrObhD8KA7V5_W7PjfhhoH94gZrGurokYU6QwiAqkE6'
    },
    description: {
        type: String
    }
});

characterSchema.virtual('actions', {
    ref: 'Action',
    localField: '_id',
    foreignField: 'character'
  });

characterSchema.pre('find', function() {
    // this.populate('actions')
})

const Character = mongoose.model('Character', characterSchema);

module.exports = { characterSchema, Character };