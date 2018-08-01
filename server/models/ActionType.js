const mongoose = require('mongoose');
const { Schema } = mongoose;
const actionCategories = require('./actionCategories');

const actionTypeSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: actionCategories
    },
    points: Number
})

const ActionType = mongoose.model('ActionType', actionTypeSchema);

module.exports = { actionTypeSchema, ActionType };