// Write an algorithm that counts numbers of vowels in a word.
// needs to split word
// create an array of the different letters
//see if each letter is equal to a vowel
// if vowel, i++; if not, skip

let word = "hollow";
const vowels = ["a", "e", "i", "o", "u", "y"]

let arrayOfLetters = word.split("");
console.log(arrayOfLetters)
function findVowel(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    if (vowels.find((vowel) => vowel === char)) {
      count += 1;
    }
  }
  return count;
}
console.log(findVowel(arrayOfLetters))