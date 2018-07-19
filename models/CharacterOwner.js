const mongoose = require('mongoose');
const { Schema } = mongoose;
require('./Character');
require('./User');
require('./League');

const characterOwnerSchema = new Schema({
    character: {
        type: Schema.Types.ObjectId,
        ref: 'Character',
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    league: {
        type: Schema.Types.ObjectId,
        ref: 'League',
        required: true
    },
    createdAt: Date
});

characterOwnerSchema.pre('save', function() {
    this.createdAt = Date();
});

characterOwnerSchema.pre('find', function() {
    this.populate('character');
    this.populate('owner');
    this.populate('league');
});

const CharacterOwner = mongoose.model('CharacterOwner', characterOwnerSchema);

module.exports = { characterOwnerSchema, CharacterOwner };