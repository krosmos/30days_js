//arrow functions
//task 5
let sum = (n1,n2) => n1+n2;
console.log(sum(5,19));

//task 6
console.log("------------------");

let search = (key,str) =>{  
    for(i=0;i != str.length;i++){
        if(key == str[i]){
            return true;
            break;
        }
    }
        return false; 
}
console.log(search('z',"qwerty"));