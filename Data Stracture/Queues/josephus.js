// [A, B, C, D, E, F] n=3 winner B
// [A, B, C, D, E, F] n=4 winner F

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
        this.size = 0
    }

    isEmpty(){
        return this.front === null
    }

    enqueue(value) {
        this.size++

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

        this.size--

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


function josephus(choices, n){
    let qq = new Queue()

    // add each choice to the queue
    for(let choice of choices){
        qq.enqueue(choice)
    }
    // accept for the starting the 1 count at the second item
    qq.enqueue(qq.dequeue())

    let count = 1
    while(qq.size > 1) {
        let choice = qq.dequeue()
        if(count % n !== 0){
            qq.enqueue(choice)
        } else {
            console.log("removed", choice)
        }
        count++
    }
    return qq.dequeue()
}
let choices = "ABCDEF".split("")
console.log(josephus(choices, 3))
console.log(josephus(choices, 4))