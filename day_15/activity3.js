//Closure in loops
//task 5
function createFns() {
    const functions = [];

    for (let i = 0; i < 5; i++) {
        functions.push(((i) => {
            return ()=>{console.log(i)}
        })(i));
    }

    return functions;
}

const printFns = createFns()
printFns[0]();
printFns[1]();
printFns[2]();
