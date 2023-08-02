/* DATA TYPES */

// let a;
// a = 10;
// a = 12;
// console.log(typeof a); // number

// let b;
// b = 'Text of a string literal'
// console.log(typeof b); // string literal

// let c;
// c = true

// console.log(typeof c); // boolean

// let d;
// console.log(typeof d); // undefined

// WHAT HAPPENS IF WE NEED TO USE THEM TOGETHER?

let e = 8; // integer
let f = '6'; // string literals are defined with either single quotes or double quotes.
f = parseInt(f,10) // parseInt is a built in function or method.
console.log(f); 
let g = e + f;
console.log('Answer ' + g + ' is an example of coercion!');
console.log(g);
console.log(typeof g);

// TYPE COERCION
// Convert string to a number 
// Convert a number to a string
// Convert object to boolean

let a = 10;
console.log(typeof a); // First console.log a datatype of a number

let b = '7';
console.log(typeof b); // second console.log a datatype of string
b = Number(b);
console.log(b);
console.log(typeof b); // Third example of b converted the value of string to a number

// TYPE OF COERCION EXPLICIT AND IMPLICIT

// EXPLICIT TYPE OF CONVERSION parseFloat(), parseInt()

function explicit(){
    let d = 5;
    let e = '6';
    e = parseInt(e, 10);
    let f = d + e;
    console.log("Explicit Answer: " + f);
    console.log(typeof f);
}

function implicit(){
    // We are checking if the integer 1 is equal to the string "1" is it true or false
    if(1 == '1'){ // This is not true because of the strict equality operator
        let a = 1; // number
        let b = "3"; // string
        let c = a + b;
        document.getElementById("true").innerHTML = "EXECUTED!!!"
        console.log("Implicit Answer: " + c);
        console.log(typeof c);
    }
    else{
        document.getElementById("false").innerHTML = "This did not execute because of the use of the strict equality operator"
        console.log("This did not execute because of the strict equality operator.")
    }
}

// explicit();
// implicit();