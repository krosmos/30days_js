//array algos
//task8
function rotateArr(arr,r){
    r = r % arr.length;
    return arr.slice(-r).concat(arr.slice(0,-r));
}
console.log(rotateArr([1,2,3,4,5,6,7,8],3));

//task9
function mergeSortedArrs(arr1, arr2) {
    let newArray = [];
    let i = 0,
        j = 0;
    while (i < arr1.length || j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            newArray.push(arr1[i]);
            i++;
        } else {
            newArray.push(arr2[j]);
            j++;
        }
    }
    return newArray;
}

let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8, 10];
console.log(mergeSortedArrs(arr1, arr2));