// spec/calculatorSpec.js


import { add, subtract, multiply,divide, AdvancedCalculator, Calculator } from '../calculator.js';

  
  describe('Calculator Class', () => {
    it('should initialize with the provided value', () => {
      const calculator = new Calculator(10);
      expect(calculator.getValue()).toBe(10);
    });
  
    it('should initialize with 0 if no value is provided', () => {
      const calculator = new Calculator();
      expect(calculator.getValue()).toBe(0);
    });
  
    it('should add a number to the current value', () => {
      const calculator = new Calculator(5);
      expect(calculator.add(3)).toBe(8);
      expect(calculator.getValue()).toBe(8); // Verify internal state
    });
  
    it('should subtract a number from the current value', () => {
      const calculator = new Calculator(10);
      expect(calculator.subtract(4)).toBe(6);
      expect(calculator.getValue()).toBe(6); // Verify internal state
    });
  
    it('should handle multiple operations correctly', () => {
      const calculator = new Calculator(2);
      calculator.add(5);
      calculator.subtract(3);
      expect(calculator.getValue()).toBe(4);
    });
  
    it('should handle negative initial values', () => {
      const calculator = new Calculator(-5);
      expect(calculator.getValue()).toBe(-5);
      expect(calculator.add(10)).toBe(5);
    });
  
    it('should handle negative numbers in operations', () => {
      const calculator = new Calculator(10);
      expect(calculator.add(-3)).toBe(7);
      expect(calculator.subtract(-2)).toBe(9);
    });
  });

describe('Advanced Calculator Class with Memory', function () {
    let calculator;
  
    beforeEach(function () {
      calculator = new AdvancedCalculator();
    });
  
    xit('should multiply two numbers', function () {
      expect(calculator.multiply(2, 3)).toBe(6);
    });
  
    xit('should divide two numbers', function () {
      expect(calculator.divide(6, 3)).toBe(2);
    });
  
    xit('should remember and recall a value', function () {
      calculator.remember(42);
      expect(calculator.recall()).toBe(42);
    });
  });

  


describe("Add", function () {
    it("should add two numbers", function () {
        expect(add(1, 2)).toBe(3);
    });
});


describe("Subtract", function () {
    it("should add subtract two numbers", function () {
        expect(subtract(2, 1)).toBe(1);
    });
});

describe("division", function() {
    it("should divide two numbers", function() {
    expect(divide(10, 2)).toBe(5);
    });
    });

describe("Multiply", function () {
    it("should add multiply two numbers", function () {
        expect(multiply(2, 5)).toBe(10);
    });
});

describe("checkNumber", function () {
    xit("should return 'positive' for positive numbers", function () {
        expect(checkNumber(5)).toEqual("positive");
        expect(checkNumber(100)).toEqual("positive");
        expect(checkNumber(1)).toEqual("positive");
    });

    xit("should return 'negative' for negative numbers", function () {
        expect(checkNumber(-5)).toEqual("negative");
        expect(checkNumber(-100)).toEqual("negative");
        expect(checkNumber(-1)).toEqual("negative");
    });

    xit("should return 'zero' for zero", function () {
        expect(checkNumber(0)).toEqual("zero");
    });
});


describe("sumArray", function () {
    xit("should return the correct sum of an array of numbers", function () {
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

// describe("sumArray", function() {
//     it("should return the correct sum for an array of positive numbers", function() {
//         const input = [1, 2, 3];
//         const expected = 6;
//         const result = sumArray(input);
//         expect(result).toEqual(expected);
//     });

//     it("should return the correct sum for an array of negative numbers", function() {
//         const input = [-1, -2, -3];
//         const expected = -6;
//         const result = sumArray(input);
//         expect(result).toEqual(expected);
//     });

//     it("should return 0 for an array of zeros", function() {
//         const input = [0, 0, 0];
//         const expected = 0;
//         const result = sumArray(input);
//         expect(result).toEqual(expected);
//     });

//     it("should return the correct sum for an array of two numbers", function() {
//         const input = [10, 20];
//         const expected = 30;
//         const result = sumArray(input);
//         expect(result).toEqual(expected);
//     });

//     it("should return the correct sum for a large array of numbers", function() {
//         const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//         const expected = 55;
//         const result = sumArray(input);
//         expect(result).toEqual(expected);
//     });

//     it("should return 0 for an empty array", function() {
//         const input = [];
//         const expected = 0;
//         const result = sumArray(input);
//         expect(result).toEqual(expected);
//     });

//     it("should return the correct sum for an array with a single positive number", function() {
//         const input = [5];
//         const expected = 5;
//         const result = sumArray(input);
//         expect(result).toEqual(expected);
//     });

//     it("should return the correct sum for an array with a single negative number", function() {
//         const input = [-5];
//         const expected = -5;
//         const result = sumArray(input);
//         expect(result).toEqual(expected);
//     });
// });


describe("Discount Eligibility Tests", function () {
    xit("should return 'Eligible for 20% discount' for a member over 65", function () {
        expect(checkDiscountEligibility(70, true)).toEqual("Eligible for 20% discount");
    });

    xit("should return 'Eligible for 10% discount' for a member aged 30", function () {
        expect(checkDiscountEligibility(30, true)).toEqual("Eligible for 10% discount");
    });

    xit("should return 'Eligible for 10% discount' for a non-member aged 17", function () {
        expect(checkDiscountEligibility(17, false)).toEqual("Eligible for 10% discount");
    });

    xit("should return 'Not eligible for discount' for a non-member aged 25", function () {
        expect(checkDiscountEligibility(25, false)).toEqual("Not eligible for discount");
    });

    xit("should return 'Eligible for 10% discount' for a member aged 65", function () {
        expect(checkDiscountEligibility(65, true)).toEqual("Eligible for 10% discount");
    });

    xit("should return 'Not eligible for discount' for a non-member aged 18", function () {
        expect(checkDiscountEligibility(18, false)).toEqual("Not eligible for discount");
    });
});


describe("Words Length Tests", function () {
    const testCases = [
        {
            input: "Hello world this is a test",
            expected: [
                "Word 'Hello' has an odd number of characters.",
                "Word 'world' has an odd number of characters.",
                "Word 'this' has an even number of characters.",
                "Word 'is' has an even number of characters.",
                "Word 'a' has an odd number of characters.",
                "Word 'test' has an even number of characters."
            ]
        },
        {
            input: "JavaScript is fun",
            expected: [
                "Word 'JavaScript' has an odd number of characters.",
                "Word 'is' has an even number of characters.",
                "Word 'fun' has an odd number of characters."
            ]
        },
        {
            input: "I love coding",
            expected: [
                "Word 'I' has an odd number of characters.",
                "Word 'love' has an even number of characters.",
                "Word 'coding' has an odd number of characters."
            ]
        },
        {
            input: "",
            expected: []
        },
        {
            input: "   ",
            expected: [
                "Word '' has an odd number of characters.",
                "Word '' has an odd number of characters.",
                "Word '' has an odd number of characters."
            ]
        }
    ];

    testCases.forEach(({ input, expected }) => {
        xit(`should evaluate words lengths correctly for input: '${input}'`, function () {
            expect(checkWordsLength(input)).toEqual(expected);
        });
    });
});