//finally block
try{
    console.log("inside try block");
    throw new Error("this is an error!");
}
catch(error){
    console.log("inside error block, " + error.message)
}
finally{
    console.log("inside finally block");
}