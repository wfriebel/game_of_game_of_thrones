const mongoose = require('mongoose');
const { Schema } = mongoose;
const { weekValidator } = require('../schemaValidators');
require('./Character');
require('./User');
require('./ActionType');
require('./League');

const actionSchema = new Schema({
    character: {
        type: Schema.Types.ObjectId,
        ref: 'Character',
        required: true
    },
    actionType: {
        type: Schema.Types.ObjectId,
        ref: 'ActionType',
        required: true
    },
    league: {
        type: Schema.Types.ObjectId,
        ref: 'League',
        required: true
    },
    week: {
        type: Number,
        required: true,
        validate: {
            validator: weekValidator,
            message: 'Week must be an integer greater or equal to one'
        },
    createdAt: Date
    }
})

actionSchema.pre('save', function() {
    this.createdAt = Date();
});

actionSchema.pre('find', function() {
    this.populate('character');
    this.populate('actionType');
    this.populate('league');
});

const Action = mongoose.model('Action', actionSchema);

module.exports = { actionSchema, Action };