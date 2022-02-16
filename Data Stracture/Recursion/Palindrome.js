function isPalindrome(str, start=0, end=null){
    // if no end is provided (first function call)
    // then set it to the index of the last letter
    if (end === null) end = str.length -1;
    if (str.length < 2) {
        return true
    } else if ( end <= start){
        return true
    } else if (str.charAt(start) !== str.charAt(end)) {
        return false
    } else {
       return isPalindrome(str, start+1, end-1)
    }
}

console.log(isPalindrome(""), true)
console.log(isPalindrome("a"), true)
console.log(isPalindrome("tt"), true)
console.log(isPalindrome("tot"), true)
console.log(isPalindrome("tacocat"), true)
console.log(isPalindrome("boring"), false)
console.log(isPalindrome("abc-xbby-cba"), false)