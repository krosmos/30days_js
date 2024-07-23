//destructuring
//task 3
let arr = [5,10,15,20,25];
let [first,second] = arr;
console.log(first,second);

console.log(`-----------------------`);
//task 4
const book = {
    title: "The Bell Jar",
    author: "Sylvia Plath",
    year: 1963,
};
let {title,author} = book;
console.log(`${title} -by ${author}`);