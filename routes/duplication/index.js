const express = require('express');
const string = require('./string')

module.exports = function(app) {
  const route = express.Router();

  const base = '/api/duplication';
  app.use(base, route);

  route.get('/string/:value', string);
}