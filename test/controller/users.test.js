'use strict';

const request = require('supertest');
const assert = require('assert');
const mock = require('egg-mock');

describe('test/controller/users.test.js', () => {
  let app;
  before(() => {
    // 创建当前应用的 app 实例
    app = mock.app();
    // 等待 app 启动成功，才能执行测试用例
    return app.ready();
  });
  afterEach(mock.restore);

  describe('GET /api/users', () => {
    it('should status 200 and get the body', () => {
      return request(app.callback())
        .get('/api/users')
        .expect('Content-Type', /json/)
        .expect(200);
    });

    it('should send multi requests', function* () {
      // 使用 generator function 方式写测试用例，可以请求地发起多次请求
      yield request(app.callback())
        .get('/api/users')
        .expect('Content-Type', /json/)
        .expect(200);

      // 再请求一次
      yield request(app.callback())
        .get('/api/users')
        .expect('Content-Type', /json/)
        .expect(200);
    });
  });

  describe('GET /api/users/1', () => {
    it('should status 200 and get the body', () => {
      return request(app.callback())
        .get('/api/users/1')
        .expect('Content-Type', /json/)
        .expect(200)
        .expect('{"meta":{"total":1},"data":[{"_id":"58d8a899f5f2486f1f6d4236","uid":1,"name":"admin","pass":"123","status":1,"time":"1325472736"}]}');
    });

    it('should send multi requests', function* () {
      // 使用 generator function 方式写测试用例，可以请求地发起多次请求
      yield request(app.callback())
        .get('/api/users/1')
        .expect('Content-Type', /json/)
        .expect(200)
        .expect('{"meta":{"total":1},"data":[{"_id":"58d8a899f5f2486f1f6d4236","uid":1,"name":"admin","pass":"123","status":1,"time":"1325472736"}]}');

      // 再请求一次
      yield request(app.callback())
        .get('/api/users/1')
        .expect('Content-Type', /json/)
        .expect(200)
        .expect('{"meta":{"total":1},"data":[{"_id":"58d8a899f5f2486f1f6d4236","uid":1,"name":"admin","pass":"123","status":1,"time":"1325472736"}]}');
    });
  });

  describe('POST /api/users', () => {
    it('should status 200 and get the request body', () => {
      app.mockCsrf();
      const varName = "admin1" + parseInt(1000*Math.random());
      return request(app.callback())
        .post('/api/users')
        .type('form')
        .send({"uid":5,"name":varName,"pass":"1231","status":1,"time":"1325472736"})
        .expect(201);
    });
  });

  describe('PUT /api/users/3', () => {
    it('should status 200 and get the request body', () => {
      app.mockCsrf();
      return request(app.callback())
        .put('/api/users/5')
        .send({"status":0})
        .expect(200);
    });
  });
  describe('DELETE /api/users/3', () => {
    it('should status 200 and get the request body', () => {
      app.mockCsrf();
      return request(app.callback())
        .delete('/api/users/3')
        .expect(204);
    });
  });
});