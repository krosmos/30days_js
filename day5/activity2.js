//function expression
//task 3
let max = function(n1,n2){
    if(n1!=n2){
        if(n1>n2) return n1;
        else return n2;
    }
    else
        return "both are equal";
}
console.log(max(23,61));

//task 4
console.log("-------------------");

let concat = function(s1,s2){
    return s1+s2;
}
let s1 = readLineSync.question('Enter string 1 ');
let s2 = readLineSync.question('Enter string 2 ');
console.log(concat('fyuuu','sion'));