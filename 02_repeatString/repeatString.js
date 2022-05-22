const repeatString = function(word,num) {
    if (num < 0) {
        return "ERROR";
    } else {
        let outputString = "";

        for (let i = 0; i < num; i++) {
            outputString += word;
        }

        return outputString;
    }

    /*

    //FIRST DRAFT

    let string = "hey";
    let num = 3;
    return string.repeat(num);

    */

    /*

    //SECOND DRAFT

    let originalString = "hey";
    let newString = "";
    let number = 10;

    if (number < 0) {
        return "ERROR";
    } else {
        for (let i = 0; i < number; i++) {
            newString = newString + originalString;
        }
    }

    return newString;

    */
};

// Do not edit below this line
module.exports = repeatString;
