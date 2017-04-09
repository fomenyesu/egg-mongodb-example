
module.exports = app => {
  class NewsTypeService extends app.Service {
    * index(params) {
      let newsType =  yield this.ctx.model.newsType.find({});
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
      let result = this.ctx.model.newsType.findOneAndUpdate({tid},  {$set:request},
        function(err, doc){
        if(err){console.log("参数错误"); }
        console.log(doc);
      });
      return result;
    }
    * create(request) {
      const ctx = this.ctx;
      ctx.model.idg.findOneAndUpdate({modelName:"counter"},{$inc:{'tid':1}}, {new:true},
        function(err, doc){
        if(err){console.log("参数错误"); }
        request.tid=doc.tid;
        ctx.model.newsType.create(request,
          function(err1, doc1){
          if(err1){console.log("参数错误"); }
        })
      });
    }
    * destroy(params) {
      let result = this.ctx.model.newsType.remove({"tid":{ $in:params.id.split(',')}});
      return result;
    }
  }
  return NewsTypeService;
};