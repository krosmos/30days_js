function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}


function mergeTwoLists(l1, l2) {
    const dummy = new ListNode(0);
    let current = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
        current.next = l1;
        l1 = l1.next;
        } else {
        current.next = l2;
        l2 = l2.next;
        }
        current = current.next;
    }
    current.next = l1 !== null ? l1 : l2;

    return dummy.next;
}

function printList(node) {
const values = [];
while (node) {
    values.push(node.val);
    node = node.next;
}
console.log(values.join(" -> "));
}

const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const mergedList1 = mergeTwoLists(l1, l2);
printList(mergedList1);

const l3 = new ListNode(-1, new ListNode(0, new ListNode(8)));
const l4 = new ListNode(-3, new ListNode(-2, new ListNode(5)));
const mergedList2 = mergeTwoLists(l3, l4);
printList(mergedList2);