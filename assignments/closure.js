// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

function YearToRetire(yearOfBirth) {
  const currentYear  = 2019
  const age = currentYear - yearOfBirth;

  return function(retireAge){
    return retireAge - age;
 }
}

const retireUS = YearToRetire(1970);
console.log(retireUS(65));



/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
// const counterMaker = () => {
//   // IMPLEMENTATION OF counterMaker:
//   // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
//   let count = 0;
//   // 2- Declare a function `counter`. It should increment and return `count`.
//   return function (){
//     count++
//     return count;
//   }
//   //      NOTE: This `counter` function, being nested inside `counterMaker`,
//   //      "closes over" the `count` variable. It can "see" it in the parent scope!
//   // 3- Return the `counter` function.
// };
// // Example usage: const myCounter = counterMaker();
// const myCounter =counterMaker();
// // myCounter(); // 1
// console.log(myCounter());

// console.log()
// console.log(myCounter());

// myCounter(); // 2

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.
    const counterMaker = () => {
 
     let count = 0;
 
     return function (limit){
        count++
      
        if (count >  limit) {
          count = 1;
        }
        return count;
    }
  }

  const limitCounter = counterMaker();
  console.log(limitCounter(3));
  console.log(limitCounter(3));
  console.log(limitCounter(3));
  console.log(limitCounter());
 



// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  let count = 0;
  return function(){
  const obj = {
    count,
    increment: function() {
       return this.count+=1},
    decrement: function() {
      return this.count-= 1}
    }
    return obj
  }
  }
  const counting = counterFactory();
  console.log(counting().increment());
  console.log(counting().increment());
  console.log(counting().increment());
  console.log(counting().decrement());
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

