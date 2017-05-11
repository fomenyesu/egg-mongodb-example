'use strict';

const assert = require('assert');
const mock = require('egg-mock');

describe('test/service/news.test.js', () => {
  let app;
  before(() => {
    // 创建当前应用的 app 实例
    app = mock.app();
    // 等待 app 启动成功，才能执行测试用例
    return app.ready();
  });
  afterEach(mock.restore);

  describe('index()', () => {
    it('should index exists news', function* () {
      const ctx = app.mockContext();
      const news = yield ctx.service.news.index();
      assert(news);
      assert(typeof(news)=="object");
    });

    it('should get null when news not exists', function* () {
      const ctx = app.mockContext();
      const news = yield ctx.service.news.index({nid:10000});
      assert(news.meta.total==0);
    });
  });
  describe('show()', () => {
    it('should show exists news', function* () {
      const ctx = app.mockContext();
      const news = yield ctx.service.news.show({nid:1});
      assert(news);
      assert(typeof(news)=="object");
    });

    it('should get null when news not exists', function* () {
      const ctx = app.mockContext();
      const news = yield ctx.service.news.show({nid:10000});
      assert(news.meta.total==0);
    });
  });
  describe('update()', () => {
    it('should update exists news', function* () {
      const ctx = app.mockContext();
      const result = yield ctx.service.news.update(1,{ord:0});
        console.log("test console",result);
      assert(result.ord==0);
      // assert(result.nid==5);
    });

    it('should get null when news not exists', function* () {
      const ctx = app.mockContext();
      const result = yield ctx.service.news.update(10000,{ord:0});
      assert(!result);
    });
  });
  describe('create()', () => {
    it('should create exists news', function* () {
      const ctx = app.mockContext();
      const news = yield ctx.service.news.create({title:"aboutus",con:"httml",module:"aboutus",type:1,ord:1,seotitle:"1",seokeyword:"1",seodesc:"1",uid:1,langid:"cn",time:"1325472736"});
      assert(news);
      assert(news.title=='aboutus');
    });

    it('should get null when news not exists', function* () {
      const ctx = app.mockContext();
      const news = yield ctx.service.news.create();
      assert(!news);
    });
  });
  describe('destroy()', () => {
    it('should destroy exists news', function* () {
      const ctx = app.mockContext();
      const news = yield ctx.service.news.destroy({id:'5'});
      assert(news);
      assert(typeof(news)=="object");
    });
  });
});