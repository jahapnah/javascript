//  Data types in javascript

// 1. Primitive data types
   
//    - Strings              -- "Harry"
//    - Arrays               --  34
//    - Boolean              --true false
//    - Null                 -- Intentionally blank 
//    - Undefined            -- 
//    - Symbol               -- ES6


// STRING
const name = "Rishi kant;"
console.log("My name is " +name);
console.log("Type of data is " +(typeof name));


// NUMBERS
const marks = 34;
console.log("Type of data is " + (typeof marks))


// BOOLEAN
const value = false;
console.log("Type of data is " +(typeof value));


// NULL
let nullVar = null;
console.log("Type of data is " + (typeof nullVar))


//UNDEFINED
const undef = undefined
console.log("Type of data is " + typeof unded)





// 2. Undefines data types

//    - Arrays             
//    - Object literals
//    - Functions
//    - Dates


// ARRAYS
let myarr = [2,3,4,5]
console.log("Type of data is " + (typeof myarr));


//OBJECT LITERALS
const school = {
    "Rishi": true,
    "Saket": false,
  "Shashank": 34,
  "Harshit": undefined,
  }
  
  console.log(school['Shashank'])
  console.log(school["Rishi"])
  console.log(school["Harshit"])
  console.log(school["Saket"])




   