const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS";
    } else if (n == 1 || n == 2) {
        return 1;
    } else {
        let fiboArray = [1,1];
        for (let i = 2; i < n; i++) {
            fiboArray.push(fiboArray[i - 2] + fiboArray[i - 1]);
        }
        return fiboArray[fiboArray.length - 1];
    }

    //could I also use the actual fibonacci equation?
};

// Do not edit below this line
module.exports = fibonacci;
