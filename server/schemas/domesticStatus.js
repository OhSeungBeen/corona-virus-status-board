const mongoose = require('mongoose');

const { Schema } = mongoose;

const domesticStatusSchema = new Schema({
  confirmator: {
    type: Number,
    required: true,
  },
  discharge: {
    type: Number,
    required: true,
  },
  isolate: {
    type: Number,
    required: true,
  },
  dead: {
    type: Number,
    required: true,
  },
  inspectionNegative: {
    type: Number,
    required: true,
  },
  inspection: {
    type: Number,
    required: true,
  },
  inspectionSum: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('DomesticStatus', domesticStatusSchema);
