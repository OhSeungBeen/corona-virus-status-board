const mongoose = require('mongoose');
const { Schema } = mongoose;

let globalStatusbyCountrySchema = new Schema({}, { strict: false });
module.exports = mongoose.model('globalStatusbyCountry', globalStatusbyCountrySchema);
