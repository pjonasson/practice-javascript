var numbers = [1, 2, 3, 4, 5];
function sum(array) {
  var sum = 0;
  var index = 0;
  while (index < array.length) {
    sum += array[index];
    index += 1;
  }
  return sum;
}

console.log(sum(numbers));

function reversify(array) {
  var result = [];
  var index = array.length - 1;
  while (index > -1) {
    result.push(array[index]);
    index -= 1;
  }
  return result;
}

console.log(reversify([1, 2, 3, 4, 5]));

// function countA(array) {
//   var count = 0;
//   array.forEach(function (word) {
//     if (word[0] === "a") {
//       count += 1;
//     }
//   });
//   return count;
// }

// console.log(countA(["apple", "peanut", "chicken", "aha"]));

function join(array) {
  var result = "";
  array.forEach((word) => {
    result += word + ",";
  });
  return result;
}

console.log(join(["hello", "today", "yesterday"]));

function smallestTwoNumbers(array) {
  var sortedArray = array.sort();
  var smallestTwo = [];
  smallestTwo.push(sortedArray[0], sortedArray[1]);
  return sortedArray;
}

console.log(smallestTwoNumbers([4, 5, 22, 1, 1234, 1234]));

function zero(array) {
  var count = 0;
  array.forEach((number) => {
    if (number === 0) {
      count++;
    }
  });
  return count;
}

console.log(zero([0, 1, 0, 0, 2, 3, 3]));

function countA(array) {
  var count = 0;
  var splitArray = array.join().split("");
  splitArray.forEach((letter) => {
    if (letter === "a") {
      count += 1;
    }
  });
  return count;
}

console.log(countA(["apple", "pizza", "hello", "awesome"]));

function palindrome(word) {
  if (word.split("").reverse().join("") === word.split("").join("")) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("racecar"));
