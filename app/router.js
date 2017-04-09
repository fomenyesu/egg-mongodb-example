
module.exports = app => {
  // app.get('/', 'home.index');
  app.get('/', 'client.index');
  // app.get('/news', 'news.list');
  // app.get('/users', 'users.index');
  app.resources('users', '/api/users', 'users');
  app.resources('news', '/api/news', 'news');
  app.resources('newsType', '/api/newsType', 'newsType');
};




