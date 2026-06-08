let num = 266219;

let n = num;
let result = 1;

while (n > 0) {
  result *= n % 10;
  n = Math.floor(n / 10);
}

console.log(result);
console.log(result ** 3);

let firstTwoDigits = String(cube).slice(0, 2);
console.log(firstTwoDigits);
