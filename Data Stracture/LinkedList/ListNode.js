// 4-->7-->8-->null

class ListNode {
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}

// the "for-loop" for linked lists
function printList(node){
    let current = node
    while(current != null){
        console.log(current.data)
        current = current.next
    }
}

// accept a node at the front of a list
// and returns the total sum of all values
function sumList(node){
    let current = node
    let total = 0
    while(current != null){
        total += current.data
        current = current.next
    }
    return total
}

// making new node for every single node

let n1 = new ListNode(4)
let n2 = new ListNode(7)
let n3 = new ListNode(8)

// wire each node together

n1.next = n2
n2.next = n3

// printing Node

printList(n1)
console.log(sumList(n1))