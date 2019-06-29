const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  senderId: {
    type: String,
    require: true
  },
  name: {
    type: String,
    require: true
  },
});

module.exports = User = mongoose.model('user', UserSchema);
