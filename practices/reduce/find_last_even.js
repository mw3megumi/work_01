'use strict';

function find_last_even(collection) {
  //在这里写入代码
  for (let index = collection.length; index > 0; index--) {
    if (collection[index] % 2 === 0) {
      return collection[index];
    }
  }
}

module.exports = find_last_even;
