//Closures
//task 1
function outerFn(){
    let msg = "hello";
    function innerFn(){
        console.log(msg);
    }
    innerFn();
}
outerFn();

//task 2
const add = (()=>{
    let counter = 0;
    return () => (counter+=1);
  })();
add(); //1
add(); //2
add(); //3
console.log(counter);

