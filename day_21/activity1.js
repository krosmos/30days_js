//Two Sum problem
function twoSum(arr,target){
    arr.sort();
    start = 0;
    end = arr.length - 1;
    while(start < end){
        currSum = arr[start] + arr[end];
        if(currSum === target)
            return [start,end];
        if(currSum > target)
            end--;
        else
            start++;
    }
    return 0;
}
console.log(twoSum([2,3,4,5,6,7,8],5));
console.log(twoSum([2,3,4,5,6,7,8],12));