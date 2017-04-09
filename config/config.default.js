// config/config.default.js
// 切记：要改为自己的 key 值
exports.keys = "key";
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
};
exports.news = {
  pageSize: 5,
  serverUrl: 'https://hacker-news.firebaseio.com/v0',
};
// mount middleware
exports.middleware = [
  'robot','errorHandler'
];
exports.errorHandler = {
  match: '/api',
},
// middleware config
exports.robot = {
  ua: [
    /curl/i,
    /Baiduspider/i,
  ],
};

exports.security = {
  ignore: '/api/',
  csrf: {
    ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
  },
};
exports.mongoose = {
  url: 'mongodb://127.0.0.1/testdb',
  options: {}
};

