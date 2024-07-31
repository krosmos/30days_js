//task7
let str = `JavaScript is a versatile programming language that is essential for web development.`;
const regex = /^\w+/;
console.log(str.match(regex));

//task8
const regex1 = /\w+$/;
console.log(str.match(regex1)); //null since . is used at the end
