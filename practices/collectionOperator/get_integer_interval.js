'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  let tep = []
  if (number_a < number_b) {
    for (let i = number_a; i <= number_b; i++) {
      tep.push(i)
    }
  } else if (number_a > number_b) {
    for (let i = number_a; i >= number_b; i--) {
      tep.push(i)
    }
  } else if (number_a === number_b) {
    
      tep.push(number_a)
    
  }
  return tep;
}

module.exports = get_integer_interval;

