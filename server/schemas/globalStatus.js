const mongoose = require('mongoose');

const { Schema } = mongoose;

const globalStatusSchema = new Schema({
  confirmator: {
    type: Number,
    required: true
  },
  isolate: {
    type: Number,
    required: true
  },
  dead: {
    type: Number,
    required: true
  },
  date: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('GlobalStatus', globalStatusSchema);
