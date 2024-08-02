//Valid Parentheses
function validateString(str){
    let stack = [];
    for(let i = 0; i < str.length;i++){
        if(str[i] === '(' || str[i] === '[' || str[i] === '{')
            stack.push(str[i]);
        else if(str[i] === ')' || str[i] === ']' || str[i] === '}'){
            if(stack.length != 0){
                let lastOpenBracs = stack[stack.length-1];
                if(lastOpenBracs.charCodeAt() === str[i].charCodeAt()-1 || lastOpenBracs.charCodeAt() === str[i].charCodeAt()-2)
                    stack.pop();
            }
            else
                return "invalid string";
        }
    }
    
    return (stack.length === 0) ? "valid string" : "invalid string";
}
console.log(validateString("([{}])"));
console.log(validateString("}([{}])"));
console.log(validateString("([{}])("));