var palindrome = function (str) {
  return str === str.split("").reverse().join("");
};
console.log(palindrome("makan"));
console.log(palindrome("makam"));
