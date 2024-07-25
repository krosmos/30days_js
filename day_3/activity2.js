//task 3
let n1 = 3, n2 = 5, n3 = 1;
if(n1!=n2!=n3)
if(n1>n2){
    if(n1>n3)
        console.log(n1,"is the greatest.");
}
else if(n2>n3){
    if(n2>n1)
        console.log(n2,"is the greatest.");
}
else if(n3>n2){
    if(n3>n1)
        console.log(n3,"is the greatest.");
}
let res = n1!=n2!=n3;
console.log(res);