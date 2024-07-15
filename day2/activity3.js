//task 8
let a = 20;
let b = 5;
let res = a>b;
console.log(a,"greater than",b,"is",res);
res = a<b;
console.log(a,"less than",b,"is",res);

//task 9
let c = 5; //deliberately taking a variable equal to existing variable to demonstrate >= and <= functionality
res = a>=c;
console.log(a,"greater than equal to",c,"is",res);
res = b<=c;
console.log(b,"less than equal to",c,"is",res);

//task 10
let s = '5'; //taking value equal to variable c but in string datatype to demonstrate diff btwn == and ===
res = c == s;
console.log("when same values with diff datatypes are compared using == the result is",res);
res = c === s;
console.log("when same values with diff datatypes are compared using === the result is",res);