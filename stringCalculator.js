// Add function
function add(numbers) {
	// Return 0 if string has a falsy value
	if (!numbers) {
		return 0;
	}

	const numArray = numbers.split(",");
	return numArray.reduce((sum, num) => sum + parseInt(num), 0);
}

console.log('Input => "" Output =>', add(""));
console.log("Input => null Output =>", add(null));
console.log('Input => "1" Output =>', add("1"));
console.log('Input => "1,5" Output =>', add("1,5"));
console.log('Input => "1,3,5,7" Output =>', add("1,3,5,7"));

module.exports = add;
