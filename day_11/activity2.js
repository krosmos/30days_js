//Chaining promises
//--------------------task 3------------------------
let task3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("task 3:");
        let error = false;
        if(!error){
            resolve({username: "varun", password: "1234"});
        }
        else{
            reject("error, dont know what happened!");
        }
    }, 2000);
});

task3
.then((response)=>{
    console.log(response);
    return response.username;
})
.then((username)=>console.log(username))
.catch((error)=>console.log(error));