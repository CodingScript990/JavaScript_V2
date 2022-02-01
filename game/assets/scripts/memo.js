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
