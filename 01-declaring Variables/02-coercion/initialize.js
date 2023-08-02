// var a;
// let b;
// const PLAYER = 'Player1';

var a = 'Rod'; // data type of string
var b = 40; // data type of number
var c = a +" "+ b; // data type of string that got concatenated through coercion
const pi = 3.14
// var x = 10;
// pi = 10; > We cannot redeclare a const variable and re initialize it with a new value.
// let x = 9;
// x = 10;
// x = 11;
let x = 12;
// let x = 13;

// e;

let d = c + ' ' + (x+b);
let D = 100;

console.log(a);
console.log(b);
console.log(c);
console.log(typeof d);
console.log(D);

// console.log(e);
// console.log(pi);
console.log(x);

// RULE FOR NAMING CONVENTIONS
// RULE1: letter, dollar or underscore 1, _Player, $Player
let letter;
let _Player;
let $Player;

// RULE2: Cannot contain special characters and cannot use a space. Player 1


// RULE3: You cannot use a keyword var var
// RULE4: Case sensitive d is different from D

// Descriptive
//  a, b, c

let firstName;
let lastName;

// camelCase, snake_case, kebab-case, PascalCase
let camelCase = 'Camelcase';
let snake_case = 'Snake case naming convention';
let KebabCase = 'PascalCase naming convention';

let test1, test2;
test1 = 1;
test2 = 2;
console.log(test1 + test2);