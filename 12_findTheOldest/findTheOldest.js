const findTheOldest = function(people) {
    let oldestAge = 0;

    return people.map(curr => {
        if (curr.yearOfDeath == undefined) {
            curr.yearOfDeath = new Date().getFullYear();
        }
        return curr;
    }).reduce((oldest, curr) => {
        if (curr.yearOfDeath - curr.yearOfBirth > oldestAge) {
            oldestAge = curr.yearOfDeath - curr.yearOfBirth;
            oldest = curr;
        }
        return oldest;
    }, 0)
};

// Do not edit below this line
module.exports = findTheOldest;
