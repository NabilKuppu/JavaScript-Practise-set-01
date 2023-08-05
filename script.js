"use strict";
//Problem-01
/** Write a JavaScript function that reverse a number.
Sample Data and output:
Example x = 32243;
Expected Output : 34223*/
//Solution
let number = 32243;
function reverseNumber(num) {
  return String(num).split("").reverse().join("") * 1;
}
const res = reverseNumber(number);
console.log(res, typeof res); //output:34223
//Array Reverse
const arr = ["Nabil", "Nishu", "Nilufa"];
arr.reverse(); //arr return korbe notun value ke that means the arr value has changed
console.log(arr);

/* Problem-02
Write a JavaScript function that returns a passed string with letters in
alphabetical order.
Example string : 'webmaster'
Expected Output : 'abeemrstw'
Note: Assume punctuation and numbers symbols are not included in the passed
string..
 */
//Solution-02
let sortString = "webmaster";
function sortStr(str) {
  return str.split("").sort().join("");
}
console.log(sortStr(sortString)); //Output : 'abeemrstw'

let sortInputNumber = 652431;
function sortNumber(value) {
  return String(value).split("").sort().join("") * 1;
}
console.log(sortNumber(sortInputNumber), typeof sortNumber(sortInputNumber)); //output:123456,typeof Number
//Array String Sort
const arrStrSort = ["Nabil", "Nishu", "Nilufa"];
arrStrSort.sort(); //Sort method is mutable
console.log(arrStrSort);
// Array Sort Number in descending order;
const arraySortNumber = [8, 9, 5, 6, 2, 4, 1, 8, 5];
arraySortNumber.sort((a, b) => {
  return b - a;
});
const highestDes = arraySortNumber[0];
const lowerstDes = arraySortNumber[arraySortNumber.length - 1];
console.log(arraySortNumber, highestDes, lowerstDes);
// Array Sort Number in Ascending order;
arraySortNumber.sort((a, b) => {
  return a - b;
});
const highestAsc = arraySortNumber[arraySortNumber.length - 1];
const lowerstAsc = arraySortNumber[0];
console.log(arraySortNumber, highestAsc, lowerstAsc);
/*
Write a JavaScript function that accepts a string as a parameter and counts the
number of vowels within the string.
Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do
not count 'y' as vowel here.
Sample Data and output:
Example string : 'The quick brown fox'
Expected Output : 5
 */
let vowelStr = "The quick brown fox";
const vowels = ["a", "e", "i", "o", "u"];
function countVowels(str) {
  let count = 0;
  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels(vowelStr));
console.log(countVowels("Nabil"));
