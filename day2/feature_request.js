//1. arithmetic operations
let a = 45;
let b = 10;

console.log(a,"+",b,"=",a+b);
console.log(a,"-",b,"=",a-b);
console.log(a,"x",b,"=",a*b);
console.log(a,"/",b,"=",a/b);
console.log("The remainder of",a,"divided by",b,"is",a%b);

//2. comparison and logical operators
let res = a<b || b==a/4.5;
console.log(res);
/* the above condition a<b is false since 45 is actually greater than 10
   and the 2nd condition is true as 45/4.5 is 10 i.e. the value of b.
   thus the res value wud be true(since FALSE || TRUE == TRUE) */

   
//3. ternary operators
let n = -3;
(n>=0)?console.log("number is positive."):console.log("number is negative.");

