var num1 = prompt("Enter first number:")
var num2 = prompt("Enter second number:")
var op = prompt("Enter operation")

num1 = parseFloat(num1)
num2 = parseFloat(num2);
let result;

if (op === "+") {
	result = num1 + num2
} else if (op === "-") {
	result = num1 - num2
} else if (op === "*") {
	result = num1 * num2
} else if (op === "/") {
	if (num2 !== 0) {
		result = num1 / num2;
	} else {
		alert("Cannot divide by zero");
		result = undefined;
	}
} else {
	alert("Invalid operation!");
	result = undefined;
}

if (result !== undefined) {
	alert("Result: " + result);
}
