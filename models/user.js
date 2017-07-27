// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  price: String
});

// Return model
module.exports = restful.model('User', userSchema);
