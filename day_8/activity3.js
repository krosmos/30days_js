//spread and rest operators
//task 5
let arr = [1,3,5,7,9];
let newArr = [...arr,2,4,6,8];
console.log(newArr);

console.log(`-------------------------`);
//task 6
let sum = (...nums) => {
    let res = 0;
    for (x of nums){
        res += x;
    }
    return res;
}
console.log(sum(...arr));
//OR
console.log(sum(1,32,22));