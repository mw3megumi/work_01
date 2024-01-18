'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  let sum = 0;
 for (let index = 0; index < collection.length; index++) {
   sum+=collection[index];
  }
  return sum;
}

module.exports = calculate_elements_sum;

