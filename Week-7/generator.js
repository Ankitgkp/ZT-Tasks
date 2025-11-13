function* infiniteNumbers() { // function* syntax defines a generator function whic can pause it execution and resume it later.
    let num = 1;
    while (true) {
        yield num++; // pauses the function and returns the current value
    }
}
const numbers = infiniteNumbers();
console.log(numbers.next().value); // 1
console.log(numbers.next().value); // 2
console.log(numbers.next().value); // 3
console.log(numbers.next().value); // 4