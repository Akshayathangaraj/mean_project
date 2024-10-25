const mongoose = require('mongoose');

// User Schema definition
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Name of the user
  email: { type: String, required: true, unique: true }, // Email, must be unique
  phone: { type: String, required: true }, // Phone number
  password: { type: String, required: true }, // Hashed password
  date: { type: Date, default: Date.now } // Registration date, defaults to now
});

// Exporting the User model based on UserSchema
module.exports = mongoose.model('User', UserSchema);
