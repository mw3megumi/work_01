'use strict';
let even_asc_odd_desc = function(collection){

    let evenNumbers = collection.filter(num => num % 2 === 0);
    let oddNumbers = collection.filter(num => num % 2 !== 0);

    evenNumbers.sort((a, b) => a - b);
    oddNumbers.sort((a, b) => b - a);
    let result = evenNumbers.concat(oddNumbers);

    return result;
};
module.exports = even_asc_odd_desc;
