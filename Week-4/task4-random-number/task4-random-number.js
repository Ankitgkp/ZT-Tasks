let guess = prompt("Guess a number (1-10):")

if (Number(guess) === secret) {
  alert("Correct!")
} else {
  alert("Wrong! The number was" + secret)
}
