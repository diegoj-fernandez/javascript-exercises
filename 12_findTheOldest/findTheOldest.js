const findTheOldest = function(array) {
    const currentYear = new Date().getFullYear();
    let namesArray = [];
    let agesArray = [];

    let age;
    let oldestAge = 0;
    let oldestPerson;

    for (let i = 0; i < array.length; i++) {
        namesArray.push(array[i].name);
        if (array[i].hasOwnProperty("yearOfDeath")) {
            age = array[i].yearOfDeath - array[i].yearOfBirth;
            agesArray.push(age);
        } else {
            age = currentYear - array[i].yearOfBirth;
            agesArray.push(age);
        }
    }

    for (let i = 0; i < agesArray.length; i++) {
        if (agesArray[i] >= oldestAge) {
            oldestAge = agesArray[i];
            oldestPerson = namesArray[i];
        }
    }

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
