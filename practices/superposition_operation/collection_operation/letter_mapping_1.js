'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  let evenNumbers = collection.filter(number => number % 2 === 0);
  let result = evenNumbers.map(number => alphabet[number - 1]);

  return result;
}

module.exports = even_to_letter;
