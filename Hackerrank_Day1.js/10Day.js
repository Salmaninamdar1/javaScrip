// write a function in which we can pass the arrgument and we can take out the factorial of it

// 'use strict'
// function factorial(n) {
//   if (n === 0) {
//     return 1;
//   } else {
//     return n * factorial(n);
//   }
// }
// console.log(factorial(3));

///////////////////////////////or

// const factorial = (n) => (n - 1) > 0 ? n * factorial(n - 1) : 1;

/////////////////////////////or
("use strict");

process.stdin.resume();

process.stdin.setEncoding("utf-8");

let inputString = "";

let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function factorial(n) {
  var fact = 1;

  for (var i = n; i > 0; i--) {
    fact *= i;
  }

  return fact;
}

function main() {
  const n = +readLine();

  console.log(factorial(n));
}
