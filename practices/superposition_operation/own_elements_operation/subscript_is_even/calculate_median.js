'use strict';
let calculate_median = function(collection){
    let evenElements = collection.filter((num, index) => (index + 1) % 2 === 0);

    evenElements.sort((a, b) => a - b);

    let length = evenElements.length;
    let median;

    if (length % 2 === 0) {
        median = (evenElements[length / 2 - 1] + evenElements[length / 2]) / 2;
    } 
    else {
        median = evenElements[Math.floor(length / 2)];
    }

    return median;
};
module.exports = calculate_median;
