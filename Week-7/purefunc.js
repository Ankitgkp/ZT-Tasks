let count = 0;
function incrementCounter() {
    count++;
    return count;
}
function incrementCounterPure(currentCount) {
    return currentCount + 1;
}
console.log(incrementCounterPure(0));
console.log(incrementCounterPure(1)); 