const getTheTitles = function(array) {

    //MY SOLUTION

    let titleArray = [];
    for (let i = 0; i < array.length; i++) {
        titleArray.push(array[i].title);
    }
    return titleArray;

    //TOP SOLUTION

    //return array.map(book => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
