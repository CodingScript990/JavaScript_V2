const defaultResult = 0; // const inital value === 0
let currentResult = defaultResult; // not change value
//let rs; // result value(initial)

// custom function

function add() { // function name(parameter) { result; }
    currentResult = currentResult + parseInt(userInput.value); // 0 + parseInt(input write...)
    //alert('The result is ' + rs); // call(rs[const])
    outputResult(currentResult, ''); 
    // The output (0 + '' >> string >> Final output >> 01) => userInput.value
    // The output (0 + '' >> int >> Final output >> 2) => parseInt(userInput.value)
    //return rs; // element + element
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

    addBtn.addEventListener('click', add); // addEventListener : function that causes an event


   // let currentResult = defaultResult; [Error]
/*
    [Data Types]
    1. Numbers : 2,-2, 22.222 - Important for calculations and code
    2. Strings(Text) : 'Hi', "Hi", `Hi` - Important for outputting results, gathering input
    3. 
*/
