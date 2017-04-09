
module.exports = app => {
  class UsersService extends app.Service {
    * index(params) {
      let users =  yield this.ctx.model.users.find({});
      let result = {};
      result.meta = {total: users.length };
      result.data = users;
      return result;
    }
    * show(params) {
      let users =  yield this.ctx.model.users.find({uid:params.id});
      let result = {};
      result.meta = {total: users.length };
      result.data = users;
      return result;
    }
    * update(uid,request) {
      let result = this.ctx.model.users.findOneAndUpdate({uid},  {$set:request},
        function(err, doc){
        if(err){console.log("参数错误"); }
        console.log(doc);
      });
      return result;
    }
    * create(request) {
      const ctx = this.ctx;
      ctx.model.idg.findOneAndUpdate({modelName:"counter"},{$inc:{'uid':1}}, {new:true},
        function(err, doc){
        if(err){console.log("参数错误"); }
        request.uid=doc.uid;
        ctx.model.users.create(request,
          function(err1, doc1){
          if(err1){console.log("参数错误"); }
        })
      });
    }
    * destroy(params) {
      let result = this.ctx.model.users.remove({"uid":{ $in:params.id.split(',')}});
      return result;

    }
  }
  return UsersService;
};