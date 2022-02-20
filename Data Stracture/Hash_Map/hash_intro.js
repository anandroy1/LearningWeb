class HashMap {
    constructor() {
        this.buckets = new Array(7)
    }

    // takes a string and returns the sum of all letters
    // in the string where each letter has some number value
    // q=0, w=1... (it could be anything really)

    hash(str) {
        str = str.toLowerCase();

        const ALPHABET = "qwertyuiopasdfghjklzxcvbnm"
        let sum = 0
        for (let i = 0; i < str.length; i++) {
            sum += ALPHABET.indexOf(str.charAt(i))
        }
        console.log('hash:', str, sum)
        return sum
    }

    hashcode(key) {
        let index = this.hash(key) % this.buckets.length
        console.log('key:', key, "index:", index)
        return index
    }

    put(key, value) {
        let index = this.hashcode(key)
        this.buckets[index] = value
    }

    get(key) { 
        let index = this.hashcode(key)
        return this.buckets[index]
    }

    remove(key) {
        let index = this.hashcode(key)
        this.buckets[index] = null
    }
}

let map = new HashMap()
map.put("Delhi", 2.5)
map.put("Mumbai", 3.6)
map.put("Kolkata", 4.7)

console.log(map.get("Delhi"))
console.log(map.get("Chennai"))
