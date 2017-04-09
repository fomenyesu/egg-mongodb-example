
module.exports = app => {
  class NewsService extends app.Service {
    * index(params) {
      let news =  yield this.ctx.model.news.find({});
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
      let result = this.ctx.model.news.findOneAndUpdate({nid},  {$set:request},
        function(err, doc){
        if(err){console.log("参数错误"); }
        console.log(doc);
      });
      return result;
    }
    * create(request) {
      const ctx = this.ctx;
      ctx.model.idg.findOneAndUpdate({modelName:"counter"},{$inc:{'nid':1}}, {new:true},
        function(err, doc){
        if(err){console.log("参数错误"); }
        request.nid=doc.nid;
        ctx.model.news.create(request,
          function(err1, doc1){
          if(err1){console.log("参数错误"); }
        })
      });
    }
    * destroy(params) {
      let result = this.ctx.model.news.remove({"nid":{ $in:params.id.split(',')}});
      return result;
    }
  }
  return NewsService;
};