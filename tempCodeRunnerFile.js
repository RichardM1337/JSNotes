/* for (let i = 0; i < 7; i++) {
  console.log("i:", i);
  for (let x = 0; x < 3; x++) {
    console.log("x:", x);
  }
} */

// for define object, for stops looping when argument fulfilled, argument will be done every time for will loop
// remember let vs const vs var

/*
let money = 100
while (money > 0) {
  console.log("gta car:", money);
  money--;
}
 */
/* numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function linearSearch(num, arr) {
  let found;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      found = arr[i];
      break; // stop loop if found
    } else {
      console.log("still looking");
    }
  }
  if (!found) {
    // !found == found=null
    console.log("wrong number stoopid ");
  }
  console.log(found);
  return found;
}
// binary search is better
linearSearch(5, numArr); */

// an algorithm is made up of iteration [for loops], selection [if statements], and sequencing [different steps in case of different events]

//PRACTICE

let strYest = "CC..C";
let strTod = ".CC.C";
function parkingChecker(spaces, yesterday, today) {
  let spots = 0;
  for (let i = 0; i < spaces; i++) {
    if (yesterday[i] === "C" && today[i] === "C") {
      spots++;
    }
  }
  console.log(spots);
}

//PRACTICE 2
playlist = ["A", "B", "C", "D", "E"];
function CCCPlayer(buttonNum, pressNum) {
  if (buttonNum == 1) {
    for (let i = 0; i < pressNum; i++) {
      const firstEntry = playlist.shift(); // takes first entry n deletes it but also returns it
      playlist.push(firstEntry); // puts first entry at end
    }
  } else if (buttonNum == 2) {
    for (let i = 0; i < pressNum; i++) {
      const lastEntry = playlist.pop(); // takes last entry and deletes it but also returns it
      playlist.splice(0, 0, lastEntry); // places last entry at index 0 (addition without replacement)
    }
  } else if (buttonNum == 3) {
    for (let i = 0; i < pressNum; i++) {
      const entryTwo = playlist[1]; // takes 2nd entry
      playlist.splice(1, 1); // deletes 2nd entry
      playlist.splice(0, 0, entryTwo); // puts 2nd entry first
    }
  }
  console.log(playlist);
}

CCCPlayer(2, 1);
CCCPlayer(2, 1);
