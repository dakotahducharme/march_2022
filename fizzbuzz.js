// value of 3, return fizz
//value of 5, return buzz
// value of 3 & 5, return fizzbuzz

const fizzbuzz = (num) => {
  if (num % 15 === 0) {
    return "fizzbuzz"
  } else if (num % 5 === 0) {
    return "buzz"
  } else (num % 3 === 0) {
    return "fizz"
  }
}

console.log(fizzbuzz(15));