//basic error handling with try-catch
//--------------------task 1--------------------------
const task1 = ()=>{
    throw new Error("dont know what happened!");
};

const handleError = () => {
    try {
        task1();
    } catch (error) {
        console.log("Error: " + error.message);
    }
};

handleError();

//--------------------task 2--------------------------
const task2 = (n1,n2)=>{
    try {
        if(n2!=0){
            let res = n1/n2;
            return res;
        }else{
            throw new Error("error: divided by zero!");
        }
    } catch (error) {
        return error.message;
    }
};
console.log(task2(3,0));