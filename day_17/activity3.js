class Queue{
    constructor(){
        this.arr = [];
    }
    isEmpty(){
        return this.arr.length === 0;
    }
    enqueue(val){
        this.arr.push(val);
    }

    dequeue(){
        if(this.isEmpty()){
            return "underflow"
        }

        return this.arr.shift();
    }

    front(){
        if(this.isEmpty()){
            return "empty queue"
        }

        return this.arr[0];
    }
}
let q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
console.log(q.front());
console.log(q.dequeue());
console.log(q.front());

//task 6

let printer = new Queue();

printer.enqueue("print 1");
printer.enqueue("print 2");
printer.enqueue("print 3");
while(!printer.isEmpty()){
    console.log(`${printer.dequeue()} is processed`);
}