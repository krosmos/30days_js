//fetching data from an API
//--------------------task 6------------------------
fetch("https://api.github.com/")
.then((response)=>response.json())
.then((data)=>console.log(data))
.catch((error)=>console.log(error));

//--------------------task 7------------------------
async function consumefetchedAPI(){
    try{
        const response = await fetch("https://api.github.com/users/krosmos");
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}
consumefetchedAPI();