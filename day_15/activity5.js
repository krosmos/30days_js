//memoization
//task 7
function memoize(fn){
    const cache = {};
    return (...args) => {
        const key = JSON.stringify(args);
        if(cache[key])
            return cache[key];
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

//task 8
const factorial = memoize((num) =>{
    if(num == 0)
        return 1;
    return num * factorial(num - 1);
});

console.log(factorial(6));
console.log(factorial(6));