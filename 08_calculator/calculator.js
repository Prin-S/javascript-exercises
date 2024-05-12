const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((total, current) => total * current, 1);
};

const power = function(num, pow) {
	let sum = num;

  for (let i = 0; i < pow - 1; i++) {
    sum *= num;
  }

  return sum;
};

const factorial = function(numToFactorial) {
  if (numToFactorial > 0) {
  let sum = numToFactorial;

  for (let i = numToFactorial - 1; i > 0; i--) {
    sum *= i;
  }
  
  return sum;
  } else {
    return 1;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
