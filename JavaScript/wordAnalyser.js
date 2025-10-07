let statement = String(prompt());
let words = [];
let numberOfWords;
let output;
let numberOfCharacters = 0;

function wordAnalyser() {
	statement = statement
		.replace(/[^\p{L}\s']/gu, "")
		.trim()
		.toLowerCase();
	words = statement.split(" ");
	words = words.filter((word) => word != "");
	numberOfWords = words.length;

	for (let i = 0; i < statement.length; i++)
		if (statement[i] !== ("" || " ")) numberOfCharacters++;

	output = `Total number of words: ${numberOfWords}\nTotal number of charachters: ${numberOfCharacters}`;

	console.log(statement);
	console.log(words);

	return output;
}

console.log(wordAnalyser());
