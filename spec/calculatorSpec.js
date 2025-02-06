// spec/calculatorSpec.js


const { add, subtract, multiply,divide } = require('../calculator');

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
    it("should return 'positive' for positive numbers", function () {
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