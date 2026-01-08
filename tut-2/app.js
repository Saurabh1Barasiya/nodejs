require("./xyz");
const obj = require("./sum");

// const obj2 = require("./another");
const {number,addThreeNumbers} = require("./another");

console.log("hi i am the entry point for node js.");

obj.doCalculation(100,100);
console.log("The value of x is ",obj.x);


// console.log(obj2.number);
// console.log(obj2.addThreeNumbers(1,2,3));

console.log(number);
console.log(addThreeNumbers(1,2,3));

