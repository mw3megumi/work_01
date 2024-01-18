'use strict';

function choose_multiples_of_three(collection) {

  //在这里写入代码
  let tep=[]
  collection.forEach(element => {
    if(element%3===0){
      tep.push(element)
    }
  });

  return tep;
}

module.exports = choose_multiples_of_three;
