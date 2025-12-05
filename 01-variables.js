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

Assignment: Textio tracks the number of messages sent for different types of notifications. Between the comments, create a:
- `totalMessagesSent` variable that contains the total number of messages snet
- `averageMessageSent` variable that contains the average number of messages sent across all types.

*/

const promoMessages = 12;
const reminderMessages = 15;
const welcomeMessages = 8;
const supportMessages = 5;

let totalMessagesSent = promoMessages + reminderMessages + welcomeMessages + supportMessages;

let averageMessageSent = (totalMessagesSent)/4;

console.log('Total Messages: ' + totalMessagesSent);
console.log('Average Messages: ' + averageMessageSent);