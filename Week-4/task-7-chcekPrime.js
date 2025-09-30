function checkPrime(num) {
  if (num <= 1) return false; 
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true; 
}
console.log(checkPrime(7));  
console.log(checkPrime(10)); 
