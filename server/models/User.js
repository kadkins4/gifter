const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
}, {
  timestamps: true
})

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;