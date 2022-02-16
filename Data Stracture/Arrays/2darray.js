let timeTable = [
    [1,2,3,4,5],
    [2,4,6,8,10],
    [3,6,9,12,15],
    [4,8,12,16,20],
    [5,10,15,20,25]
]
console.log(timeTable);
for(let row =0; row<timeTable.length; row++){
    line = "";
    for(let col = 0; col<timeTable[row].length; col++){
        let value = timeTable[row][col];
        line += value + " ";
    }
    console.log(line);
}