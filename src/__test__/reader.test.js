'use strict';

const fs = require('fs');
const fileReader = require('../file-reader/reader');

const mockText1 = `${__dirname}/./mock-assets/1.txt`;
const mockText2 = `${__dirname}/./mock-assets/2.txt`;
const mockText3 = `${__dirname}/./mock-assets/3.txt`;

let mockData = [];

describe('tests to see if fileReader reads the files', () => {
  beforeAll(() => {
    mockData = [
      fs.readFile(mockText1, { encoding: 'utf-8' }),
      fs.readFile(mockText2, { encoding: 'utf-8' }),
      fs.readFile(mockText3, { encoding: 'utf-8' }),            
    ];
  });
    
  test('will show that the data from outside function equals the mockData array', () => {
    fileReader.readFile(mockText1, (err, data1) => {
      expect(data1).toEqual(mockData[0]);
      expect(err).toBeNull();
    });
  });

  test('will return an err if file path or name is bad', () => {
    fileReader.readFile('bad path', (err) => {
      expect(err).toHaveProperty('errno');
      expect(err.code).toEqual('ENOENT');
    });
  });


  test('this will test multiple arrays going into readMoreFiles', () => {
    fileReader.readMoreFiles(mockText1, (err, data1) => {
      expect(data1).toEqual(mockData[0]);
      expect(err).toBeNull();
    });
    fileReader.readMoreFiles(mockText2, (err, data2) => {
      expect(data2).toEqual(mockData[1]);
      expect(err).toBeNull();
    });
    fileReader.readMoreFiles(mockText3, (err, data3) => {
      expect(data3).toEqual(mockData[2]);
      expect(err).toBeNull();
    });
  });
});
