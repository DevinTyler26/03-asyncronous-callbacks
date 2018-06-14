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


fileReader.readMoreFiles = (files, cb) => {
  return fs.readFile(files[0], (err1, data1) => {
    if (err1) return cb(err1);
    return fs.readFile(files[1], (err2, data2) => {
      if (err2) return cb(err2);
      return fs.readFile(files[2], (err3, data3) => {
        if (err3) return cb(err3);
        return cb(null, [data1.toString(), data2.toString(), data3.toString()]);
      });
    });
  });
};
