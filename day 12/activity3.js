var r = require('readline-sync');
//custom error objects
//----------------------task 4--------------------------
class customError extends Error{
    constructor(message){
        super(message)
        this.name = this.constructor.name;
    }
}

try{
    throw new customError("errrrrrrrrr");
}catch(error){
    console.log(error.name + ": " + error.message);
}

//----------------------task 5--------------------------
class stringValidationError extends Error{
    constructor(msg){
        super(msg);
        this.name = this.constructor.name;
    }
}
let name = r.question("enter name: ");
try{
    if(name == "")
        throw new stringValidationError("try entering a name with atleast 1 character.");
    else
        console.log("the name entered is:", name);
}
catch(error){
    console.log(error.name+": "+error.message);
}
