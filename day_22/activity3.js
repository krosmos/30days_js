//container with most water
function findMaxArea(arr){
    let start = 0;
    let end = arr.length - 1;
    let maxArea = 0;
    
    while(start < end){
        let currArea = Math.min(arr[start],arr[end]) * (end - start);
        maxArea = Math.max(maxArea,currArea);
        if(arr[start] < arr[end])
            start++;
        else
            end--;
    }
    return maxArea;
}
//testcase1
heightList = [31,22,41,51,45,46,15,32];
console.log(findMaxArea(heightList));
//testcase2
heightList1 = [28,30,43,50,54,43,15];
console.log(findMaxArea(heightList1));