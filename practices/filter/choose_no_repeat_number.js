'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  let resultSet = new Set();

  for (let element of collection) {
    resultSet.add(element);
  }

  let result = Array.from(resultSet);

  return result;
}

module.exports = choose_no_repeat_number;
