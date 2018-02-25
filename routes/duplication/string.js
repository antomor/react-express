const express = require('express');
const router = express.Router();
const DuplicationCounter = require('./../../utils/duplication');

const duplCnt = new DuplicationCounter();

function checkRequest(req) {
  if (!req.params.value) {
    return false;
  }
  if (req.query.length && (req.query.length > req.params.value.length)){
    return false;
  } 
  // test for alpha-numeric values
  const re = /^[a-zA-Z0-9]+$/;
  return re.test(req.params.value);
}

/* /strings/:value */
module.exports = (req, res, next) => {
  if (!checkRequest(req)) {
    res.status(400);
    res.json({
      error: {
        msg: 'Invalid string value: only alpha-numeric chars are admitted'
      }
    });
  }

  const length = req.query.length ? req.query.length : -1
  const value = req.params.value;
  const duplicates = duplCnt.count(value, length);
  const result = [];
  for (const key in duplicates) {
    if (duplicates.hasOwnProperty(key)) {
      result.push({
        'key': key,
        'value': duplicates[key]
      })
    }
  }
  console.log(result);
  res.json({
    duplicates: result
  });
};