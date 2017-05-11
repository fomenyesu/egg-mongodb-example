'use strict';

const request = require('supertest');
const assert = require('assert');
const mock = require('egg-mock');

describe('test/controller/newsType.test.js', () => {
  let app;
  before(() => {
    // 创建当前应用的 app 实例
    app = mock.app();
    // 等待 app 启动成功，才能执行测试用例
    return app.ready();
  });
  afterEach(mock.restore);

  describe('GET /api/newsType', () => {
    it('should status 200 and get the body', () => {
      return request(app.callback())
        .get('/api/newsType')
        .expect('Content-Type', /json/)
        .expect(200);
    });

    it('should send multi requests', function* () {
      // 使用 generator function 方式写测试用例，可以请求地发起多次请求
      yield request(app.callback())
        .get('/api/newsType')
        .expect('Content-Type', /json/)
        .expect(200);

      // 再请求一次
      yield request(app.callback())
        .get('/api/newsType')
        .expect('Content-Type', /json/)
        .expect(200);
    });
  });

  describe('GET /api/newsType/1', () => {
    it('should status 200 and get the body', () => {
      return request(app.callback())
        .get('/api/newsType/1')
        .expect('Content-Type', /json/)
        .expect(200);
        // .expect('{"meta":{"total":1},"data":[{"_id":"58d8a91a73410562025f37b4","tid":1,"name":"关于我们","link":"aboutus.html","ord":1,"status":1,"time":"1325472736","uid":1}]}');
    });

    it('should send multi requests', function* () {
      // 使用 generator function 方式写测试用例，可以请求地发起多次请求
      yield request(app.callback())
        .get('/api/newsType/1')
        .expect('Content-Type', /json/)
        .expect(200);
        // .expect('{"meta":{"total":1},"data":[{"_id":"58d8a91a73410562025f37b4","tid":1,"name":"关于我们","link":"aboutus.html","ord":1,"status":1,"time":"1325472736","uid":1}]}');

      // 再请求一次
      yield request(app.callback())
        .get('/api/newsType/1')
        .expect('Content-Type', /json/)
        .expect(200);
        // .expect('{"meta":{"total":1},"data":[{"_id":"58d8a91a73410562025f37b4","tid":1,"name":"关于我们","link":"aboutus.html","ord":1,"status":1,"time":"1325472736","uid":1}]}');
    });
  });

  describe('POST /api/newsType', () => {
    it('should status 200 and get the request body', () => {
      app.mockCsrf();
      return request(app.callback())
        .post('/api/newsType')
        .type('form')
        .send({"tid":2,"name":"关于我们","link":"aboutus.html","ord":1,"status":1,"time":"1325472736","uid":1})
        .expect(201);
    });
  });

  describe('PUT /api/newsType/3', () => {
    it('should status 200 and get the request body', () => {
      app.mockCsrf();
      return request(app.callback())
        .put('/api/newsType/5')
        .send({"status":0})
        .expect(200);
    });
  });
  describe('DELETE /api/newsType/3', () => {
    it('should status 200 and get the request body', () => {
      app.mockCsrf();
      return request(app.callback())
        .delete('/api/newsType/3')
        .expect(204);
    });
  });
});