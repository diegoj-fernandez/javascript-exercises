const reverseString = function(word) {
    let reverseWord = "";
    for (let i = word.length; i >= 0; i--) {
        reverseWord += word.slice(i - 1, i);
    }

    return reverseWord;
};

// Do not edit below this line
module.exports = reverseString;
