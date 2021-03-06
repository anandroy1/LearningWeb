// start: null
// end: 1 -> 2 -> 3

function printList(node){
    let current = node
    let result = "root --> "
    while(current != null){
        result += current.data + " --> "
        current = current.next
    }
    result += "null"
    console.log(result)
}
class ListNode {
    constructor(data, next) {
        this.data = data
        this.next = next
    }
}

function problem1(){
    console.log("#1")
    let root = null;
    printList(root)

    let n1 = new ListNode(1)
    let n2 = new ListNode(2)
    let n3 = new ListNode(3)

    root = n1;
    n1.next = n2;
    n2.next = n3
    printList(root)
    console.log()

}

// start: 1 -> 2 -> 3
// end: 0 --> 1 -> 2 -> 3

function problem2(){
    console.log("#2")

    let root = new ListNode(1, new ListNode(2, new ListNode(3)))
    printList(root)

    let zero = new ListNode(0)
    zero.next = root
    root = zero

    printList(root)
    console.log()

}


// start: 1 -> 3 -> 4
// end: 1 -> 2 -> 3 -> 4
function problem3(){
    console.log("#3")
    // there is only the root variable
    // nodes with data 3 and 4 do not have their own variables
    let root = new ListNode(1)
    root.next = new ListNode(3)
    root.next.next = new ListNode(4)

    printList(root)

    // creating a new node to contain the data 2

    let n2 = new ListNode(2)
    n2.next = root.next
    root.next = n2

    printList(root)
    console.log()

}

// start: 1 -> 2 -> 3
// end: 1 -> 2 -> 3 -> 4

function problem4(){
    console.log("#4")

    let root = new ListNode(1, new ListNode(2, new ListNode(3)))
    printList(root)

    let four = new ListNode(4)
    root.next.next.next = four

    printList(root)
    console.log()

}

// start: 1 -> 99 -> 2 --> 3
// end: 1 -> 2 -> 3 

function problem5(){
    console.log("#5")

    let root = new ListNode(1, new ListNode(99, new ListNode(2, new ListNode(3))))
    printList(root)

    root.next = root.next.next

    printList(root)
    console.log()

}
problem1()
problem2()
problem3()
problem4()
problem5() 