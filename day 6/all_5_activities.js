
var r = require('readline-sync');

//--------Array creation and access-------------
//task 1
let arr = [1,2,3,4,5];
console.log(arr);

//task 2
console.log("first element:",arr[0],"\nlast element:",arr[arr.length-1]);

//-----------Array methods (basic)--------------
console.log("--------------------------------");
//task 3
arr.push(6);
console.log("after pushing 6:",arr);

//task 4
arr.pop();
console.log("after using pop:",arr);

//task 5
arr.shift();
console.log("after using shift:",arr);

//task 6
arr.unshift(10);
console.log("after using unshift(10):",arr);

//----------Array methods (Intermediate)---------------
//task 7
let newArr = arr.map(num=>num*2);
console.log("the new array is:",newArr);

//task 8
let evenArr = arr.filter(num=>num%2==0);
console.log("the arr of even num is:",evenArr);

//task 9
let totalSum = newArr.reduce((sum,num)=>sum+num);
console.log("the sum of newArr is:",totalSum);

//-----------------Array iteration--------------------
//task 10
console.log("iterating over all the elements in the array:");
for(i=0;i<arr.length;i++)
    console.log(arr[i]);

//task 11
console.log("iterating over elements using forEach method:");
arr.forEach(num=>console.log(num));

//-------------Multi-dimensional Arrays-----------------
//task 12
let twoD = [[1,3,5],[2,4,6]];
console.log(twoD);

//task 13
let key1 = r.question("enter row: ");
let key2 = r.question("enter column: ");
console.log("the element u were searching for is:",twoD[key1][key2]);

