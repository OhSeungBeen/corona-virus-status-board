const mongoose = require('mongoose');

const { Schema } = mongoose;

const domesticStatusByCitySchema = new Schema({
  seoul: { type: Map, require: true },
  busan: { type: Map, require: true },
  deagu: { type: Map, require: true },
  incheon: { type: Map, require: true },
  gwangju: { type: Map, require: true },
  daejeon: { type: Map, require: true },
  ulsan: { type: Map, require: true },
  sejong: { type: Map, require: true },
  gyeonggi: { type: Map, require: true },
  gangwon: { type: Map, require: true },
  chungbuk: { type: Map, require: true },
  chungnam: { type: Map, require: true },
  jeonbuk: { type: Map, require: true },
  jeonnam: { type: Map, require: true },
  gyeongbuk: { type: Map, require: true },
  gyeongnam: { type: Map, require: true },
  jeju: { type: Map, require: true },
  date: { type: String, required: true }
});

module.exports = mongoose.model('DomesticStatusByCity', domesticStatusByCitySchema);
