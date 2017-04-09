module.exports = mongoose => {
  const UsersSchema = new mongoose.Schema({
    uid: { type: Number, unique: true  },
    status: { type: Number  },
    time: { type: String  },
    name: { type: String, required: true, unique:true  },
    pass: { type: String, required: true  }
  });

  return mongoose.model('Users', UsersSchema, 'web_admin');

}
