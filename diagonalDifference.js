const diagonalDifference = array => {

    let diag1 = 0, diag2 = 0, arrLength = array.length - 1;

    for(let i = 0; i < array.length ; i ++){
        diag1 += array[i][i];
        diag2 += array[i][arrLength];
        arrLength--;
    }

    return Math.abs(diag1 - diag2);
}

const my_array_one = 
[
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4]
    
];
const my_array_two = 
[
    [1,2,3,4,5,6],
    [1,2,3,4,5,6],
    [1,2,3,4,5,6],
    [1,2,3,4,5,6],
    [1,2,3,4,5,6],
    [1,2,3,4,5,6],
    
];
const my_array_three = 
[
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
    
];

console.log(diagonalDifference(my_array_one));
console.log(diagonalDifference(my_array_two));
console.log(diagonalDifference(my_array_three));