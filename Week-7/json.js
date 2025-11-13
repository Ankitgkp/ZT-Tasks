const obj = {
    name: "Ankit",
    college: "NST",
    city: "New York"
};

const jsonString = JSON.stringify(obj);
console.log("JSON String:", jsonString);
const parsedObj = JSON.parse(jsonString);
console.log("Parsed Object:", parsedObj);