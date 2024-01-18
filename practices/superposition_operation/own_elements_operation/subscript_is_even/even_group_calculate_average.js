'use strict';
let even_group_calculate_average = function(collection){
    let evenElements = collection.filter((num, index) => (index + 1) % 2 === 0);

    let evenNumbers = evenElements.filter(num => num % 2 === 0);

    let groupedNumbers = groupNumbersByDigit(evenNumbers);

    let averages = groupedNumbers.map(group => calculateAverage(group));

    return averages.length > 0 ? averages : [0];
}

function groupNumbersByDigit(numbers) {
    let groupedNumbers = {};

    for (let num of numbers) {
        let digitCount = getDigitCount(num);

        if (!groupedNumbers[digitCount]) {
            groupedNumbers[digitCount] = [];
        }

        groupedNumbers[digitCount].push(num);
    }

    return Object.values(groupedNumbers);
}

function calculateAverage(numbers) {
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    return numbers.length > 0 ? Math.floor(sum / numbers.length) : 0;
}

function getDigitCount(number) {
    return number.toString().length;
};
module.exports = even_group_calculate_average;
