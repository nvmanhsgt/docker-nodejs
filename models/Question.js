const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  content: {
    type: String,
    require: true
  },
  category: {
    type: String,
    require: true
  },
  note: {
    type: String,
    require: true
  },
  anwser: {
    A: {
      type: String
    },
    B: {
      type: String
    },
    C: {
      type: String
    },
    D: {
      type: String
    }
  },
  anwsered: {
    A: {
      type: String
    }
  }

});

module.exports = Question = mongoose.model('question', QuestionSchema);
