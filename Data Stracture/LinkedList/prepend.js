class LinkedList {
    constructor(data){
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head
        this.length =1;
    }

    append(data) {
        const newNode = {   // creating new node(Object)
            value: data,
            next: null
        } 
        this.tail.next = newNode
        this.tail = newNode  
        this.length++            
    }

    prepend(data){
        const newNode = {
            value: data,
            next: null
        }
        newNode.next = this.head
        this.head = newNode
    }
}

const myList = new LinkedList(10)
myList.append(16)
myList.append(25)
myList.append(36)
myList.prepend(12)
console.log(myList);