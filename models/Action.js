const mongoose = require('mongoose');
const { Schema } = mongoose;
const { weekValidator } = require('../schemaValidators');

const actionSchema = new Schema({
    character: {
        type: Schema.Types.ObjectId,
        ref: 'Character',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
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
        }
    }
})

const Action = mongoose.model('Action', actionSchema);

module.exports = { actionSchema, Action };