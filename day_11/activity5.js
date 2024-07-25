//concurrent promises
//task 8
const promises = [
    fetch("https://api.github.com/users/krosmos"),
    fetch("https://api.github.com/users/pranittlad"),
    fetch("https://api.github.com/users/swapnilAngarkhe"),
    new Promise((resolve,reject)=>{
        setTimeout(() => {
            let error = false;
            if(!error)
                resolve({username: "varun", password: "1234"});
            else
                reject("error, dont know what happened!");
        }, 100);
    })
];
Promise.all(promises)
.then((values)=>console.log(values))
.catch((error)=>console.log(error));

//task 9
console.log("\nResult:")
Promise.race(promises)
.then((value)=>console.log(value))
.catch((error)=>console.log(error));
