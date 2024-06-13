// Import add function from stringCalculator
const add = require("./stringCalculator");

test("should return 0 for an empty string", () => {
	expect(add("")).toBe(0);
});

test("should return 0 for null value", () => {
	expect(add(null)).toBe(0);
});

test("should return the number itself for a single number", () => {
	expect(add("1")).toBe(1);
});

test("should return the sum of two numbers", () => {
	expect(add("10,5")).toBe(15);
});

test("should return NaN if string has invalid numbers", () => {
	expect(add("test")).toBe(NaN);
});
