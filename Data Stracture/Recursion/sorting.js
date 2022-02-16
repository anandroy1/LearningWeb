let myArray = [8,4,6,9,1,3,5,10,7,2]
let newArray = []
let i=0;
let j=1;

function isSorted(array){
    for(let i=0; i < array.length; i++) {
        if(array[i] > array[i+1]) {
            return false;
        }
    }
    return true;
}

function sortCheck(array){

    if(isSorted(array)){
        newArray = array;
        return;
    }

    else if(array[i] < array[j]) {
        i++
        j++
        sortCheck(array)
    } else {
        [array[i], array[j]] = [array[j], array[i]]
        i = 0
        j = 1
        sortCheck(array)
    }
}

sortCheck(myArray);
console.log(newArray);