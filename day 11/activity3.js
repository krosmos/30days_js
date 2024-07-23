// Async/Await
//--------------------task 4------------------------
let task4 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("task 4:");
        let error = false;
        if(!error){
            resolve({username: "varun", password: "1234"});
        }
        else{
            reject("error, dont know what happened!");
        }
    }, 2000);
});

async function consumeTask4(){
    try{
        const response = await task4;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumeTask4();

//--------------------task 5------------------------
let task5 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("task 5:");
        let error = true;
        if(!error){
            resolve({username: "soupnil", password: "neqqaballs"});
        }
        else{
            reject("error, dont know what happened!");
        }
    }, 2000);
});

async function consumeTask5(){
    try{
        const response = await task5;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumeTask5();