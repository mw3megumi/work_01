'use strict';

function double_to_one(collection) {

  //在这里写入代码
  return collection.reduce((result, currentArray) => {
    return result.concat(currentArray);
  }, []);
}

module.exports = double_to_one;
