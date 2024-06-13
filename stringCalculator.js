// Add function
function add(numbers) {
	// Return 0 if string has a falsy value
	if (!numbers) {
		return 0;
	}

	const numArray = numbers.split(",");
	if (numArray.length === 1) {
		return parseInt(numArray[0]);
	}

	return parseInt(numArray[0]) + parseInt(numArray[1]);
}

console.log('Input => "" Output =>', add(""));
console.log("Input => null Output =>", add(null));
console.log('Input => "1" Output =>', add("1"));
console.log('Input => "1,5" Output =>', add("1,5"));

module.exports = add;
