
module.exports = app => {
  class NewsTypeService extends app.Service {
    * index(params) {
      let newsType =  yield this.ctx.model.newsType.find(params);
      let result = {};
      result.meta = {total: newsType.length };
      result.data = newsType;
      return result;
    }
    * show(params) {
      let newsType =  yield this.ctx.model.newsType.find({tid:params.id});
      let result = {};
      result.meta = {total: newsType.length };
      result.data = newsType;
      return result;
    }
    * update(tid,request) {
      let result = yield this.ctx.model.newsType.findOneAndUpdate({tid},  {$set:request});
      return result;
    }
    * create(request) {
      if (!request) {return};
      const ctx = this.ctx;
      let doc = yield ctx.model.idg.findOneAndUpdate({modelName:"counter"},{$inc:{'tid':1}}, {new:true});
      request.tid=doc.tid;
      let result = yield ctx.model.newsType.create(request);
      return result;
    }
    * destroy(params) {
      let result = this.ctx.model.newsType.remove({"tid":{ $in:params.id.split(',')}});
      return result;
    }
  }
  return NewsTypeService;
};