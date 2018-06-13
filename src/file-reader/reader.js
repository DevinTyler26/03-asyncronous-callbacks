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
