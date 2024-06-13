// Import add function from stringCalculator
const add = require("./stringCalculator");

test("returns 0 for an empty string", () => {
	expect(add("")).toBe(0);
});

test("returns 0 for null value", () => {
	expect(add(null)).toBe(0);
});
