'use strict';

const assert = require('assert');
const mock = require('egg-mock');

describe('test/service/users.test.js', () => {
  let app;
  before(() => {
    // 创建当前应用的 app 实例
    app = mock.app();
    // 等待 app 启动成功，才能执行测试用例
    return app.ready();
  });
  afterEach(mock.restore);

  describe('index()', () => {
    it('should index exists users', function* () {
      const ctx = app.mockContext();
      const users = yield ctx.service.users.index();
      assert(users);
      assert(typeof(users)=="object");
    });

    it('should get null when users not exists', function* () {
      const ctx = app.mockContext();
      const users = yield ctx.service.users.index({uid:10000});
      assert(users.meta.total==0);
    });
  });
  describe('show()', () => {
    it('should show exists users', function* () {
      const ctx = app.mockContext();
      const users = yield ctx.service.users.show({uid:1});
      assert(users);
      assert(typeof(users)=="object");
    });

    it('should get null when users not exists', function* () {
      const ctx = app.mockContext();
      const users = yield ctx.service.users.show({uid:10000});
      assert(users.meta.total==0);
    });
  });
  describe('update()', () => {
    it('should update exists users', function* () {
      const ctx = app.mockContext();
      const result = yield ctx.service.users.update(86,{status:0});
      assert(result);
    });

    it('should get null when users not exists', function* () {
      const ctx = app.mockContext();
      const result = yield ctx.service.users.update(10000,{status:0});
      assert(!result);
    });
  });
  describe('create()', () => {
    it('should create exists users', function* () {
      const ctx = app.mockContext();
      const varName = "admin1" + parseInt(1000*Math.random());
      const users = yield ctx.service.users.create({"uid":5,"name":varName,"pass":"1231","status":1,"time":"1325472736"});
      assert(users);
      assert(users.pass=="1231");
    });

    it('should get null when users not exists', function* () {
      const ctx = app.mockContext();
      const users = yield ctx.service.users.create();
      assert(!users);
    });
  });
  describe('destroy()', () => {
    it('should destroy exists users', function* () {
      const ctx = app.mockContext();
      const users = yield ctx.service.users.destroy({id:'5'});
      assert(users);
      assert(typeof(users)=="object");
    });
  });
});