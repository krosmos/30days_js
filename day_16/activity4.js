//task 7
let arr = [2,3,4,6,7,1];
arr.sort();

function binSearch(arr,start,end,key){
    if(end >= start){ 
        let mid = Math.floor(start + (end - start)/2);
        if(arr[mid]==key)
            return mid;
        
        if(key < arr[mid])
            return binSearch(arr,start,mid-1,key);
        else
            return binSearch(arr,mid+1,end,key);
    }
    return "key not found";
    
}
let key = 2;
console.log(binSearch(arr,0,arr.length-1,key));
key = 6;
console.log(binSearch(arr,0,arr.length-1,key));
key=12;
console.log(binSearch(arr,0,arr.length-1,key));

//task 8
function countRep(arr,target,i=arr.length-1){
    if(i<0)
        return 0;
    let count = 0;
    if(arr[i] == target)
        count++;
    return count + countRep(arr,target,i-1);
}
let target = 5;
console.log(countRep([1,2,3,3,3,4,1,0,2,5,4,2,5,1,2],target));
target = 6;
console.log(countRep([1,5,6,2,4,4,1,3,4,6,6,0],target));
target = 0;
console.log(countRep([9,5,4,3,4,5,0,14,15,4,5],target));