const myCallBack = (data) => {
  console.log('2: Recieved', data);
};

const useCallback = (cb) => {
  const text = 'TEXT';
  console.log('1: Calling the callback');
  cb(text);
  console.log('3: After the callback');
};

const errorFirstCallback = (err, data) => {
  if (err) {
    return console.log('2: ERROR: ', err);
  }
  return console.log('2: SUCCESS: Received: ', data);
};

const useErrorFirstCallback = (text, cb) => {
  try {
    if (!text || typeof text !== 'string') {
      throw new TypeError(`${text} is not a string`);
    }
    console.log('1: Calling the error firs cb with successful text input');
    cb(null, text);
    console.log('3: SUCCESS: After the error first cb with successful ext input');
  } catch (err) {
    console.log('1: Calling the error first callback with ERROR');
    cb(err, null);
    console.log('3: ERROR: after the error first cb with bad input');
  }
};

useErrorFirstCallback('hi', errorFirstCallback);
