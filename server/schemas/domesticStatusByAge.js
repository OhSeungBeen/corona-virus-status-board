const mongoose = require('mongoose');

const { Schema } = mongoose;

const domesticStatusByAgeSchema = new Schema({
  confirmator: { type: Map, require: true },
  dead: { type: Map, require: true },
  date: { type: String, required: true },
});

module.exports = mongoose.model('domesticStatusByAge', domesticStatusByAgeSchema);
