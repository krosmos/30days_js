//---------------------task 1------------------------
const task1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("task 1:");
        resolve();
    },2000);
});
task1.then(()=>{
    console.log("task 1 resolved");
});
//---------------------task 2------------------------
const task2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("task 2:");
        let error = false;
        if(!error){
            resolve();
        }
        else{
            reject("error, dont know what happened!");
        }
    }, 2000);
});

task2
.then(()=>console.log("task 2 resolved"))
.catch((error)=>console.log(error));