const sumAll = function(num1,num2) {
    let array1 = [];
    let sum = 0;

    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            sum += i;

            /*
            if (i <= num2) {
                sum += i;
            }
            */

        }
    } else if (num1 > num2) {
        for (let i = num1; i >= num2; i--) {
            sum += i;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
