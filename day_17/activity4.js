//binary tree
class TreeNode{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
function traverse(node){
    if(node == null)
        return 0;

    traverse(node.left);
    console.log(node.val);
    traverse(node.right);
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

traverse(root);