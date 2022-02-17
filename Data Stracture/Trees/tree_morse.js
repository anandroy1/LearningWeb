class MorseCode {
    constructor(letter, dash=null, dot=null){
        this.letter = letter
        this.dash = dash
        this.dot = dot
    }
}
class MorseCodeTree {
    // Manually build up the morse code tree
    constructor() {
        this.root = new MorseCode(null)
        this.root.dash = new MorseCode("T")
        this.root.dash.dash = new MorseCode("M")
        this.root.dash.dot = new MorseCode("N")

        this.root.dot = new MorseCode("E")
        this.root.dot.dash = new MorseCode("A")
        this.root.dot.dot = new MorseCode("I")

    }

    // Accept an array of string of dots and dashes.
    // Return the letters in the morse code three associated
    // with the dots and dashes
    // decode (["...", "...", "..."]) => "SOS"
    // decode (["-.-.", ".-", "-"]) => "CAT"
    // decode (["--", ".-", "-."]) => "MAN"
    decode(message) {
        let result = ""
        for (let i = 0; i < message.length; i++) {
            result += this.decodeLetter(this.root, message[i], 0)
        }
        return result
    }

    decodeLetter(node, str, index) {
        if (node === null) {
            return ""
        } else if (index >= str.length) {
            return node.letter
        } else if (str.charAt(index) === "-") {
            return this.decodeLetter(node.dash, str, index + 1)
        } else if (str.charAt(index) === ".") {
            return this.decodeLetter(node.dot, str, index + 1)
        }
    }
}

let morse = new MorseCodeTree()
console.log(morse.decode(["--", ".-", "-."]))