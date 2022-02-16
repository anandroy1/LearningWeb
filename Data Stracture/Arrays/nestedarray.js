let arr = [
    [1,2,3],
    [4,5,6,7],
    [8,9,10,11,12]
]
console.log(arr); // print Array


// print element of array

for (let i= 0; i<arr.length; i++){
    console.log(arr[i])
    // print all elements of each array
    for (let j=0; j<arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}
    