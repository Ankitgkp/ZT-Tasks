console.log("start");
setTimeout(() => {
    console.log("setTimeout callback");
}, 0);
Promise.resolve().then(() => {
    console.log("Promise then");
});
console.log("end");