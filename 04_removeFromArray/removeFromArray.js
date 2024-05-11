const removeFromArray = function(array, ...valueToRemove) {
    let newArray = [];

    for (const element of array) {
        if (valueToRemove.some(value => value === element)) { // If any in valueToRemove matches element.
            continue;
        } else {
            newArray.push(element);
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
