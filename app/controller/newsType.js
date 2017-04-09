// 定义创建接口的请求参数规则
const createRule = {name: 'string', pass: 'string', };
const updateByIdRule = {id: 'int', name: 'string', pass: 'string', }

// 1 获取用户列表，分页，每页几个
exports.index = function* () {
  console.log(this.params);
  // 调用 service 创建一个 topic
  const result = yield this.service.newsType.index(this.params);

  // 设置响应体和状态码
  this.body = result;
  this.status = 201;
};
// 2 根据ID获取用户信息
exports.show = function* () {
  console.log(this.params);
  // 调用 service 创建一个 topic
  const result = yield this.service.newsType.show(this.params);

  // 设置响应体和状态码
  this.body = result;
  this.status = 201;
};

exports.create = function* () {
  console.log(this.params);
  this.validate(createRule);
  // 调用 service 创建一个 topic
  const result = yield this.service.newsType.create(this.params);

  // 设置响应体和状态码
  this.body = result;
  this.status = 201;
};

exports.update = function* () {
  console.log(this.params);
  this.validate(updateByIdRule);
  // 调用 service 创建一个 topic
  const result = yield this.service.newsType.update(this.params);

  // 设置响应体和状态码
  this.body = result;
  this.status = 204;
};
exports.destroy = function* () {
  const result = yield this.service.newsType.destroy(this.params);
  // 设置响应体和状态码
  this.body = result;
  this.status = 204;
};




