function sumDelta(arr){
    let total =0;
    for (let i =0; i<arr.length-1; i++){
        let v1 = arr[i];
        let v2 = arr[i+1];
        let delta = Math.abs(v1-v2);
        total += delta;
        console.log(v1, v2, delta);
    }
    return total;
}
// Different Cases

console.log(sumDelta([5,10,18,25,32]));
console.log(sumDelta([]));
console.log(sumDelta([6,]));