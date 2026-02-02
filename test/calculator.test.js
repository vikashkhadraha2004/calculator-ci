const calc = require("../calculator");

test("Addition works", () => {
    expect(calc.add(2, 3)).toBe(5);
});

test("Subtraction works", () => {
    expect(calc.subtract(5, 3)).toBe(2);
});

test("Multiplication works", () => {
    expect(calc.multiply(2, 4)).toBe(8);
});

test("Division works", () => {
    expect(calc.divide(10, 2)).toBe(5);
});

test("Division by zero throws error", () => {
    expect(() => calc.divide(10, 0)).toThrow();
});
