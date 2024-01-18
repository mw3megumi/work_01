'use strict';

function double_to_one(collection) {

  //在这里写入代码
  let tep = collection.reduce((result, currentArray) => {
    return result.concat(currentArray);
  }, []);

  tep.sort((a, b) => a - b);
  return tep.filter((item, index) => item != tep[index + 1]);
}

module.exports = double_to_one;
