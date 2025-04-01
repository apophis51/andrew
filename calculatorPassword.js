


let value = 0

class Calculator {


    constructor(initialValue = 0, userPassword = "1234") {
       this.value = initialValue;
       this.calculatorBrand = "samsung"
       this.calculatorBatteries = "AA"
       this.password = userPassword
    }
    add(number) {
      this.value += number;
      return this.value;
    }
    subtract() {
    }
    getValue() {
      return this.value;
    }
  }
const Calculator2 = new Calculator(10, "sfsfsdfjfjekl");
  let calctuatorSOmething =  { value: 3  , password: "1234" } 

  console.log(Calculator2);
  console.log(Calculator2.add(5));

  console.log(JSON.stringify(Calculator2));


    Calculator2.value = 100;  // This direct mutation is unnoticed and changes state unexpectedly

console.log(Calculator2.add(20))


  class CalculatorFunctional {
    constructor(initialValue = 0, userPassword = "1234") {
      this.value = initialValue;
      this.calculatorBrand = "samsung";
      this.calculatorBatteries = "AA";
      this.password = userPassword;
    }
  
    // Add returns a new instance with the updated value (no mutation)
    add(number) {
      return new CalculatorFunctional(this.value + number, this.password);  // Return a new instance with updated state
    }
  
    subtract(number) {
      return new CalculatorFunctional(this.value - number, this.password);  // Return a new instance with updated state
    }
  
    // Get value
    getValue() {
      return this.value;
    }
  }
  

  // Usage
  const calc1 = new CalculatorFunctional(5);

  
  console.log(calc1.getValue());  // 5
  
  const result = calc1.add(10);  // Returns a new instance with value 15
  console.log(result.getValue());  // 

  
  calc1.value = 100;  // This direct mutation is unnoticed and changes state unexpectedly

  console.log(calc1.getValue())

  const newResult = calc1.add(20);  // Returns a new instance with value 25
  console.log(newResult.getValue());


  console.log(calc1.getValue());  // 5
  


const newMultiply = (x,y) => x * y
const newAdd = (x,y) => x + y
const addAndMultiply = (x,y) => newMultiply(newAdd(x,y), newAdd(x,y))
console.log(addAndMultiply(2,2))



  /////////////Monad

  class Identity {
    constructor(value) {
      this.value = value;
    }
  
    map(fn) {
      return new Identity(fn(this.value));
    }
  }
  
  // Actual add function
  function add(x, y) {
    return x + y;
  }
  
  // Actual subtract function
  function subtract(x, y) {
    return x - y;
  }
  
  // Usage:
  const initialValue = 10;
  const results = new Identity(initialValue)
    .map((x) => add(x, 5)) // Add 5
    .map((x) => subtract(x, 3)); // Subtract 3
  
  console.log(results.value); // 12



  function add2(x, y) {
    return x + y;
  }
  
  function subtract2(x, y) {
    return x - y;
  }
  
  
  let value2 = subtract2(20, add2(10, 5)); // Add 5
  
  console.log(value2); // 12










const sentences = ["hello", "world", "functional", "programming"];

// const uppercasedSentences = sentences.map(sentence => sentence.toUpperCase());

sentences.forEach((sentence, index, arr) => {sentence => sentence.toUpperCase()
  arr[index] = sentence.toUpperCase(); // Mutate the array by converting each sentence to uppercase
});

// console.log(uppercasedSentences)



console.log(sentences)


// const filter = uppercasedSentences.filter(sentence => sentence.length > 5)
// console.log(filter)

for (let i = sentences.length - 1; i >= 0; i--) {
  if (sentences[i].length <= 5) {
    sentences.splice(i, 1);  // Remove the element if it doesn't meet the condition
  }
}



console.log(sentences)





let orders = [
  { id: 1, amount: 100 },
  { id: 2, amount: 50 },
  { id: 3, amount: 0 },  // Invalid order
  { id: 4, amount: 0 }
];

// Removing invalid orders by mutating the array inside a loop
function processOrders(orders) {
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].amount <= 0) {
      orders.splice(i, 1);  // Removing invalid order
      i--; // Adjust the index after mutation
    }
  }
}

processOrders(orders);

console.log(orders)



function processOrders1(orders) {
  return orders.filter(order => order.amount > 0);  // Returns new array without mutating the original
}

orders = processOrders1(orders);

console.log(orders);




/////////////RECURSION

function factorialRecursive(n) {
  if (n === 0 || n === 1) {
      return 1;
  }
  return n * factorialRecursive(n - 1);
}

console.log(factorialRecursive(5)); // Output: 120




function factorialIterative(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
      result *= i;
  }
  return result;
}

console.log(factorialIterative(0)); // Output: 120








export { Calculator };