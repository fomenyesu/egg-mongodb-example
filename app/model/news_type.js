module.exports = mongoose => {
  const NewsTypeSchema = new mongoose.Schema({
    uid: { type: Number  },
    status: { type: Number  },
    ord: { type: Number  },
    tid: { type: Number , unique: true },
    time: { type: String  },
    name: { type: String  },
    link: { type: String  }
  });

  return mongoose.model('NewsType', NewsTypeSchema, 'web_news_type');
}
