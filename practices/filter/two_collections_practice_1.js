'use strict';

function choose_common_elements(collection_a, collection_b) {

  //在这里写入代码
  let result = collection_a.filter((value) => collection_b.includes(value))
  return result;
}

module.exports = choose_common_elements;
