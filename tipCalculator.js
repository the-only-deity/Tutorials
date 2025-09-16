let bill = Number(prompt("Please enter your total bill amount:"));
let tipPercentage = Number(
	prompt("Please enter the tip percentage you would like to give:")
);

function calculateTip(bill, tipPercentage) {
	let tipAmount;
	let totalAmount;
	let output;

	tipAmount = bill * (tipPercentage / 100);
	totalAmount = bill + tipAmount;
	totalAmount = totalAmount.toFixed(2);
	tipAmount = tipAmount.toFixed(2);

	output = `Your bill is: KES${bill}\nThe tip percentage you chose was: ${tipPercentage}%\nThe amount tipped is: KES${tipAmount}\nThe total amount to be paid is: KES${totalAmount}`;

	return output;
}

console.log(calculateTip(bill, tipPercentage));
