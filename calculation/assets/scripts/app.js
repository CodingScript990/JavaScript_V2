const defaultResult = 0; // const initial value === 0
let currentResult = defaultResult; // not change value / first value
//let rs; // result value(initial)
let logEntries = []; // Arrays

// Type Change Mehtod Function / Gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Create Write Output[Repeate work] function / Generates and writes calculation log

function createAndOutput(operator, resultBeforeCalc, calcNumber) {
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

// calculation function

function calculateResult(calculationType) {

  const enteredNumber = getUserNumberInput(); // last value

  // AND, OR data type Comparison

  if(calculationType !== 'ADD' && calculationType !== 'SUBTRACT' && calculationType !== 'MULTIPLY' && calculationType !== 'DIVIDE' || !enteredNumber) {
    return;
  }

  // if(calculationType !== 'ADD' || calculationType === 'SUBTRACT' || calculationType === 'MULTIPLY' || calculationType === 'DIVIDE') {
     // function name(parameter) { result; }
  const initialResult = currentResult;
  //console.log("INPUT", enteredNumber, currentResult); checking my code using log function
  const methOperator; // operator

  // if
  if (calculationType === "ADD") {
    currentResult += enteredNumber; // 0 + parseInt(input write...)
    methOperator = "+";
  } else if (calculationType === "SUBTRACT"){
    currentResult -= enteredNumber;
    methOperator = "-";
  } else if (calculationType === "MULTIPLY"){
    currentResult *= enteredNumber;
    methOperator = "*";
  } else if (calculationType === "DIVIDE"){
    currentResult /= enteredNumber;
    methOperator = "/";
  }

  //alert('The result is ' + rs); // call(rs[const])
  //   currentResult++; increment ceremony / ++currentResult;
  //   currentResult--; decrement ceremony / --currentResult;
  createAndWriteOutput(methOperator, initialResult, enteredNumber);
  // The output (0 + '' >> string >> Final output >> 01) => userInput.value
  // The output (0 + '' >> int >> Final output >> 2) => parseInt(userInput.value)
  //return rs; // element + element
  //   logEntries = [enteredNumber]; array
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
  //}

}

// custom function

// plus

function add() {
  // function name(parameter) { result; }
  //const enteredNumber = getUserNumberInput(); // last value
  //const initialResult = currentResult;
  //console.log("INPUT", enteredNumber, currentResult); checking my code using log function
  //currentResult += enteredNumber; // 0 + parseInt(input write...)
  //alert('The result is ' + rs); // call(rs[const])
  //   currentResult++; increment ceremony / ++currentResult;
  //   currentResult--; decrement ceremony / --currentResult;
  //createAndWriteOutput("+", initialResult, enteredNumber);
  // The output (0 + '' >> string >> Final output >> 01) => userInput.value
  // The output (0 + '' >> int >> Final output >> 2) => parseInt(userInput.value)
  //return rs; // element + element
  //   logEntries = [enteredNumber]; array
  //writeToLog("ADD", initialResult, enteredNumber, currentResult);
  calculateResult('ADD');
}

// substract

function subtract() {
  // const enteredNumber = getUserNumberInput(); // last value
  // const initialResult = currentResult;
  // currentResult -= enteredNumber; // 0 + parseInt(input write...)
  //alert('The result is ' + rs); // call(rs[const])
  // createAndWriteOutput("-", initialResult, enteredNumber);
  // writeToLog("SUBTRACT", initialResult, enteredNumber, currentResult);
  calculateResult('SUBTRACT');
}

function multiply() {
  // const enteredNumber = getUserNumberInput(); // last value
  // const initialResult = currentResult;
  // currentResult *= enteredNumber; // 0 + parseInt(input write...)
  //alert('The result is ' + rs); // call(rs[const])
  // createAndWriteOutput("*", initialResult, enteredNumber);
  // writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
  calculateResult('MULTIPLY');
}

function divide() {
  // const enteredNumber = getUserNumberInput(); // last value
  // const initialResult = currentResult;
  // currentResult /= enteredNumber; // 0 + parseInt(input write...)
  //alert('The result is ' + rs); // call(rs[const])
  // createAndWriteOutput("/", initialResult, enteredNumber);
  // writeToLog("DIVIDE", initialResult, enteredNumber, currentResult);
  calculateResult('DIVIDE');
}

// alert(rs); // reference error! To output, can call after calling a function!

//currentResult = add(1, 2); // call(function)

//alert(rs); // reference error! not available

//currentResult = rs; // bad code!

//currentResult += (10) * 3 / 2 - 1; // 10 * 3 = 30 / 2 = 15 - 1 = 14
// defaultResult += (10) * 3 / 2 - 1; // typeError 0

//let calculationDescription = `( ${defaultResult} + 10) * 3 / 2 - 1`; // String

addBtn.addEventListener("click", add); // addEventListener : function that causes an event
subtractBtn.addEventListener("click", subtract); // subtractEventListener : function
multiplyBtn.addEventListener("click", multiply); // multiplyEventListener : function
divideBtn.addEventListener("click", divide); // divideEventListener : function

// let currentResult = defaultResult; [Error]
