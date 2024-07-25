var r = require('readline-sync');
//error handling in promises
//--------------------task 6--------------------------
const GODpromise = new Promise((resolve, reject) => {
    let timeLimit = r.question("enter time limit: ");
    setTimeout(()=>{
        if(timeLimit <= 2000)
            resolve("Promise resolved");
        else
            reject("Promise rejected, time limit exceeded!");
        
    },timeLimit);
});

GODpromise
.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log(error);
});

//--------------------task 7--------------------------
async function consumeGODpromise(){
    try{
        const response = await GODpromise;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumeGODpromise();