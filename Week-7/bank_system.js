class BankAccount {
    constructor(ownerName, startingBalance = 0) {
        this.ownerName = ownerName;
        this.balance = startingBalance;
    }

    deposit(amount) {
        if (amount > 0) this.balance += amount;
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) this.balance -= amount;
    }

    getBalance() {
        return this.balance;
    }
}
const account = new BankAccount("Ankit", 1000);
account.deposit(500);
account.withdraw(300);
console.log(account.getBalance());

/*
Memory leaks typically occur when objects are unintentionally retained in memory due to circular references, global variables, or event listeners. None of these patterns exist in this code.
JavaScript's garbage collector automatically frees memory for objects that are no longer reachable, ensuring efficient memory management.
output: 1200
*/