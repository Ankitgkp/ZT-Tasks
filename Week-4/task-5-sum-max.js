let numbers = [5, 12, 8, 20, 3];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log("sum:", sum);
console.log("max:", max);