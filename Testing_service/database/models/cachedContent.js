// schema for restaurants
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var testingSchema = new Schema({
  question_id: Number,
  fnInput: String,
  fnOutput: String,
  sourceCode: String
});

var Testing = mongoose.model('Testing', testingSchema);

module.exports = Restaurant;
