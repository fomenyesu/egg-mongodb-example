module.exports = mongoose => {
  const NewsSchema = new mongoose.Schema({
    nid: { type: Number  , unique: true  },
    uid: { type: Number  },
    type: { type: Number  },
    ord: { type: Number  },
    status: { type: Number  },
    time: { type: String  },
    title: { type: String  },
    con: { type: String  },
    seotitle: { type: String  },
    seokeyword: { type: String  },
    seodesc: { type: String  },
    langid: { type: String  },
    module: { type: String  }
  });

  return mongoose.model('News', NewsSchema, 'web_news');
}
