class Calculator {
    constructor(initialValue = 0, userPassword = "1234") {
       this.value = initialValue;
       this.password = userPassword
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

    getPassword() {
      return this.password;
    }
  }

  const Calculator2 = new Calculator(10, "sjfjekl");

  console.log(Calculator2);
  console.log(Calculator2.subtract(5));

  console.log(JSON.parse(JSON.stringify(Calculator2)).value);

export { Calculator };