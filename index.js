function reverseString(word){
  // create an array from the input string
  // const wordArray = word.split("");
  // // reverse the array
  // const reversedWordArray = wordArray.reverse();
  // // create a string from the reversed array
  // const reversedWord = reversedWordArray.join("");
  // // return the reversed string
  // return reversedWord;
  return word.split("").reverse("").join("");
}
function isPalindrome(word) {
  // reverse the input string
  const reversedWord = reverseString(word);
  // // if the reversed string is the same as the input
  // if (word === reversedWord) {
  //   return true;
  // } else {
  //   return false;
  // }
  // Write your algorithm here 
  return word === reversedWord  
}

/* 
  Add your pseudocode here
  create a fuction that checks if the input i a palindrome and returns a true or flase
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("")

  console.log("Expecting true");
  console.log("=>", isPalindrome("abba"))

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));
}

module.exports = isPalindrome;
