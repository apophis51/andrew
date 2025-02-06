


// describe("checkNumber", function () {
//     it("should return 'positive' for positive numbers", function () {
//         expect(checkNumber(5)).toEqual("positive");
//         expect(checkNumber(100)).toEqual("positive");
//         expect(checkNumber(1)).toEqual("positive");
//     });

//     xit("should return 'negative' for negative numbers", function () {
//         expect(checkNumber(-5)).toEqual("negative");
//         expect(checkNumber(-100)).toEqual("negative");
//         expect(checkNumber(-1)).toEqual("negative");
//     });

//     xit("should return 'zero' for zero", function () {
//         expect(checkNumber(0)).toEqual("zero");
//     });
// });


function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a-b
}

function multiply(a, b) {
    return a * b
}

function divide(a,b) {
    return a / b
}

module.exports = { add, subtract, multiply, divide };
