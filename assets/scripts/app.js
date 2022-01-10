const defaultResult = 0; // const initial value === 0
let currentResult = defaultResult; // not change value / first value
//let rs; // result value(initial)
let logEntries = []; // Arrays

// Type Change Mehtod Function / Gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Create Write Output[Repeate work] function / Generates and writes calculation log

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`; // total value = first value, operator, last value
  outputResult(currentResult, calcDescription); // result(initial value, write value) / from vendor file
}

function writeToLog(
  operationIdentifier, // operation
  prevResult, // prevResult value(past value)
  operationNumber, // input value(client use value === present value)
  newResult // result value
) {
  const logEntry = {
    operation: operationIdentifier, // operation ? ADD, SUBTRACT, MULTIPLY, DIVIDE
    prevResult: prevResult, // prevResult value ? initialResult value
    number: operationNumber, // number ? enteredNumber value
    result: newResult, // result ? currentResult value
  }; // Objects
  logEntries.push(logEntry); // Objects
  //console.log(logEntry.operation); // Object.data
  console.log(logEntries);
}

// custom function

// plus

function add() {
  // function name(parameter) { result; }
  const enteredNumber = getUserNumberInput(); // last value
  const initialResult = currentResult;
  currentResult += enteredNumber; // 0 + parseInt(input write...)
  //alert('The result is ' + rs); // call(rs[const])
  //   currentResult++; increment ceremony / ++currentResult;
  //   currentResult--; decrement ceremony / --currentResult;
  createAndWriteOutput("+", initialResult, enteredNumber);
  // The output (0 + '' >> string >> Final output >> 01) => userInput.value
  // The output (0 + '' >> int >> Final output >> 2) => parseInt(userInput.value)
  //return rs; // element + element
  //   logEntries = [enteredNumber]; array
  writeToLog("ADD", initialResult, enteredNumber, currentResult);
}

// substract

function subtract() {
  const enteredNumber = getUserNumberInput(); // last value
  const initialResult = currentResult;
  currentResult -= enteredNumber; // 0 + parseInt(input write...)
  //alert('The result is ' + rs); // call(rs[const])
  createAndWriteOutput("-", initialResult, enteredNumber);
  writeToLog("SUBTRACT", initialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserNumberInput(); // last value
  const initialResult = currentResult;
  currentResult *= enteredNumber; // 0 + parseInt(input write...)
  //alert('The result is ' + rs); // call(rs[const])
  createAndWriteOutput("*", initialResult, enteredNumber);
  writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserNumberInput(); // last value
  const initialResult = currentResult;
  currentResult /= enteredNumber; // 0 + parseInt(input write...)
  //alert('The result is ' + rs); // call(rs[const])
  createAndWriteOutput("/", initialResult, enteredNumber);
  writeToLog("DIVIDE", initialResult, enteredNumber, currentResult);
}

// alert(rs); // reference error! To output, can call after calling a function!

//currentResult = add(1, 2); // call(function)

//alert(rs); // reference error! not available

//currentResult = rs; // bad code!

//currentResult += (10) * 3 / 2 - 1; // 10 * 3 = 30 / 2 = 15 - 1 = 14
// defaultResult += (10) * 3 / 2 - 1; // typeError 0
/*
[operators]
    + : Add two numbers
    - : Subtract two numbers
    * : Multiply two numbers
    / : Divide two numbers
    % : Divide two numbers, yield remainder
    ** : Exponentiation(e.g. 2 ** 3 = 8)
    = : Assign value to variable
    */

//let calculationDescription = `( ${defaultResult} + 10) * 3 / 2 - 1`; // String

addBtn.addEventListener("click", add); // addEventListener : function that causes an event
subtractBtn.addEventListener("click", subtract); // subtractEventListener : function
multiplyBtn.addEventListener("click", multiply); // multiplyEventListener : function
divideBtn.addEventListener("click", divide); // divideEventListener : function

// let currentResult = defaultResult; [Error]
/*
    [Data Types]
    1. Numbers : 2,-2, 22.222 - Important for calculations and code
    2. Strings(Text) : 'Hi', "Hi", `Hi` - Important for outputting results, gathering input
    3. 
*/
/*
    [Data Type]
    1. Numbers : Important for cclculations and code where u need to "work with a number"
    2. Strings : Important for outputting results, gathering input
    3. Booleans : Important for conditional code and situations where u only have 2 options
    4. Objects : Important for grouped/related data, helps u with oranizing data
    5. Arrays : Important for list data, unknown amounts of data
*/
/*
    [Objects - Common Syntax]

    1. group the data ({};) / semicolon is used after if the are on the right side of the equal sign
    2. separated via a comma, Not via a semicolon. syntax error
    3. via a colon Not via an equal sign syntax error
    
    ex) [error]
    const worstPossibleUser = {
        name = 'Kim';
        age = 30;
    };

    [perfect]
    const worstPossibleUser = {
        name = 'kim',
        age = 30
    };
*/
