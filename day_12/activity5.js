//graceful error handling in fetch
//-----------------------task 8------------------------
const invAPI = fetch("https://invalid-url.com");
invAPI
.then((response)=>console.log(response))
.catch((error)=>console.log(error.name,":",error.message));

//-----------------------task 9------------------------
async function consumeinvAPI(){
    try{
        const response = await invAPI;
        console.log(response);
    }
    catch(error){
        console.log(error.name,":",error.message);
    }
}
consumeinvAPI();