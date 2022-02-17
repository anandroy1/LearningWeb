class TreeNode {
    constructor(data, left = null, right = null) {
        this.data = data
        this.left = left
        this.right = right
    }
}

class Tree {
    constructor() {
        this.root = null
    }

    // visit every nodes in the tree and add each data
    // value to an array and return it.

    collect() {
        return this._collect(this.root, [])
    }

    // the underscore here indicates people should not use this
    // function themselves. This "simulates" a private function
    // that should only be called from the Tree class itself.
    // people should use the "collect" function which calls this one.
    _collect(current, nodes) {
        // base case : if there's no node just return the array
        if ( current === null){
            return nodes
        }

        //  add the current node to the array
        nodes.push(current.data)

        // recurse left and right
        this._collect(current.left, nodes)
        this._collect(current.right, nodes)

        // return the array
        return nodes
    }

    // use a public/private function pair to iterate through
    // the entire tree visiting every nodes and tataling the
    // value of all the data properties. So: sum all the data
    // values of every nodes. Hint: you won't need an array
    // like in the collect function.
    // Requrement: you MAY NOT use the .collect() function 
    // to convert the tree into an array that you than iterate
    // through with a for loop. You must do the addition inside
    // your recursive function
    // if the tree is empty you should return 0.
    //  if there are no nodes you should return 0.

    sum(){
        return this._sum(this.root)
    }

    _sum(node) {
        if (node === null) {
            return 0
        }
        return node.data + this._sum(node.left) + this._sum(node.right)
    }

    // returns true or false depending on if the tree contains
    // the given value.
    contains(value){
        return this._contains(this.root, value)
    }

    _contains(node, value) {
        if (node === null) {
            return false
        } else if (node.data === value) {
            return true
        }
        
    }

    // it returns the total number of nodes in the tree
    size() {
        return this._size(this.root)
    }

    _size(node) {
        if (node === null) {
            return 0
        }
        return 1 + this._size(node.left) + this._size(node.right)
    }

    // it return the total number of leaf-node in the tree
    // A leaf-node is a node that has no children. It's
    // left and right properties will both be null.
    leaves() {
        return this._leaves(this.root)
    }

    _leaves(node) {
        if ( node === null) {
            return 0
        }
        if (node.left === null && node.right === null) {
            return 1
        }
        return this._leaves(node.left) + this._leaves(node.right)
    }

    // returns the smallest value of the tree
    min() {
       return this._min(this.root)
    }

    _min(node) {
        if (node === null) {
            return 0
        }
        let leftMin = this._min(node.left)
        let rightMin = this._min(node.right)

        if (node.data < leftMin && node.data < rightMin){
            return node.data
        } else if (leftMin < rightMin) {
            return leftMin
        } else {
            return rightMin
        }
    }

    // returns the largest value in the tree 
    max() {
       return this._max(this.root)
    }

    _max(node) {
        if (node === null) {
            return 0
        }
        let leftMax = this._max(node.left)
        let rightMax = this._max(node.right)
        
        if (node.data > leftMax && node.data > rightMax){
            return node.data
        } else if (leftMax > rightMax) {
            return leftMax
        } else {
            return rightMax
        }
    }

    // returns thr height of thr tree(an empty tree has height 0)
    height() {
        return this._hight(this.root)
    }

    _hight(node) {
        if (node === null) {
            return 0
        }
        let leftHeight = this._hight(node.left)
        let rightHeight = this._hight(node.right)

        if (leftHeight > rightHeight) {
            return 1 + leftHeight
        } else {
            return 1 + rightHeight
        }
    }
}

let n1 = new TreeNode(32)
let n2 = new TreeNode(92)
let n3 = new TreeNode(13)
let n4 = new TreeNode(44)
let n5 = new TreeNode(87)

let tree = new Tree()
tree.root = n1
n1.left = n2
n1.right = n3
n3.right = n4
n4.left = n5

console.log("collect:", tree.collect())
console.log("sum:", tree.sum())
console.log("size:" ,tree.size())
console.log("leaves:" ,tree.leaves())
console.log("min:" ,tree.min())
console.log("max:" , tree.max())
console.log("height", tree.height())
