// Add function
function add(numbers) {
	// Return 0 if string has a falsy value
	if (!numbers) {
		return 0;
	}

	return parseInt(numbers);
}

console.log('Input => "" Output =>', add(""));
console.log("Input => null Output =>", add(null));

module.exports = add;
