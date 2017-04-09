module.exports = mongoose => {
  // 自增ID生成器
  const IdgSchema = new mongoose.Schema({
      modelname  : { type: String },
      nid  : { type: Number, default: 0 },
      uid  : { type: Number, default: 0 },
      tid  : { type: Number, default: 0 },
  });
  return mongoose.model('Idg', IdgSchema, 'IdGenerator');

}

