console.log("connected"); //check console to see this
//function = inputoutputmachine, can accept multiple arguments with commas

/*
const num1 = Number(prompt("enter a number")); // const, var, let all declare variables
const num2 = Number(prompt("enter another a number")); //prompt == input
function add(x, y) {
  console.log(x + y); // currently adds strings toether
}
add(num1, num2);
*/

// Number: CAPITAL N PLEASE!!!

/*
x = 7;
function test() {
  const x = 15;
  add(x, y);
}
*/

// variables defined inside functions can work. local scope/function scope vs global scope

// arrays
// "this" references an array and also the whole code depenidng on scope

const date = new Date();
const year = date.getFullYear;
const peepeepoopoo = {
  blahblah: "morecode",
  ifiweretoaddbirthdaylogic: "thiswouldbeit",
  graduated: true,
  dob: 2008,
  age: function () {
    return year - this.dob;
  },
};

const numbers = [1, 2, 3, 4, 5];
// index starts at 0
console.log(numbers[numbers.length - 1]); // subtract  because index starts at 0
numbers.forEach((number, index) => console.log(number, index)); //callback function, => auto returns output, makes keyword global [no return or brackets]

const graduated = peepeepoopoo.filter((student) => student.graduated === true);
console.log(graduated);
