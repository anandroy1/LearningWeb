// [1,2,3,4,5]
// [5,4,3,2,1]

function isSorted(arry) {
    let isAcending = true;
    let isDecending = true;
    for (let i=1; i<arry.length; i++) {
        let v1 = arry[i-1]
        let v2 = arry[i]
        if (v1<v2) { //acending
            isDecending = false;
        }
        if (v1>v2) {   // decending
            isAcending = false;
        }
    }
    return isAcending || isDecending
}
console.log(isSorted([]));
console.log(isSorted([42]));
console.log(isSorted([39,42]));
console.log(isSorted([42,39]));
console.log(isSorted([1,2,3,4,5]));
console.log(isSorted([5,4,3,2,1]));
console.log(isSorted([1,5,2]));