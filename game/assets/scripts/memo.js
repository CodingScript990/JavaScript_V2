// 2022.01.31
/*
  [Boolean Tricks]

  1. Boolean Coercion via double NOT operator / !! e.g. !! "", e.g. !! 1 => false, true
  2. Default value assignment via OR operator / || e.g. const name = someInput || 'Kim' => someInput if not falsy, 
  'Kim' otherwise
  3. Use value if condition is true via AND operator / && e.g. const name = isLoggedIn && 'Kim' => 'Kim' is set 
  if isLoggedIn true, false oterwise
*/

// 2022.02.01
/*
  [loops]

  1. for loop :
   - Execute code a certain amount of times
   - for(let i = 0; i < 3; i++) { console.log(i); }

  2. for-of loop :
   - Execute for every element in an array
   - for (const el of array) { console.log(el); }

  3. for-in loop :
   - Execute for every key in an object
   - for (const key in obj) { 
     console.log(key); 
     console.log(lel); 
    }
  
  4. while loop :
   - Execute code as long as a condition is true
   - while (isLoggedIn) { ... }
*/

// 2022.02.03
/*
    [break]

    ex) for (let i = 0; i < 5; i++) {
      if(i === 3) {
        break;
      }
      console.log(i); // 0,1,2
    }
    - start 0 / stop 3 / result 0, 1, 2

    [continue]

    ex) for (let i = 0; i < 5; i++) {
      if(i === 3) {
        continue;
      }
      console.log(i); // 0,1,2,4
    } 
    - start 0 / stop 5 / result 0, 1, 2, 4
*/

// 2022.02.04
/*
    [var VS let & const]

    var : variable, Es5, Fucntion & Global scope
    ex) var i = 1;
        var i = 2;
        result = 2; // anything change value 
    
    let : variable, Es6, Block Scope
    ex) let j = 1;
        let j = 2; // SyntaxError!! not use to same value name!(X : let i = something; let i = something; === Error)
        j = 2; // But possible change value 👍 
        result = 2;

    const : constant, Es6, Block Scope
    ex) const z = 1;
        z = 2; // Error! not change value
        result = error! || 1;(not change result value)

    [Hoisting]

    ex1)
    console.log(userName);
    var userName = 'Kim';
    result => undefined

    ex2) 
    console.log(userName);
    let userName = 'Kim';
    result =>  ReferenceError(Before initialization)
*/
