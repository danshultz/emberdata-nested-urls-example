var data = require('../../data');

module.exports = function(app) {
  var express = require('express');
  var usersPostsRouter = express.Router({ mergeParams: true });

  usersPostsRouter.get('/', function(req, res) {
    res.send({
      'posts': data.posts,
      'users': data.users
    });
  });

  usersPostsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  usersPostsRouter.get('/:id', function(req, res) {
    res.send({
      'posts': data.posts[req.params.id - 1],
      'users': data.users[req.params.id - 1]
    });
  });

  usersPostsRouter.put('/:id', function(req, res) {
    res.send({
      'users/posts': {
        id: req.params.id
      }
    });
  });

  usersPostsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/users/:user_id/posts', usersPostsRouter);
};
