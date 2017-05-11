
module.exports = app => {
  class UsersService extends app.Service {
    * index(params) {
      let users =  yield this.ctx.model.users.find(params);
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
      let result = yield this.ctx.model.users.findOneAndUpdate({uid},{$set:request});
      return result;
    }
    * create(request) {
      if (!request) {return};
      const ctx = this.ctx;
      let doc = yield ctx.model.idg.findOneAndUpdate({modelName:"counter"},{$inc:{'uid':1}}, {new:true});
      request.uid=doc.uid;
      let result = yield ctx.model.users.create(request);
      return result;
    }
    * destroy(params) {
      if (!params&&!params.id) {return};
      let result = yield this.ctx.model.users.remove({"uid":{ $in:params.id.split(',')}});
      return result.result;
    }
  }
  return UsersService;
};