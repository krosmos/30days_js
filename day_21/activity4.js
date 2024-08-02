//merge 2 sorted lists
function mergelist(arr1,arr2){
    let i = j = 0;
    let arr = [];
    while(i < arr1.length || j < arr2.length){
        if(arr1[i] < arr2[j]){
            arr.push(arr1[i]);
            i++;
        }
        else{
            arr.push(arr2[j]);
            j++;
        }
    }
    return arr;
}
console.log(mergelist([1,3,5,7],[2,4,6,8]));
console.log(mergelist([0,4,5,7],[3,4,7,8]));
console.log(mergelist([-3,-1,5,7],[-5,-4,0,8]));