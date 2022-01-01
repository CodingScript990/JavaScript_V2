const defaultResult = 0; // const inital value === 0
let currentResult; // not change value

// custom function

function add(num1, num2) { // function name(parameter) { result; }
    const rs = num1 + num2;
    //alert('The result is ' + rs); // call(rs[const])
    return rs; // element + element
}

currentResult = add(1, 2); // call(function)


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

    let calculationDescription = `( ${defaultResult} + 10) * 3 / 2 - 1`; // String

    outputResult(currentResult, calculationDescription); 


   // let currentResult = defaultResult; [Error]
/*
    [Data Types]
    1. Numbers : 2,-2, 22.222 - Important for calculations and code
    2. Strings(Text) : 'Hi', "Hi", `Hi` - Important for outputting results, gathering input
    3. 
*/
