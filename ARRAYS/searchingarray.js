function container (arry , value) {
    for (let i=0; i<arry.length; i++) {
        if (arry[i] === value) {
            return true;
        }
    }
    return false;
}
console.log(container([12,15,19,26], 12));
console.log(container([12,15,19,26], 22));

// sorted

function isSorted(arry){
    for (let i=1; i<arry.length; i++){
        if (arry[i-1]>arry[i]){
            return false;
        }
    }
    return true;
}

console.log("isSorted");
console.log(isSorted([]));
console.log(isSorted([1]));
console.log(isSorted([1,2]));
console.log(isSorted([4,2,3]));
console.log(isSorted([1,2,4,3,5]));
console.log(isSorted([1,1,1,1,1,]));