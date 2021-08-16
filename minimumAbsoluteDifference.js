const mimumAbsoluteDiff = arr => {
const sortedArray = arr.sort();
let minimuAbsDiff = Math.abs(sortedArray[0] - sortedArray[1]);

for(let i = 0; i < sortedArray.length - 1 ; i++){
    const currentDiff = Math.abs(sortedArray[i] - sortedArray[i+1]);
    if(currentDiff < minimuAbsDiff) minimuAbsDiff = currentDiff;
}
return minimuAbsDiff;
}

const array1 = [3, -7, 0];
const array2 = [-59, -36, -13, 1, -53, -92, -54, 75];
const array3 = [1, -3, 71, 68, 17];
const array4 = [1, -3];


console.log(mimumAbsoluteDiff(array1));
console.log(mimumAbsoluteDiff(array2));
console.log(mimumAbsoluteDiff(array3));
console.log(mimumAbsoluteDiff(array4));