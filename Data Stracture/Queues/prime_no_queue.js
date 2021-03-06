class QueueNode {
    constructor (data, next) {
        this.data = data
        this.next = next
    }
}

class Queue {
    constructor(){
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


// accept an integer N and return all the prime numbers
// from 2 up t (but not including) n. Return the prime numbers
// as an array. Use two queues to implement the sieve of Eratostenes.
function primesUpToN(n) {
    let qq = new Queue()

    //add all the numbers from 2 up to N into the qq
    for(let i = 2; i < n; i++) {
        qq.enqueue(i)
    }

    let primes = []
    let q2 = new Queue()

    while(qq.size >= 1){
        // add the first number in the queue as a prime in the prime array
       let prime = qq.dequeue()
        primes.push(prime)

        while (qq.size > 0) {
            let num = qq.dequeue()
            if (num % prime !== 0) {
                q2.enqueue(num)
            }
        }
        // swap the queues so qq has numbers and q2 is empty
        let temp = qq
        qq = q2
        q2 = temp
    }
    return primes
}

console.log(primesUpToN(100))