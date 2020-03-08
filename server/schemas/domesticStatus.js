const mongoose = require('mongoose');

const { Schema } = mongoose;

const domesticStatusSchema = new Schema({
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
  inspection: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('DomesticStatus', domesticStatusSchema);
