'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  let tep = []
  if (number_a < number_b) {
    for (let i = number_a; i <= number_b; i++) {
      if (i % 2 === 0) {
        tep.push(i)
      }
    }
  } else if (number_a > number_b) {
    for (let i = number_a; i >= number_b; i--) {
      if (i % 2 === 0) {
        tep.push(i)
      }
    }
  } else if (number_a === number_b) {

    if (number_a % 2 === 0) {
      tep.push(number_a)
    } else {
      tep.push()
    }
  }
  return tep;
}

module.exports = get_integer_interval_2;
