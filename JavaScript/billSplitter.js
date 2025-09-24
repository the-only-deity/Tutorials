let bill = Number(prompt("What is your total bill amount?"));
let tipPercentage = Number(
	prompt("What percentage tip would you like to give?")
);
let numberOfPeople = Number(prompt("How many people are splitting the bill?"));

function splitBill(bill, tipPercentage, numberOfPeople) {
	let output;
	let amountPerPerson;

	if (
		(Number.isNaN(bill) ||
			Number.isNaN(tipPercentage) ||
			Number.isNaN(numberOfPeople)) == true
	) {
		output = "Error: Invalid input entered.";
	} else if (bill == 0) {
		output = "Error: Bill amount cannot be zero. Please enter a valid amount.";
	} else {
		let tipAmount = (tipPercentage / 100) * bill;
		let totalBill = bill + tipAmount;

		if (numberOfPeople == 0) {
			amountPerPerson = totalBill;
			output = `Your total bill is: KES${bill}\nThe tip percentage you chose was: ${tipPercentage}%\nYour total amount to pay is: KES${totalBill}`;
		} else {
			amountPerPerson = totalBill / numberOfPeople;
			amountPerPerson = amountPerPerson.toFixed(2);
			output = `Your total bill is: KES${bill}\nThe tip percentage you chose was: ${tipPercentage}%\nThe total amount to be paid is: KES${totalBill}\nYou are splitting the bill amongst ${numberOfPeople} people\nEach person should pay: KES${amountPerPerson}`;
		}
	}

	return output;
}

console.log(splitBill(bill, tipPercentage, numberOfPeople));
