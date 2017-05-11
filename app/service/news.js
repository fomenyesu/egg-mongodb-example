
module.exports = app => {
  class NewsService extends app.Service {
    * index(params) {
      let news =  yield this.ctx.model.news.find(params);
      let result = {};
      result.meta = {total: news.length };
      result.data = news;
      return result;
    }
    * show(params) {
      let news =  yield this.ctx.model.news.find({nid:params.id});
      let result = {};
      result.meta = {total: news.length };
      result.data = news;
      return result;
    }
    * update(nid,request) {
      let result = yield this.ctx.model.news.findOneAndUpdate({nid},  {$set:request});
      return result;
    }
    * create(request) {
      if (!request) {return};
      const ctx = this.ctx;
      let doc = yield ctx.model.idg.findOneAndUpdate({modelName:"counter"},{$inc:{'nid':1}}, {new:true});
      request.nid=doc.nid;
      let result = yield ctx.model.news.create(request);
      return result;
    }
    * destroy(params) {
      let result = this.ctx.model.news.remove({"nid":{ $in:params.id.split(',')}});
      return result;
    }
  }
  return NewsService;
};