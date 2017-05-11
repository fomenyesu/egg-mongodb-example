// 定义创建接口的请求参数规则
const createRule = {name: 'string', pass: 'string', };
const updateByIdRule = { name: {type:'string',required:false},
                         pass: {type:'string',required:false}};
// 1 获取用户列表，分页，每页几个
exports.index = function* () {
  const result = yield this.service.users.index(this.params);
  this.body = result;
  this.status = 200;
};
// 2 根据ID获取用户信息
exports.show = function* () {
  const result = yield this.service.users.show(this.params);
  this.body = result;
  this.status = 200;
};
// 3 创建用户
exports.create = function* () {
  this.validate(createRule);
  const result = yield this.service.users.create(this.request.body);
  this.body = result;
  this.status = 201;
};
// 4 更新用户信息
exports.update = function* () {
  this.validate(updateByIdRule);
  const result = yield this.service.users.update(this.params.id,this.request.body);
  this.body = result;
  this.status = 200;
};
// 5 删除用户信息
exports.destroy = function* () {
    console.log(this.params);
  const result = yield this.service.users.destroy(this.params);
  this.body = result;
  this.status = 204;
};
