//linked list
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
function addNode(head,data){
    const newNode = new Node(data);
    if(head == null)
        head = newNode;
    else{
        let temp = head;
        while(temp.next != null){
            temp = temp.next;
        }
        temp.next = newNode;
    }
    return head;
}
function removeLast(head){
    let temp = head;
    while(temp.next.next != null){
        temp = temp.next;
    }
    let todelete = temp.next;
    temp.next = null;
    delete todelete;
}
function displayList(head){
    let temp = head;
    let res = "";
    while(temp != null){
        res += " " + temp.value;
        temp = temp.next;
    }
    console.log(res);
}


let head = null;
head = addNode(head,5);
addNode(head,10);
addNode(head,15);
addNode(head,25);
removeLast(head);
displayList(head);