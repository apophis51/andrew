
// This line should always be at the top of every script
// (The details of why are probably best left for later)

'use strict';

console.log("Calculator Script Loaded 🎉");

/*
 * Constants
 */

const display = document.getElementById("display");

/*
 * Event Listeners
 */

for (let i = 0; i < 10; i++) {
    document.getElementById("btn" + i).addEventListener("click", function() {
        console.log("clicked", i);
        handleNumberClick(i);
    });
}

document.getElementById("btnPlus").addEventListener("click", function() {
    console.log("clicked", "+");
    handleOperatorClick('plus');
});

document.getElementById("btnMinus").addEventListener("click", function() {
    console.log("clicked", "-");
    handleOperatorClick('minus');
});

document.getElementById("btnMultiply").addEventListener("click", function() {
    console.log("clicked", "*");
    handleOperatorClick('multiply');
});

document.getElementById("btnDivide").addEventListener("click", function() {
    console.log("clicked", "/");
    handleOperatorClick('divide');
});

document.getElementById("btnEquals").addEventListener("click", function() {
    console.log("clicked", "=");
    handleEqualsClick();
});

document.getElementById("btnClear").addEventListener("click", function() {
    console.log("clicked", "C");
    handleClearClick();
});

// TODO: Use this section to define constants that you will use in your program



// TODO: Use this section to define event listeners

/*
 * State
 * Track the current number or expression being entered:
 */
let currentInput = ''; //number            



/*
 * Store the last entered number before an operation:
 */
let previousValue = null;  //number

 /*
 * Track the selected mathematical operation (e.g. +, -, * /);
 */
let currentOperator = null; /// '+', '-', '*', '/'


// TODO: Use this section to declare state variables

/*
 * Functions
 */

//handle operator clicks


function handleOperatorClick(operator) {  //+
    console.log('Operator Clicked', operator);
    previousValue = currentInput.toString();
    currentInput = '';
    currentOperator = operator;
    console.log(" ")
    console.log("previousValue",previousValue);
    console.log("currentInput",currentInput);
    console.log("currentOpperator",currentOperator);
    
}
//apply the calculation to the CurrentInput, havent go second input.
//input before operator clicked, store it (currentInput) as previousValue
// the second input is assigned the currentInput but as an empty string (so it can still be concatonated to)



//handle the number button clicks
function handleNumberClick(number) {
    currentInput = currentInput + number;
    display.innerText = currentInput.toString();
    console.log(" ")
    console.log("previousValue",previousValue);
    console.log("currentInput",currentInput);
    console.log("currentOpperator",currentOperator);
    
}

//Handle the Clear Button Click

function handleClearClick() {
    currentInput = ''; //changed
    display.innerText = currentInput.toString();
}


//Handle the Equals Button Click

function handleEqualsClick() {  //=
    let result;

    if (currentOperator === 'plus') {
        result = +previousValue + +currentInput;
    }
    else if (currentOperator === 'minus') {
        result = previousValue - currentInput;
    }
    else if (currentOperator === 'multiply') {
        result = previousValue * currentInput;
    }
    else if (currentOperator === 'divide') {
        result = previousValue / currentInput;
    }
     //currentInput = '' //changed
     currentInput = result.toString();
    //currentInput = result //changed
    display.innerText = result.toString();
   // previousValue= result.toString();
    //previousValue = null; // Reset previousValue
    currentOperator = null; // Reset currentOperator
    //currentInput = '';                                         // this makes it work
    console.log (result)
    console.log(" ")
    console.log("previousValue",previousValue);
    console.log("currentInput",currentInput);
    console.log("currentOpperator",currentOperator);
    
}

// handleEqualsClick is going to perform the calculation using previous value current operator and current Input


//next function is to update the display with the result



// TODO: Use this section to declare functions that do the main work of the program

/*

   Over to you...

   - Get a cup of tea
   - Check out the TODOs and sections that have been provided
   - Remove it all and start from scratch if you prefer
   - See what you can do

   See README.md and TASKS.md for some guidance or book a session with Nigel on Preply.

*/


export { currentInput, currentOperator, previousValue, handleOperatorClick, handleNumberClick, handleClearClick, handleEqualsClick };