'use strict';
function one_add_next_multiply_three(collection){
  //return [12,24,36,48,60,72,84,96,108,120];
  let result = collection.slice(0, -1).map((num, index) => (num + collection[index + 1]) * 3);

  return result;
}
module.exports = one_add_next_multiply_three;
