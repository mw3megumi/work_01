'use strict';
let number_map_to_word = function(collection){
  //return ['a','b','c','d','e'];
  let result = [];
  for (let i = 0; i < collection.length; i++) {
    let number = collection[i];
    let word = numberToAlphabet(number);
    result.push(word);
  }
  return result;
};

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

module.exports = number_map_to_word;
