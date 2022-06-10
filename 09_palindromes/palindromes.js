const palindromes = function (word) {

    

    //MY SOLUTION

    filteredString = word.toLowerCase().replace(/[^a-z]/g, "");
    backwardsString = filteredString.split("").reverse().join("");
    return filteredString == backwardsString;

    /*

    // doesn't replace numbers 0-9
    const regex = /[^\w]/g;

    // use method chaining to reduce number of variables
    let wordLowerCase = word.toLowerCase();
    let wordFiltered = wordLowerCase.replace(regex, "");
    let array = wordFiltered.split("");
    let arrayReverse = array.reverse();
    let wordBackwards = arrayReverse.join("");

    // do not need an if conditional for this result
    if (filteredString == backwardsString) {
        return true;
    } else {
        return false;
    }

    */

    //TOP SOLUTION

    //filteredString = word.toLowerCase().replace(/[^a-z]/g, "");
    //    return (
    //        filteredString
    //            .split("")
    //            .reverse()
    //            .join("") == filteredString
    //    );
};

// Do not edit below this line
module.exports = palindromes;