'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  let alength = collection_a.length;
  let blength = collection_b.length;
  if (alength != blength) {
    return false;
  }
  for (let i = 0; i < alength; i++) {

    if (collection_a[i] != collection_b[i]) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = compare_collections;


