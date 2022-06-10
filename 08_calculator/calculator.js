const add = function(num1,num2) {
  if (num1 >= 0 && num2 >= 0) {
    return num1 + num2;
  }
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(array1) {
	if (array1 == "") {
    return 0;
  } else if (array1.length == 1) {
    return array1[array1.length - 1];
  } else {
    let initial = 0;
    for (let i = 0; i < array1.length; i++) {
      initial += array1[i];
    }
    return initial;
  }
};

const multiply = function(array1) {
  let initial = 1;
  for (let i = 0; i < array1.length; i++) {
    initial *= array1[i];
  }
  return initial;
};

const power = function(num1,num2) {
  let initial = num1;
	for (let i = 0; i < num2 - 1; i++) {
    initial *= num1;
  }
  return initial;
};

const factorial = function(num1) {
	if (num1 == 0 || num1 == 1) {
    return 1;
  } else {
    let array1 = [];
    for (let i = 1; i <= num1; i++) {
      array1.push(i);
    }
    return multiply(array1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
