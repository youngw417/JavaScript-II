// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
    return cb(arr.length);
}
//test 1 (inline callback)

// const test1 = getLength(items, item => `the items array is the length of ${item}`);
// console.log(test1);

// // test2

// declareLength = item => `the items array is the length of ${item}`
// const test2 = getLength(items, declareLength);
// console.log(test2);



// function last(arr, cb) {
//   // last passes the last item of the array into the callback.
//   return cb(arr[arr.length - 1])
// }
// // test 1
// const test1 = last(items, item  => `the last item in the array is ${item}`)
// console.log(test1);
// // test2
// console.log(test1);
// const lastItem = item => `the last item in the array is ${item}`;
// const test2 = last(items, lastItem);
// console.log(test2);





// function sumNums(x, y, cb) {
//   // sumNums adds two numbers (x, y) and passes the result to the callback.
//   const sum = x + y;
//   return cb(sum)
// }

// const test1 = sumNums(5, 10, item => `the sum of two numbers is ${item}`);
// console.log(test1);

// const sums = item => `the sum of two numbers is ${item}`
// const test2 = sumNums(5, 10, sums);
// console.log(test2);

// function multiplyNums(x, y, cb) {
//   // multiplyNums multiplies two numbers and passes the result to the callback.
//   const mult = x * y;
//   return cb(mult);
// }

// const test1 = multiplyNums(50, 2, item => `the product of two numbers is ${item}`);
// console.log(test1);

// const multi = item =>`the product of two numbers is ${item}`;
// const test2 = multiplyNums(50, 2, multi);
// console.log(test2);


// function contains(item, list, cb) {
//   // contains checks if an item is present inside of the given array/list.
//   // Pass true to the callback if it is, otherwise pass false.
//   return cb(list.includes(item));
// }

// const test1 = contains('Zulo', items, item => item ? 'yes it has' : 'No, it does not have')
// console.log(test1);

// const gotIt = item => item ? 'yes it has' : 'No, it does not have';
// const test2 = contains('yo-yo', items, gotIt);
// console.log(test2);
/* STRETCH PROBLEM */

// function removeDuplicates(array, cb) {
//   // removeDuplicates removes all duplicate values from the given array.
//   // Pass the duplicate free array to the callback function.
//   // Do not mutate the original array.
//   for (let i = 0; i < array.length; i++){
//     for (let j = i + 1; j < array.length; j++){
//       if (array[i] === array[j]){
//         array.splice(j,1);
//       }
//     }
//   }
//   return cb(array);
// }

// const test1 = removeDuplicates([2,4,5,3,5,1], item => item);
// console.log(test1);