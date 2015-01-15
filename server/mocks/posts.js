var data = require('../data');

module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();

  postsRouter.get('/', function(req, res) {
    res.send({
      'posts': data.posts,
      'users': data.users
    });
  });

  postsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  postsRouter.get('/:id', function(req, res) {
    res.send({
      'posts': data.posts[req.params.id - 1],
      'users': data.users[req.params.id - 1]
    });
  });

  postsRouter.put('/:id', function(req, res) {
    res.send({
      'posts': data.posts[req.params.id - 1]
    });
  });

  postsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/posts', postsRouter);
};
