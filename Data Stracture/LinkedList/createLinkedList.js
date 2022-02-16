class LinkedList {
    constructor(data){
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head
        this.length =1;
    }
}

const myList = new LinkedList(10)
console.log(myList);