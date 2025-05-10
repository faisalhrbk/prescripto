function createAccount(owner, balance = 0) {
	return {
		owner,
		balance,
		deposit(amount) {
			this.balance += amount;
			console.log(
				`${this.owner} deposited $${amount}. Balance: $${this.balance}`
			);
		},
		withdraw(amount) {
			if (this.balance >= amount) {
				this.balance -= amount;
				console.log(
					`${this.owner} withdrew $${amount}. Balance: $${this.balance}`
				);
			} else {
				console.log("Insufficient funds.");
			}
		},
		checkBalance() {
			console.log(`${this.owner}'s Balance: $${this.balance}`);
		},
	};
}

const myAccount = createAccount("Faisal", 1000);
myAccount.deposit(500); // Faisal deposited $500. Balance: $1500
myAccount.withdraw(700); // Faisal withdrew $700. Balance: $800
myAccount.checkBalance(); // Faisal's Balance: $800
