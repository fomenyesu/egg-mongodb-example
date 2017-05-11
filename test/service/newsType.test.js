'use strict';

const assert = require('assert');
const mock = require('egg-mock');

describe('test/service/newsType.test.js', () => {
  let app;
  before(() => {
    // 创建当前应用的 app 实例
    app = mock.app();
    // 等待 app 启动成功，才能执行测试用例
    return app.ready();
  });
  afterEach(mock.restore);

  describe('index()', () => {
    it('should index exists newsType', function* () {
      const ctx = app.mockContext();
      const newsType = yield ctx.service.newsType.index();
      assert(newsType);
      assert(typeof(newsType)=="object");
    });

    it('should get null when newsType not exists', function* () {
      const ctx = app.mockContext();
      const newsType = yield ctx.service.newsType.index({tid:10000});
      assert(newsType.meta.total==0);
    });
  });
  describe('show()', () => {
    it('should show exists newsType', function* () {
      const ctx = app.mockContext();
      const newsType = yield ctx.service.newsType.show({tid:1});
      assert(newsType);
      assert(typeof(newsType)=="object");
    });

    it('should get null when newsType not exists', function* () {
      const ctx = app.mockContext();
      const newsType = yield ctx.service.newsType.show({tid:10000});
      assert(newsType.meta.total==0);
    });
  });
  describe('update()', () => {
    it('should update exists newsType', function* () {
      const ctx = app.mockContext();
      const result = yield ctx.service.newsType.update(1,{status:0});
      assert(result);
      // assert(result.tid==5);
    });

    it('should get null when newsType not exists', function* () {
      const ctx = app.mockContext();
      const result = yield ctx.service.newsType.update(10000,{status:0});
      assert(!result);
    });
  });
  describe('create()', () => {
    it('should create exists newsType', function* () {
      const ctx = app.mockContext();
      const newsType = yield ctx.service.newsType.create({"name":"关于我们","link":"aboutus.html","ord":1,"status":1,"time":"1325472736","uid":1});
      assert(newsType);
      assert(newsType.name=="关于我们");
    });

    it('should get null when newsType not exists', function* () {
      const ctx = app.mockContext();
      const newsType = yield ctx.service.newsType.create();
      assert(!newsType);
    });
  });
  describe('destroy()', () => {
    it('should destroy exists newsType', function* () {
      const ctx = app.mockContext();
      const newsType = yield ctx.service.newsType.destroy({id:'5'});
      assert(newsType);
      assert(typeof(newsType)=="object");
    });
  });
});