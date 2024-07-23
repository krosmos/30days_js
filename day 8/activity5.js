var r = require('readline-sync');
//enhanced object literals
//task 8
let title = "The Bell Jar";
let author = "Sylvia Plath";
let year = 1963;
let print = () =>
    console.log(`${title} is written by ${author} in the year ${year}`);

const book = {title,author,year,print};
console.log(book);

console.log(`----------------------------------`);

//task 9
let property1 = "name";
let property2 = "age";
let name = r.question("enter name: ");
let age = r.question("enter age: ");

let person = {
    [property1]: name,
    [property2]: age
}
console.log(person);