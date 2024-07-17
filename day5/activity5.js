//high-order functions
//task 9
let func0 = (n)=> console.log("funcky times",n);

let Hfunc = (func,n) =>{
    while(n>0){
        func(n);
        n--;
    }
}
Hfunc(func0,4);

//task 10
console.log("---------------------------");

let add50 = n => n+50;
let add100 = n => n+100;
let applyfn = (fn1,fn2,n) => fn2(fn1(n))*2;

console.log(applyfn(add50,add100,50));

