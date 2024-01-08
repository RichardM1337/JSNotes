string = [];
function Gabe(word1, word2) {
  if (word1.length > word2.length) {
    for (let i = 0; i < word2.length; i++) {
      string.push(word1[i]);
      string.push(word2[i]);
    }
    string.push(word1[word1.length - 1]);
  }
  if (word1.length < word2.length) {
    for (let i = 0; i < word1.length; i++) {
      string.push(word1[i]);
      string.push(word2[i]);
    }
    string.push(word2[word2.length - 1]);
  }
  if (word1.length === word2.length) {
    for (let i = 0; i < word2.length; i++) {
      string.push(word1[i]);
      string.push(word2[i]);
    }
  }
}

let findDiff = function (s, t) {
  let sortS = [...s].sort();
  let sortT = [...t].sort();
  for (let i = 0; i < sortT.length; i++) {
    if (sortT[i] != sortS[i]) {
      return sortT[i];
    }
  }
};

let mergeFun = function (str1, str2) {
  let merged = "";
  let distance = Math.max(str1.length, str2.length);
  for (let i = 0; i < distance; i++) {
    if (i < str1.length) {
      merged += str1[i];
    }
    if (i < str2.length) {
      merged += str1[i];
    }
  }
  return merged;
};

let isMono = function (arr) {
  let direction = 0; // neutrality
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      if (direction === 0) {
        direction = 1;
      } else if (direction === -1) {
        return false;
      }
    } else if (arr[i] > arr[i - 1]) {
      if (direction === 0) {
        direction = 1;
      } else if (direction === -1) {
        return false;
      }
    }
  }
  return true;
};



