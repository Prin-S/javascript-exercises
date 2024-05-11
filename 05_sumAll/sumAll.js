const sumAll = function(firstNum, secondNum) {
    if (firstNum < 0 || secondNum < 0 || typeof firstNum != 'number' || typeof secondNum != 'number') {
        return 'ERROR';
    } else {
        let sum = 0;
        let tempNum = 0;
    
        if (firstNum > secondNum) { // Make sure the first number is smaller than the second.
            tempNum = firstNum;
            firstNum = secondNum;
            secondNum = tempNum;
        }
    
        for (let i = firstNum; i <= secondNum; i++) {
            sum += i;
        }
    
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
