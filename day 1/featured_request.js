/* *************************featured request 1************************* */
let a = 5;
let s = "supp?";
let b = true;
let arr = ['square','rectangle','circle'];
console.log('value of a is', a ,'and type of var a is', typeof(a));
console.log('value of s is', s ,'and type of var s is', typeof(s));
console.log('value of b is', b ,'and type of var b is', typeof(b));
console.log('value of arr is', arr ,'and type of var arr is', typeof(arr));

/* *************************featured request 2************************* */

/* the diff btwn let n const is 'let' allows to reassign the value of a
   variable and 'const' doesnt allows it and throws an error if we do it. */

let p = 4;
console.log(p);
p = p + 6;
console.log(p);
const r = 5;
console.log(r);
r = 10; // This line will throw error saying const var cannot be reassigned
console.log(r);
