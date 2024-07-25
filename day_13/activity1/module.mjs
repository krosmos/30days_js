//task 1 module
function add(a,b){
    return a+b;
}

//task 2 module
const person = {
    username: "krosmos",
    age: 20,
    printInfo: ()=> 
        console.log("name:",person.username,"\n"+"age:",person.age)
}

export {add,person};