const mongoose = require('mongoose');

const { Schema } = mongoose;

const domesticStatusByCitySchema = new Schema({
  seoul: { type: Number, require: true },
  busan: { type: Number, require: true },
  deagu: { type: Number, require: true },
  incheon: { type: Number, require: true },
  gwangju: { type: Number, require: true },
  daejeon: { type: Number, require: true },
  ulsan: { type: Number, require: true },
  sejong: { type: Number, require: true },
  gyeonggi: { type: Number, require: true },
  gangwon: { type: Number, require: true },
  chungbuk: { type: Number, require: true },
  chungnam: { type: Number, require: true },
  jeonbuk: { type: Number, require: true },
  jeonnam: { type: Number, require: true },
  gyeongbuk: { type: Number, require: true },
  gyeongnam: { type: Number, require: true },
  jeju: { type: Number, require: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('DomesticStatusByCity', domesticStatusByCitySchema);
