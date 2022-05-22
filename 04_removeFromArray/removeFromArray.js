const removeFromArray = function(randArray,randElementOne,randElementTwo,randElementThree,randElementFour) {
    let newArray = [];

    for (let i = 0; i < randArray.length; i++) {
        if (randArray[i] !== randElementOne && randArray[i] !== randElementTwo && randArray[i] !== randElementThree && randArray[i] !== randElementFour) {
            newArray.push(randArray[i]);
        }
    }

    return newArray;

    /*

    // FIRST DRAFT

    for (let i = 0; i < randArray.length; i++) {
        if (randArray[i] == randElementOne || randArray[i] == randElementTwo) {
            randArray.splice(i,1);
            //return randArray;
        }
    }
    return randArray;

    */
};

// Do not edit below this line
module.exports = removeFromArray;
