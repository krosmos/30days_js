//task 1
let fact = (n) => {
    if(n == 0)
        return 1;
    return n * fact(n-1);
}
console.log(fact(0));
console.log(fact(5));
console.log(fact(10));

console.log(`--------------------------------------------`);
//task 2
let fibo = (n) => {
    if(n <= 1)
        return n;
    return fibo(n-2)+fibo(n-1);
}
console.log(fibo(0));
console.log(fibo(2));
console.log(fibo(8));
console.log(fibo(12));