function peek(stack){
    return stack[stack.length -1]
}

function isBalanced(str){
    let stack = []
    stack.push()
    stack.pop()
    // iterare through every letter of the string
    for(let i = 0; i < str.length; i++){
        let letter = str.charAt(i)
        // if the letter is an opening paren push it on the stack
        if ( letter === '(') {
            stack.push(letter)
        } else if ( letter === ')') {
            // if the letter is a closing paren make sure it has a matching opening paren
            if (peek(stack) === '(') {
                stack.pop()
            } else {
                return false;
            }
        }
    }
    return stack.length === 0
}

console.log('true cases:-')
console.log(isBalanced("()"))
console.log(isBalanced("(())"))
console.log(isBalanced("((()))"))
console.log()

console.log('false cases:-')
console.log(isBalanced("("))
console.log(isBalanced(")"))
console.log(isBalanced(")("))
console.log(isBalanced("(()"))
console.log(isBalanced("())"))