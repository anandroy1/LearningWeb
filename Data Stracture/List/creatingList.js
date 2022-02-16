class List {
    constructor() {
        this.data = new Array(10)
        this.size =0;
    }
    push(value){
        this.data[this.size] = value
        this.size++
    }

    toString(){
        if (this.size === 0) {
            return "[]"
        } else {
            let result = ""
            for(let i=0; i<this.size; i++) {
                result += this.data[i] + " "
            }
            return "[" + result +"]"
        }

    }
}

const ll = new List()

console.log("str:", ll.toString())
console.log("data:", ll.data)
console.log()

ll.push(42)
console.log("str:",ll.toString())
console.log("data:", ll.data)
console.log()

ll.push(56)
console.log("str:",ll.toString())
console.log("data:", ll.data)
console.log()

ll.push(92)
console.log("str:",ll.toString())
console.log("data:", ll.data)
console.log()

ll.push(92)
console.log("str:",ll.toString())
console.log("data:", ll.data)
console.log()