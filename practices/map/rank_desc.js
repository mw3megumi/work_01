'use strict';
let rank_desc = function(collection){
  //return [2,3,4,5,6];
  return collection.sort((a, b) => a- b);
};

module.exports = rank_desc;
