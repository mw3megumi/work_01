'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  let result = [];
  if (number_a < number_b) {
    for (let i = number_a; i <= number_b; i++) {
      result.push(numberToAlphabet(i));
    }
  } else if (number_a > number_b) {
    for (let i = number_a; i >= number_b; i--) {
      result.push(numberToAlphabet(i));
    }
  } else {
    result.push(numberToAlphabet(number_a));
  }
  return result;
}

// 数字转换为字母
function numberToAlphabet(number) {
  let result = '';
  while (number > 0) {
    let remainder = (number - 1) % 26;
    result = String.fromCharCode(97 + remainder) + result;
    number = Math.floor((number - 1) / 26);
  }
  return result;
}

module.exports = get_letter_interval;
