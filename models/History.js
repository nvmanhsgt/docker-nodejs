const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HistorySchema = new Schema({
  cmd: {
    type: String,
    require: true
  },
  created_at: {
    type: String,
    require: true
  },
  updated_at: {
    type: String,
    require: true
  },
});

module.exports = History = mongoose.model('history', HistorySchema);
