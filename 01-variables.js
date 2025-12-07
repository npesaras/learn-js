/*
Basic data types in JavaScript
1. Number
2. String
3. Boolean
4. Undefined
*/


/*
========================================================================
VARIABLE DECLARATIONS

let - you can reassigned the value without issue
const - you can't reassigned the value.

Why should we avoid `var`?
- var is a function-scoped, not block-scoped, which leads to unexpected behaviour

*/

let username = "Mang Juan";
const age = 21;

console.log(username); //Mang Juan
console.log(age); //21


/* =====================================================================
NUMBERS
- undefined vs null
- increment and decrement
*/

const promoMessages = 12;
const reminderMessages = 15;
const welcomeMessages = 8;
const supportMessages = 5;

let totalMessagesSent = promoMessages + reminderMessages + welcomeMessages + supportMessages;

let averageMessageSent = (totalMessagesSent)/4;

console.log('Total Messages: ' + totalMessagesSent);
console.log('Average Messages: ' + averageMessageSent);

/*
Increment and decrement numbers in JavaScript

using `++` and `--` respectively
*/

let shot_clock = 24;
let game_time = 10

shot_clock -= 10;
game_time += 10;

console.log(shot_clock); //14
console.log(game_time); // 20


/*
Undefined vs Null

undefined - doesn't exist at all.
null - it (kind of ) exist.
*/

let undefined_name; // no assigned value
let null_age = null;

console.log(undefined_name);
console.log(null_age);


/* =====================================================================
String
- declare strings
- Template literals
*/

let string_name = 'John';
let msg = 'Hello ${string_name}';

console.log(string_name[string_name.length - 2]);

console.log(msg);