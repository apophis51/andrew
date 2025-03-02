


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

class AdvancedCalculator {
    constructor() {
      this.memory = 0;
    }
  
    multiply(a, b) {
      return a * b;
    }
  
    divide(a, b) {
      if (b === 0) throw new Error('Division by zero');
      return a / b;
    }
  
    remember(value) {
      this.memory = value;
    }
  
    recall() {
      return this.memory;
    }
  }


  class Calculator {
    constructor(initialValue = 0) {
      this.value = initialValue;
    }
  
    add(number) {
      this.value += number;
      return this.value;
    }
  
    subtract(number) {
      this.value -= number;
      return this.value;
    }
  
    getValue() {
      return this.value;
    }
  }

export { add, subtract, multiply, divide, AdvancedCalculator, Calculator };


