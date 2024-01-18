'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  let sortedCollection = collection.sort((a, b) => a - b);

  let median;
  if (sortedCollection.length % 2 == 0) {
    median = Math.ceil((sortedCollection[sortedCollection.length / 2 - 1] + sortedCollection[sortedCollection.length / 2]) / 2);
  } 
  else {
    median = sortedCollection[Math.floor(sortedCollection.length / 2)];
  }

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';

  while (median > 0) {
    let remainder = (median - 1) % 26;
    result = alphabet[remainder] + result;
    median = Math.floor((median - 1) / 26);
  }

  return result;
}

module.exports = median_to_letter;
