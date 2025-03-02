import { Calculator } from '../calculatorPassword.js';

  
  describe('Protected Calculator', () => {
    it('should have user enter a unique password', () => {
        const calculator = new Calculator(13, "DFSGED");
        expect(calculator.password).not.toEqual("1234");
        expect(calculator.getPassword()).toBe(calculator.password);
      });
    it('should initialize with the provided value', () => {
      const calculator = new Calculator(10);
      expect(calculator.value).toBe(10);
      expect(calculator.getValue()).toBe(10);
    });
  
    it('should initialize with 0 if no value is provided', () => {
      const calculator = new Calculator();
      expect(calculator.value).toBe(0);
      expect(calculator.getValue()).toBe(0);
    });
  
    it('should add a number to the current value', () => {
      const calculator = new Calculator(5);
      expect(calculator.add(3)).toBe(8);
      expect(calculator.value).toBe(8);
      expect(calculator.getValue()).toBe(8); 
    });
  
    it('should subtract a number from the current value', () => {
      const calculator = new Calculator(10);
      expect(calculator.subtract(4)).toBe(6);
      expect(calculator.value).toBe(6);
      expect(calculator.getValue()).toBe(6); // Verify internal state
    });
  
    it('should handle multiple operations correctly', () => {
      const calculator = new Calculator(2);
      calculator.add(5);
      calculator.subtract(3);
      expect(calculator.value).toBe(4);
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