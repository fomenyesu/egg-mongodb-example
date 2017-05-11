'use strict';

const request = require('supertest');
const assert = require('assert');
const mock = require('egg-mock');

describe('test/controller/news.test.js', () => {
  let app;
  before(() => {
    // 创建当前应用的 app 实例
    app = mock.app();
    // 等待 app 启动成功，才能执行测试用例
    return app.ready();
  });
  afterEach(mock.restore);

  describe('GET /api/news', () => {
    it('should status 200 and get the body', () => {
      return request(app.callback())
        .get('/api/news')
        .expect('Content-Type', /json/)
        .expect(200);
    });

    it('should send multi requests', function* () {
      // 使用 generator function 方式写测试用例，可以请求地发起多次请求
      yield request(app.callback())
        .get('/api/news')
        .expect('Content-Type', /json/)
        .expect(200);

      // 再请求一次
      yield request(app.callback())
        .get('/api/news')
        .expect('Content-Type', /json/)
        .expect(200);
    });
  });

  describe('GET /api/news/1', () => {
    it('should status 200 and get the body', () => {
      return request(app.callback())
        .get('/api/news/1')
        .expect('Content-Type', /json/)
        .expect(200);
        // .expect('{"meta":{"total":1},"data":[{"_id":"58d8a8ea73410562025f37b0","nid":1,"title":"aboutus","con":"httml","module":"aboutus","type":1,"ord":1,"seotitle":"1","seokeyword":"1","seodesc":"1","uid":1,"langid":"cn","time":"1325472736"}]}');
    });

    it('should send multi requests', function* () {
      // 使用 generator function 方式写测试用例，可以请求地发起多次请求
      yield request(app.callback())
        .get('/api/news/1')
        .expect('Content-Type', /json/)
        .expect(200);
        // .expect('{"meta":{"total":1},"data":[{"_id":"58d8a8ea73410562025f37b0","nid":1,"title":"aboutus","con":"httml","module":"aboutus","type":1,"ord":1,"seotitle":"1","seokeyword":"1","seodesc":"1","uid":1,"langid":"cn","time":"1325472736"}]}');

      // 再请求一次
      yield request(app.callback())
        .get('/api/news/1')
        .expect('Content-Type', /json/)
        .expect(200);
        // .expect('{"meta":{"total":1},"data":[{"_id":"58d8a8ea73410562025f37b0","nid":1,"title":"aboutus","con":"httml","module":"aboutus","type":1,"ord":1,"seotitle":"1","seokeyword":"1","seodesc":"1","uid":1,"langid":"cn","time":"1325472736"}]}');
    });
  });

  describe('POST /api/news', () => {
    it('should status 200 and get the request body', () => {
      app.mockCsrf();
      return request(app.callback())
        .post('/api/news')
        .type('form')
        .send({nid:3,title:"aboutus",con:"httml",module:"aboutus",type:1,ord:1,seotitle:"1",seokeyword:"1",seodesc:"1",uid:1,langid:"cn",time:"1325472736"})
        .expect(201);
    });
  });

  describe('PUT /api/news/3', () => {
    it('should status 200 and get the request body', () => {
      app.mockCsrf();
      return request(app.callback())
        .put('/api/news/5')
        .send({"status":0})
        .expect(200);
    });
  });
  describe('DELETE /api/news/3', () => {
    it('should status 200 and get the request body', () => {
      app.mockCsrf();
      return request(app.callback())
        .delete('/api/news/3')
        .expect(204);
    });
  });
});