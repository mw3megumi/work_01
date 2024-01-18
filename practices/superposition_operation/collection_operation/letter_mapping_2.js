'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  let sum = collection.reduce((acc, num) => acc + num, 0);
  let average = Math.ceil(sum / collection.length);

  let result = '';
  while (average > 0) {
    let remainder = (average - 1) % 26;
    result = alphabet[remainder] + result;
    average = Math.floor((average - 1) / 26);
  }

  return result;
}

module.exports = average_to_letter;

