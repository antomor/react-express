var express = require('express');
var router = express.Router();

/* /strings/:value */
module.exports = (req, res, next) => {
  const length = req.query.length ? req.query.length:1
  const value = req.params.value;
  res.json([]);
};
