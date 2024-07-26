//activity 1 (class definition)
class person{
    constructor(name,lastname,age){
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }
    //task 1 definition
    greet(){
        console.log(`Welcome, ${this.age} year old ${this.name}.`);
    }
    //task 2 definition
    updateAge(newAge){
        this.age = newAge;
        console.log(`updated age is ${this.age}`);
    }
    //task 5 definition
    static greet(){
        console.log(`Added static to copy of greet() since task1 is in the same file.`);
    }
    //task 7 definition
    get fullname(){
        return `${this.name} ${this.lastname}`
    }
    set fullname(name){
        let puraNaam = name.split(" ");
        this.name = puraNaam[0];
        this.lastname = puraNaam[1];
    }
}
//task 1 execution
let varun = new person("Varun","Majumdar",19);
varun.greet();
//task 2 execution
varun.updateAge(20);

console.log(`--------------------------------------------------`);

//activity 2 (class inheritance)
class student extends person{
    static count = 0;
    constructor(name,lastname,age,studentId){
        super(name,lastname,age);
        this.id = studentId;
        student.count++;
    }

    //task 3 definition
    returnStudentID(){
        return this.id;
    }
    //task 4 definition
    greet(){
        console.log(`Welcome, ${this.id}.${this.name} | age: ${this.age}.`);
    }
}
let student1 = new student("Taposhi","Majumdar",23,101);
//task 3 execution
console.log(student1.returnStudentID());
//task 4 execution
student1.greet();

console.log(`--------------------------------------------------`);

//activity 3 (Static methods and Properties)
//task 5 execution
person.greet();
//task 6 execution
console.log("total num of students:",student.count); //when 1 student
let student2 = new student("Aryan","Ahire",22,102); //adding another student
console.log("total num of students:",student.count); //checking if the student count has updated

console.log(`--------------------------------------------------`);

//activity 4 (getters and setters)
//task 7 execution
console.log(student1.fullname);
//task 8 execution
student1.fullname = "Paneer Lal";
console.log(student1.fullname);