const isPalindrome = function(s) {
  let sNoSpaces = s.split(" ").join("");
  let stringReverse = s.split("").reverse().join("");
  let removeSpaces = stringReverse.split(" ").join("");
  return sNoSpaces == removeSpaces;
};

module.exports = isPalindrome;


