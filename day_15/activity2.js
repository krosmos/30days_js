//practical closures
//task 3
function generateID(){
    let Id = 2400;
    return ()=>{
        Id += 1;
        console.log("current ID generated is",Id);
        return Id;

    }
}
const assignID = generateID();

class person {
    constructor(name){
        this.username = name;
        this.userId = assignID();
    }
    printInfo(){
        console.log(`name: ${this.username} | ID: ${this.userId}`);
    }
}
let person1 = new person("varun");
person1.printInfo();
let person2 = new person("swapnil");
person2.printInfo();

//task 4
function welcome(name){

    return ()=> console.log(`helloo, ${name}`);
}
const greet1 = welcome(person1.username);
greet1();