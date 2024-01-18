"use strict";

function collect_all_even(collection) {
  //在这里写入代码
  let tep = [];
  collection.forEach(element => {
    if (element % 2 == 0) {
      tep.push(element)
    }
  });
  return tep;
}

module.exports = collect_all_even;
