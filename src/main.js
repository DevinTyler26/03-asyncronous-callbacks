'use strict';

const fileReader = require('./file-reader/reader');
const logger = require('./lib/logger');

const text1 = `${__dirname}/./assets/1.txt`;
const text2 = `${__dirname}/./assets/2.txt`;
const text3 = `${__dirname}/./assets/3.txt`;
// const filePaths = [
//   `${__dirname}/./assets/1.txt`, 
//   `${__dirname}/./assets/2.txt`,
//   `${__dirname}/./assets/3.txt`];

fileReader.readFile(text1, text2, text3, (err, data1, data2, data3) => {
  logger.log(logger.INFO, data1);
  logger.log(logger.INFO, data2);
  logger.log(logger.INFO, data3);    
});
