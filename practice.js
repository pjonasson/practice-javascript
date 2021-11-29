// Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
function printNumbersDivisibleByThree() {
  var index = 3;
  while (index < 1000) {
    console.log(index);
    index += 3;
  }
}

printNumbersDivisibleByThree();

// // Write a method that accepts an array of strings and prints out every other string.
function printEveryOtherItem(strings) {
  var index = 0;
  strings.forEach(function (string) {
    if (index % 2 === 0) {
      console.log(string);
    }
    index += 1;
  });
}
printEveryOtherItem(["a", "b", "c", "d", "e"]);

// Write a method that accepts an array of numbers and returns the sum.
function computeSum(numbers) {
  var sum = 0;
  numbers.forEach(function (number) {
    sum += number;
  });
  return sum;
}
console.log(computeSum([2, 4, 5]));

// Start with the hash: city_populations = {chi: 2700000}
// Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
// The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
var cityPopulations = { chi: 2700000 };
cityPopulations["nyc"] = 8400000;
cityPopulations.sf = 800000; // same as cityPopulations[&quot;sf&quot;]
console.log(cityPopulations);

// Write a method that prints out every number from 1 to 100.
function oneToAHundred() {
  var number = 0;
  while (number < 100) {
    number += 1;
    console.log(number);
  }
}

oneToAHundred();

// Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

function everyOtherNumber() {
  var number = 1;
  while (number < 100) {
    console.log(number);
    number += 2;
  }
}

everyOtherNumber();

// Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.

function countHowMany(array) {
  var count = 0;
  array.forEach(function (number) {
    if (number === 55) {
      count += 1;
    }
  });
  return count;
}

console.log(countHowMany([100, 55, 65, 55, 75, 55, 1000, 55]));

// Write a method that accepts an array of strings and returns a new array that has the string &quot;awesomesauce&quot; inserted between every string.
// For example, if the initial array is [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;, &quot;e&quot;], then the returned array should be [&quot;a&quot;, &quot;awesomesauce&quot;, &quot;b&quot;, &quot;awesomesauce&quot;, &quot;c&quot;, &quot;awesomesauce&quot;, &quot;d&quot;, &quot;awesomesauce&quot;, &quot;e&quot;].
function awesomesauce(array) {
  var newArray = [];
  array.forEach(function (string) {
    newArray.push(string);
    newArray.push("awesomesauce");
  });
  return newArray;
}

console.log(awesomesauce(["cool", "no", "hello", "okay"]));

// Start with the hash: item_amounts = {chair: 5, table: 2}
// Someone just bought two chairs. Change the hash such that the chair amount is 3.
// The final result should be: {chair: 3, table: 2}

var itemAmounts = { chair: 5, table: 2 };
itemAmounts.chair = 3;
console.log(itemAmounts);

// // Start with the hash: item_amounts = {chair: 5, table: 2}
// // You received 7 desks to sell. Change the hash to include desks.
// // The final result should be: {chair: 5, table: 2, desk: 7}
var itemAmounts = { chair: 5, table: 2 };
itemAmounts.desk = 7;
console.log(itemAmounts);

// // Write a method that accepts a number and returns its factorial.
// // For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

function factorial(number) {
  var product = 1;
  while (number > 0) {
    product = product * number;
    number -= 1;
  }
  return product;
}

console.log(factorial(5));

// // Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array.
// // For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

function comboArraySums(array1, array2) {
  var index = 0;
  var index2 = 0;
  var newArray = [];
  while (index < array1.length) {
    newArray.push(array1[index] + array2[index2]);
    index++;
    if (index === array1.length) {
      index = 0;
      index2++;
    }
    if (index2 === array2.length) {
      break;
    }
  }
  return newArray;
}

console.log(comboArraySums([1, 5, 10], [100, 500, 1000]));
