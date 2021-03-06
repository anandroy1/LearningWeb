class List {
    constructor() {
        this.data = new Array(10)
        this.size =0;
    }
    push(value){
        if (this.size === this.data.length){
            this.grow()
        }

        this.data[this.size] = value
        this.size++
    }

    grow(){
        // create a new array that's twice as big
        let aa = new Array(this.data.length *2)
        // copy over every value from the old data array to the larger array
        for (let i =0; this.data.length; i++){
            aa[i] = this.data[i] 
        }
        console.log("growing from",this.data.length, "to", aa.length)
        
        // set the larger array as the data for the tist
        this.data = aa
        console.log("str", this.toString())
        console.log("data:", this.data)
        console.log()
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

// add 100 numbers so we can see when list grows
for (i=0; i<100; i++){
    ll.push(i)
    console.log(ll.size)
}