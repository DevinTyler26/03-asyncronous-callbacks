'use strict';

const fs = require('fs');
const logger = require('../lib/logger');

const fileReader = module.exports = {};

fileReader.readFile = (paths, cb) => {
  return fs.readFile(paths, (err, data) => {
    if (err) return cb(err);
    logger.log(logger.INFO, data.toString());
    return undefined;
  });
};


fileReader.readMoreFiles = (arr, cb) => {
  return fs.readFile(arr[0], (data1, err1) => {
    if (err1) return cb(err1);
    return fs.readFile(arr[1], (err2, data2) => {
      if (err2) return cb(data2);
      return fs.readFile(arr[2], (err3, data3) => {
        if (err3) return cb(data3);
        return cb(null, data1.tostring(), data2.tostring(), data3.tostring());
      });
    });
  });
};
