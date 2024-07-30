//searching algos
//task 4
function linearSearch(arr,target){
    for(let i = 0; i< arr.length; i++){
        if(arr[i] === target)
            return i;
    }
    return "not found";
}
let arr = [1,2,3,4,5,6,8,9];
console.log(linearSearch(arr,7));

//task 5
function binSearch(arr,start,end,key){
    if(end >= start){ 
        arr.sort();
        let mid = Math.floor(start + (end - start)/2);
        if(arr[mid]==key)
            return mid;
        
        if(key < arr[mid])
            return binSearch(arr,start,mid-1,key);
        else
            return binSearch(arr,mid+1,end,key);
    }
    return "not found";
    
}
console.log(binSearch(arr,0,arr.length-1,2));