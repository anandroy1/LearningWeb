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
        const NewNode = {   // creating new node(Object)
            value: data,
            next: null
        } 
        this.tail.next = NewNode
        this.tail = NewNode  
        this.length++            
    }
}

const myList = new LinkedList(10)
myList.append(16)
myList.append(25)
myList.append(36)
console.log(myList);