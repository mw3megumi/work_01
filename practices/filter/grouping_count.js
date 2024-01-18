'use strict';

function grouping_count(collection) {

  //在这里写入代码
  let countMap = {};

  for (let num of collection) {
    if (!countMap[num]) {
      countMap[num] = 0;
    }
    countMap[num]++;
  }

  return countMap;

}

module.exports = grouping_count;
