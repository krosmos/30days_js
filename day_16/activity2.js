let arr = [4,30,23];

//task 3
function sum(arr,key){
    if(key < 0)
        return 0;
    return arr[key] + sum(arr,key-1);
}
console.log(sum(arr,arr.length-1));
console.log(sum([2,1,44,2],arr.length-1));
console.log(sum([90,49,73,25],arr.length-1));

//task 4
function max(arr){
    if (arr.length<=1)
        return arr[0];
    let currMax = max(arr.slice(1));
    return (currMax > arr[0]) ? currMax : arr[0];
}

console.log(max(arr));
console.log(max([90,49,73,25]));
console.log(max([2,1,44,2]));