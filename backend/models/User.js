const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  contact: String,
  type: { type: String, enum: ['donor', 'orphanage'] },
  orphanageName: String,
  registrationNumber: String,
  authorizedPerson: String,
  address: String,
});

module.exports = mongoose.model('User', userSchema);
