//pallindrome
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

function pallindrome(num){
    let rev = reverse(num);
    if(num === rev)
        return true;
    else
        return false;
}
console.log(pallindrome(505));
console.log(pallindrome(-505));
console.log(pallindrome(5050));