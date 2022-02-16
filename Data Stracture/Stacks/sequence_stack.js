function randomSequence (n){
    let sequence = []
    for (let i = 0; i<n; i++) {
        let num = Math.floor(Math.random() * 10)
        sequence.push(num)
    }
    return sequence
}

function condense(sequence){
    let result = ""
    for (let i = 0; i< sequence.length; i++){
        let c1 = sequence.charAt(i)
        let c2 = sequence.charAt(i + 1)
        if (c1 !== c2) {
            result += c1
        } else {
            i++
        }
    }

    if (sequence.charAt(sequence.length - 2) !== sequence.charAt(sequence.length -1)){
        result += sequence.charAt(sequence.length -1)
    }
    return result
}

// let sequence = randomSequence(100)
sequence = "54322346"
let condense = condense(sequence)
condense.log(sequence)
console.log(condense)