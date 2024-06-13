// Add function
function add(numbers) {
	// Return 0 if string has a falsy value
	if (!numbers) {
		return 0;
	}

	const delimiters = [",", "\n"]; // Array of default delimiters
	let regex = new RegExp(delimiters.join("|"), "g");

	if (numbers.startsWith("//")) {
		const delimiterEndIndex = numbers.indexOf("\n");
		regex = new RegExp(numbers.substring(2, delimiterEndIndex));
		numbers = numbers.substring(delimiterEndIndex + 1);
	}

	const numArray = numbers.split(regex);
	return numArray.reduce((sum, num) => sum + parseInt(num), 0);
}

console.log('Input => "" Output =>', add(""));
console.log("Input => null Output =>", add(null));
console.log('Input => "1" Output =>', add("1"));
console.log('Input => "1,5" Output =>', add("1,5"));
console.log('Input => "1,3,5,7" Output =>', add("1,3,5,7"));
console.log('Input => "1\\n2,3,4" Output =>', add("1\n2,3,4"));
console.log('Input => "//;\\n1;2;3;4" Output =>', add("//;\n1;2;3;4"));

module.exports = add;
