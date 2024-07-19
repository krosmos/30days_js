
//object creation and access
//task 1

const book = {
    title: "The Bell Jar",
    author: "Sylvia Plath",
    year: 1963,
};

console.log(book);

console.log("-------------------------------------");

//task 2
console.log("the book",book.title,"is written by",book.author);

console.log("-------------------------------------");
//object methods
//task 3
book.printdetails =() => `the book ${book.title} is written by ${book.author}`;
console.log(book.printdetails());

console.log("-------------------------------------");

//task 4
book.updateYear = function(year){ 
    this.year = year;
    return this;
}

console.log(book.updateYear(2022));

console.log("-------------------------------------");
//nested objects
//task 5
let library = {
    name: "xyz lib",
    books: [
        {
            title: "book1",
            author: "writer1",
            year: 2001
        },
        {
            title: "book2",
            author: "writer2",
            year: 2002
        },
        {
            title: "book3",
            author: "writer3",
            year: 2003
        }
    ]
}
console.log(library);

console.log("-------------------------------------");

//task 6
console.log(library.name,"consists of books:");
library.books.forEach((book)=> console.log(book.title));

console.log("-------------------------------------");
//'this' keyword
//task 7
book.task7_fn = function(){
    console.log(`title: ${this.title}, author: ${this.author}`);
}
book.task7_fn();

console.log("-------------------------------------");
//object iteration
//task 8
for (x in book){
    console.log(x,":",book[x]);
}

console.log("-------------------------------------");

//task 9
console.log("Keys:", Object.keys(book));
console.log("Values:", Object.values(book));