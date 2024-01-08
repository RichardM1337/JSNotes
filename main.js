/* function greet(name) {
  const greetPromise = new Promise(function (resolve, rejected) {
    resolve(`Hello ${name}`);
  });
  return greetPromise;
}

const grifin = greet("peter grfin");
console.log(grifin);
// returns Promise {state:fulfilled, "hello beter"}

//promises must be handled after being received
const nuggies = greet("Nuggies");
nuggies.then((result) => {
  console.log(result);
});
// nuggies console.logs result when nuggies.promise = fuifilled
// you can grab apis and then create cards when the promise is fulfilled, to make sure the api is grabbed before data is displayed

 */

// rest api
/* const URL = `https://api.quotable.io/randoms`;
async function getData(URL) {
  try {
    // try this code
    const response = await fetch(URL);
    console.log(response);
    if (response.status != 200) {
      throw new Error(response.statusText);
      // if u suck at code pls do this one (if it doesnt work)
    }
    // info api spits out at u
    // await meants hey this is gonna return a promise
    // fetch means fetch stupid
    // console.log(response); = server data not for me
    // convert response to json data
    const data = await response.json();
    console.log(data);
    document.querySelector("p").textContent = data.content;
    document.querySelector("h1").textContent = error;
  } catch (error) {
    document.querySelector("h1").textContent = error;
  }
}
// async allows functions to use promise, await, etc.
getData(URL);
 */

// TEST REVIEW
const Gabe = {
  name: "Yizhak", // string
  age: 15, // number
  isCool: false, //boolean
};

console.log(Gabe.name[0]);
for (let i = 0; i < Gabe.name.length; i++) {
  // string cycling
  console.log(Gabe.name[i]);
}
let i = 0;
while (i < Gabe.name.length) {
  // usually for preestablished variabls
  console.log(Gabe.name[i]);
  i++;
}

function needle(name, search) {
  if (name.includes(search)) {
    return true;
  } else {
    return false;
  }
}

console.log(needle(Gabe.name, ""));
// triple = checks for type, double = doesn't
//1 + "1" = "11"

// ... is spread operator
let x = [1, 2, 3];
let y = [4, 5, 6];
let z = { ...x };

function sortString(name) {
  let x = [...name].sort(); //  case sensitivity important -- pc prioritizes capitals
  console.log(x);
}

function remove(name) {
  let x = [...name];
  x.splice(1, 1); // - equals last digit (go backwards)
  console.log(x);
}
remove(Gabe.name);

let findDiff = function (s, t) {
  //sequencing (series of steps)
  let sortS = [...s].sort();
  let sortT = [...t].sort();
  for (let i = 0; i < sortT.length; i++) {
    // selection (if statements)
    if (sortT[i] != sortS[i]) {
      return sortT[i];
      // iteration through array
      // different steps
    }
  }
};
console.log(findDiff("abdcef", "abcduef"));
