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
/*
    [Null / Undefined / NaN]

    1. Undefined(선언후 값을 넣지 않고 호출 할때) : Deffault value of uninitialized variables. (Not entirely equall)
    2. Null(값이 없을때) : Never assumed by default. (Not entirely equall)
    3. NaN(기술적 에러) : Technically, it's of type number and can therfore be used in calulations. (Not a type!)
*/
/*
    [Typeof Operator]
    1. String : typeof "hi"
    2. Number : teypof 1
    3. Boolean : typeof true
    4. Object : typeof [1,2,3,4,..] / typeof {1,2,3,4,..};
    5. Undefined : typeof undefined
    6. Null : typeof null === Object
    7. NaN : typeof NaN === number
*/
/*
    [script & async & defer]

    1. script : parser blocking resource(파서 차단 리소스), Basic browser pasing => stop browser => javascript file down
    => pasing => recoment start pasing[outside line] / pasing => text file, javascript file => finish![inline]

    2. async : Together start text file pasing & javascript file download => but finish javascript down load! start javascript file => 
    stop text pasing => finish javascript file => start pasing text file

    3. defer : Together start text file pasing & javascrit file download but not stop text file pasing => defer is type boolean!(true)
    => javascript file start & text file pasing => finish text file => finish javascript file

    ✔ [Something in common - async,defer] - 공통점
    1. javascript download is not stop html pasing

    ✔ [Difference - async, defer] - 차이점
    1. async : script download finish => start javascript file
    2. defer : html file pasing finish=> start javascript file

    ✔ [Sequence - async, defer] - 실행 순서
    1. async : First, downloaded order [먼저]
    2. defer : Do it in the order defined [정해진]
*/
/*
    [Mastering Development]
    
    ✔ Write Code Efficiently
    
    1. Work in a productive environment
    2. Auto-format code & use shortcuts
    3. Use auto-completion and hints
    4. Explore extensions & settings

    ✔ Find Help

    1. Use MDN
    2. Learn how to google
    3. Ask proper questions, help others
    4. Trial & Error
    
    ✔ Debug Code

    1. Read and utilize error message
    2. Use console.log() to gain insights into code
    3. Use the debugging tools
    4. Use IDEs debugging capabilities
*/
/*
    [if] Statements & Boolean Ooperator

    == : Check for value equality
    != : Check for value inquality
    === and !== : Check for value And type equality
    >&< : Check for value being greater / smaller
    >= & <= : Check for value being greater or equal / smaller or equal
    ! : Check if Not true

    ex)
    2 == 2 true
    2 == '2' true ????
    2 != 2 false
    2 != '2' false

    2 === 2 true
    2 === '2' false
    2 !== 2 false
    2 !== '2' true

    3 > 2 true
    4 < 2 false

    4 >= 2 true
    4 >= 2 false

    !4 false
    2 === !2 false
    !2 === !2 true

*/
