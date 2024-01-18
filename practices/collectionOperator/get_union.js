'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  let resultSet = new Set();

  for (let elementA of collection_a) {
    resultSet.add(elementA);
  }

  for (let elementB of collection_b) {
    resultSet.add(elementB);
  }

  let unionArray = Array.from(resultSet);
  
  return unionArray;
}

module.exports = get_union;

