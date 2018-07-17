const mongoose = require('mongoose');
const { Schema } = mongoose;

const leagueSchema = new Schema({
    createdAt: Date
})

leagueSchema.pre('save', function () {
    this.createdAt = Date();
});

const League = mongoose.model('League', leagueSchema);

module.exports = { leagueSchema, League };