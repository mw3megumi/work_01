'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  let result = collection_a.filter((value) => {
    for (let element of collection_b) {
      if (value % element === 0) {
        return true;
      }
    }
    return false;
  })
  return result;
}

module.exports = choose_divisible_integer;
