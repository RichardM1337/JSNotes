string = [];
function Gabe(word1, word2) {
  if (word1.length > word2.length) {
    for (let i = 0; i < word2.length; i++) {
      string.push(word1[i]);
      string.push(word2[i]);
      string.push(word1[word2.length - word1.length]);
    }
  }
  if (word1.length < word2.length) {
    for (let i = 0; i < word1.length; i++) {
      string.push(word1[i]);
      string.push(word2[i]);
      string.push(word2[word1.length - word2.length]);
    }
  }
  if ((word1.length = word2.length)) {
    for (let i = 0; i < word2.length; i++) {
      string.push(word1[i]);
      string.push(word2[i]);
    }
  }
}
Gabe("guy", "cars");
console.log(string);
// fix
