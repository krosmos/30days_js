var r = require('readline-sync');
//template literals
//task 1 and task 2
let person = {};
person.name = r.question("enter name: ");
person.age = r.question("enter age: ");
console.log(`-----------------------------`);
console.log(
`Hello, ${person.name}!
Your age is ${person.age}.`
);// this also includes multiline string task
console.log(`-----------------------------`);