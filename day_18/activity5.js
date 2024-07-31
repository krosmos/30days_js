
function fibonacci(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 0) return 0;
    if (n === 1) return 1;

    // Compute Fibonacci number with recursion and memoization
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}

// Example usage:
const n = 10;
console.log(`The ${n}th Fibonacci number is: ${fibonacci(n)}`);