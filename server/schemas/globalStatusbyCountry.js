const mongoose = require('mongoose');

const { Schema } = mongoose;

const domesticStatusByCitySchema = new Schema({
  China: { type: Number, require: true },
  Italy: { type: Number, require: true },
  Iran: { type: Number, require: true },
  France: { type: Number, require: true },
  Spain: { type: Number, require: true }
});

module.exports = mongoose.model('DomesticStatusByCity', domesticStatusByCitySchema);
