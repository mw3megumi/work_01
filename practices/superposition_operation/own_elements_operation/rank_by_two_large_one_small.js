'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  let sortedCollection = collection.sort((a, b) => a - b);

  for (let i = 0; i < sortedCollection.length - 2; i += 3) {
    let temp = sortedCollection[i];
    sortedCollection[i] = sortedCollection[i + 1];
    sortedCollection[i + 1] = sortedCollection[i + 2];
    sortedCollection[i + 2] = temp;
  }

  return sortedCollection;
}
module.exports = rank_by_two_large_one_small;
