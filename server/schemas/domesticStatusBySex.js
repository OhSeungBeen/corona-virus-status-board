const mongoose = require('mongoose');

const { Schema } = mongoose;

const domesticStatusBySexSchema = new Schema({
  man: { type: Map, require: true },
  woman: { type: Map, require: true },
  date: { type: String, required: true },
});

module.exports = mongoose.model('domesticStatusBySex', domesticStatusBySexSchema);
