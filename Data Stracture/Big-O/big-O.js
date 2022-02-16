class ArrayList {
    constructor(){
       this.data = new Array(20);
       this.size =0; 
    }
    // 0(1) constant time
    // this function always takes a constant amount of time to run
    // no matter how maony things are in the array
    size(){
        return this.size
    }
    // 0(1) constant time
    // it always take the same constant amount time to append
    // just to the end of the array 
    append(value) {
        this.data(this.size) = value
        this.size++
    }
    // 0(N) liner time
    // this function will take more time directly proportional to the amount
    // of items in the array.
    removeAtIndex(index){
        for(let i= index; i<this.size-1; i++){
            // shift values left to replace the index that was removed
            this.data[i] = this.data[i+1]
        }
        this.data[this.size-1] = null
        this.size--
    }
    // O(N^2) qadratic time
    // this function will take longer with a ratio of 
    //N^2 amount of time per N items in the array
    // return true or false depending on if there's any duplicate value in the array
    containsDuplicates(){
        for(let i=0; i<this.size; i++){
            for(let j=0; i<this.size; j++){
                // two identical values appear at different positions in the array
                if(i !== j && this.data[i] === this.data[j]){
                    return true
                }
            }
        }
        return false
    }

    fill(size){
        for (let i =0; i<size; i++){
            this.append(Math.random())
        }
    }
}

function measureTime(func, length, reportResult = true){
    let start = process.hrtime()
    func()
    let diff = process.hrtime(start)

    if (reportResult){
        console.log(length,diff[1] + 'ms')
    }
}

let a1000 = new ArrayList();
let a2000 = new ArrayList();
let a3000 = new ArrayList();
let a4000 = new ArrayList();
let a5000 = new ArrayList();
a1000.fill(1000)
a2000.fill(2000)
a3000.fill(3000)
a4000.fill(4000)
a5000.fill(5000)

// warm up the program so everything is fairly timed

for(let i=0; i<10; i++){
    timeEverything(false)
}
timeEverything(true)

function timeEverything(reportResult){
    // call the O(N) removeAtIndex method
    if (reportResult){
        console.log('O(1) size()')
    }
    measureTime(() => a1000.length(),1000,false)
    measureTime(() => a1000.length(),1000,reportResult)
    measureTime(() => a2000.length(),2000,reportResult)
    measureTime(() => a3000.length(),3000,reportResult)
    measureTime(() => a4000.length(),4000,reportResult)
    measureTime(() => a5000.length(),5000,reportResult)

    // call the O(N) removeAtIndex method

    if (reportResult){
        console.log()
        console.log('O(N) remove(0)')
    }

    measureTime(() => a1000.removeAtIndex(0),1000,false)
    measureTime(() => a1000.removeAtIndex(0),1000,false)
    measureTime(() => a1000.removeAtIndex(0),1000,false)
    measureTime(() => a1000.removeAtIndex(0),1000,false)
    measureTime(() => a1000.removeAtIndex(0),1000,false)
    
}
