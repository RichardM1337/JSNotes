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
const URL = `https://api.quotable.io/random`;
async function getData(URL) {
  const response = await fetch(URL);
  // info api spits out at u
  // await meants hey this is gonna return a promise
  // fetch means fetch stupid
  console.log(response);
  // convert response to json data
  const data = await response.json();
  console.log(response);
}
// async allows functions to use promise, await, etc.
getData(URL);
