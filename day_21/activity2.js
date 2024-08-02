// reverse integer 
function reverse(num){
    let n,revNum = 0;
    (num < 0)? n = -num : n = num;
    while(n> 0){
        let digit = n % 10;
        revNum = revNum*10 + digit;
        n = Math.floor(n/10);
    }
    return (num < 0)? -revNum : revNum;
}   
console.log(reverse(541));
console.log(reverse(210));
console.log(reverse(-2301));