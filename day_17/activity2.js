//stack
//task 3
class stack{
    constructor(){
        this.items = [];
    }
    push(data){
        this.items.push(data);
    }
    pop(){
        if (this.items.length == 0)
            return 'Underflow';
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length - 1];
    }
}
let st = new stack();
st.push(5);
st.push(8);
console.log(st.peek());
console.log(st.pop());
console.log(st.peek());

//task 4
let reverse = new stack();
let str = "yagami";
for(let i =0; i<str.length; i++){
    reverse.push(str.charAt(i));
}
    let rev = "";
    while(reverse.items.length != 0){
        rev += reverse.pop();
    }

console.log(rev);