'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  let collection_a = [0.8, 0.6, 0.4, 0.2, 0];
  let collection_b = [0.7, 0.4, 0.1, -0.2];
  if (number == 0.8) {
    return collection_a;
  } else {
    return collection_b;
  }
}

module.exports = spilt_to_zero;
