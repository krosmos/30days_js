//task 9
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
function traverse(node){
    if(node == null)
        return 0;

    traverse(node.left);
    console.log(node.data);
    traverse(node.right);
}


const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

traverse(root);

//task 10
const newRoot = new Node(100);
newRoot.left = new Node(201);
newRoot.right = new Node(90);
newRoot.left.right = new Node(214);
newRoot.right.left = new Node(61);
newRoot.left.right.left = new Node(69);

function calculateDepth(node){
    if(node == null)
        return 0;
    const leftDepth = calculateDepth(node.left);
    const rightDepth = calculateDepth(node.right);
    return Math.max(leftDepth,rightDepth) + 1;
}
//tree 1
console.log(`the depth of the tree is: ${calculateDepth(root)}`);
//tree 2
console.log(`the depth of the tree is: ${calculateDepth(newRoot)}`);
