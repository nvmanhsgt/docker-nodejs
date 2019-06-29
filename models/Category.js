const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type: String,
    require: true
  },
  cmd: {
    type: String,
    require: true
  },
});

module.exports = Category = mongoose.model('category', CategorySchema);
