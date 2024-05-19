const fibonacci = function(num) {
    if (num < 0) {
        return 'OOPS';
    } else if (num == 0) {
        return 0;
    }

    fibSequence = [1, 1];

    for (i = 2; i < num; i++) {
        fibSequence.push(fibSequence[i - 2] + fibSequence[i - 1]);
    }

    return fibSequence.pop();
};

// Do not edit below this line
module.exports = fibonacci;
