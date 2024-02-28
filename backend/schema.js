const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema to match the structure of your data
const postDataSchema = new Schema({
  userId: Number,
  id: Number,
  title: String,
  body: String
});

// Export the Mongoose model based on the schema
module.exports = mongoose.model('Post', postDataSchema);