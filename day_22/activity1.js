//add two numbers
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}
function addNode(head, data) {
    const newNode = new ListNode(data);
    if (head.val === null) {
        head.val = newNode.val;
        head.next = newNode.next;
    } else {
        let temp = head;
        while (temp.next != null) {
            temp = temp.next;
        }
        temp.next = newNode;
    }
    return head;
}
function SumList(num1, num2) {
    let res = new ListNode(null);
    let carry = 0;
    let temp1 = num1;
    let temp2 = num2;
    
    while (temp1 != null || temp2 != null || carry != 0) {
        let val1 = (temp1 != null) ? temp1.val : 0;
        let val2 = (temp2 != null) ? temp2.val : 0;
        let sum = val1 + val2 + carry;
        
        carry = Math.floor(sum / 10);
        addNode(res, sum % 10);
        
        if (temp1 != null) temp1 = temp1.next;
        if (temp2 != null) temp2 = temp2.next;
    }
    return res;
}
function printList(node) {
    let result = [];
    while (node != null) {
        result.push(node.val);
        node = node.next;
    }
    console.log(result.join(' -> '));
}
//test case 1
const num1 = new ListNode(2, new ListNode(0, new ListNode(7)));
const num2 = new ListNode(6, new ListNode(5, new ListNode(4)));
const result1 = SumList(num1, num2);
printList(result1);
//test case 2
const num3 = new ListNode(8, new ListNode(8, new ListNode(8)));
const num4 = new ListNode(4, new ListNode(4, new ListNode(4)));
const result2 = SumList(num3, num4);
printList(result2);