//Sorting algorithms
function swaps(arr,a,b){
    [arr[a],arr[b]] = [arr[b],arr[a]];
}
//task1
function bubblesort(arr){
    let i,j,n = arr.length;
    let swap;
    for(i = 0;i < n-1; i++){
        swap = false;
        for(j = 0;j < n-i-1; j++){

            if(arr[j] > arr[j+1]){
                swaps(arr,j,j+1);
                swap = true;
            }
        }
        if(swap == false)
            break;
    }
    return arr;
}
console.log(bubblesort([4,3,2,6,5,9,8,1]));

//task2
function selectionsort(arr){
    let i,j,n = arr.length;
    let minIndex;
    for(i = 0;i < n-1; i++){
        minIndex = i;
        for(j = i+1;j < n; j++){
            if(arr[minIndex] > arr[j])
                minIndex = j;
        }
        swaps(arr,minIndex,i);
    }
    return arr;
}
console.log(selectionsort([4,3,2,6,5,9,8,1]));

//task3
function partition(arr,start,end){
    let pivot = arr[start];
    let i = end + 1;
    for(let j = end;j > start; j--){
        if(arr[j] > pivot){
            i--;
            swaps(arr,i,j);
        }
    }
    swaps(arr,start,i-1);
    return i-1;
}
function quicksort(arr,start,end){
    if(start < end){
        let pivot = partition(arr,start,end);
        
        quicksort(arr,start,pivot-1);
        quicksort(arr,pivot+1,end);

    }
}
let arr = [4,3,2,6,5,9,8,1];
quicksort(arr,0,arr.length-1);
console.log(arr);