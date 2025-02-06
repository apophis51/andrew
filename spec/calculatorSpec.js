// spec/calculatorSpec.js
const { add, subtract } = require('../calculator');

describe("Calculator", function() {
    it("should add two numbers", function() {
        expect(add(1, 2)).toBe(3);
    });
});

describe("Subtract", function() {
    xit("should add subtract two numbers", function() {
        expect(subtract(2, 1)).toBe(1);
    });
});
  
"hello".
describe("Multiply", function() {
    xit("should add multiply two numbers", function() {
        expect(multiply(2, 5)).toBe(10);
    });
});

describe("checkNumber", function() {
    xit("should return 'positive' for positive numbers", function() {
        expect(checkNumber(5)).toEqual("positive");
        expect(checkNumber(100)).toEqual("positive");
        expect(checkNumber(1)).toEqual("positive");
    });

    xit("should return 'negative' for negative numbers", function() {
        expect(checkNumber(-5)).toEqual("negative");
        expect(checkNumber(-100)).toEqual("negative");
        expect(checkNumber(-1)).toEqual("negative");
    });

    xit("should return 'zero' for zero", function() {
        expect(checkNumber(0)).toEqual("zero");
    });
});


describe("sumArray", function() {
    xit("should return the correct sum of an array of numbers", function() {
        const testArrays = [
            { input: [1, 2, 3], expected: 6 },
            { input: [-1, -2, -3], expected: -6 },
            { input: [0, 0, 0], expected: 0 },
            { input: [10, 20], expected: 30 },
        ];
        
        for (let test of testArrays) {
            const result = sumArray(test.input);
            expect(result).toEqual(test.expected);
        }
    });
});