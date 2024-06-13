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

test("should return the sum of multiple numbers", () => {
	expect(add("1,2,3,4")).toBe(10);
});

test("should return the sum of numbers with new line", () => {
	expect(add("1\n2,3")).toBe(6);
});

test("should return the sum with a custom delimiter", () => {
	expect(add("//;\n1;2")).toBe(3);
});

test("throws an error for negative numbers", () => {
	expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed -2");
});

test("throws an error for multiple negative numbers", () => {
	expect(() => add("1,-2,-3")).toThrow("Negative numbers not allowed -2,-3");
});
