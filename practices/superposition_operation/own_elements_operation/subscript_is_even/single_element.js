'use strict';
let single_element = function(collection){

    let evenElements = collection.filter((num, index) => index % 2 === 1);
    let uniqueElements = evenElements.filter((num, index, arr) => arr.indexOf(num) === arr.lastIndexOf(num));

    return uniqueElements;
};
module.exports = single_element;
