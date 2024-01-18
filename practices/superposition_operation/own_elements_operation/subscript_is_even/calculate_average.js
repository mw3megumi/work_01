'use strict';
let calculate_average = function(collection){
    let evenElements = collection.filter((num, index) => (index + 1) % 2 === 0);

    let sum = evenElements.reduce((acc, num) => acc + num, 0);
    let average = evenElements.length > 0 ? sum / evenElements.length : 0;

    return average;
};
module.exports = calculate_average;
