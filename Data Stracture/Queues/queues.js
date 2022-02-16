class QueueNode {
    constructor(data, next) {
        this.data = data
        this.next = next
    }
}

class Queue {
    constructor() {
        this.front = null
        this.tail = null
    }

    isEmpty(){
        return this.front === null
    }

    enqueue(value) {
        let node = new QueueNode(value)
        // if the Queue totaly empty
        if (this.isEmpty()){
            this.front = node
            this.tail = node
        } else {
         this.tail.next = node
         this.tail = node
        }
    }

    dequeue(){
        // if front was null
        if(this.isEmpty()){
            return null
        }

        let result = this.front.data
        // if only one or last node left then there's no more front or tail
        if(this.front === this.tail){
            this.front = null
            this.tail = null
        } else {  
            this.front = this.front.next
        }
        return result
    }
}


let qq = new Queue()
qq.enqueue("A")
qq.enqueue("B")
qq.enqueue("C")
qq.enqueue("D")
qq.enqueue("E")

while (!qq.isEmpty()) {
    console.log(qq.dequeue())
}