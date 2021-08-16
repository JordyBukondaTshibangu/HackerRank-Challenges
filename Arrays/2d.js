const myArray = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
]

const myArray2 = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
]

function hourglassSum(arr) {
    let sum = 0;
    let count = -64;

    for(let r = 0; r <= 3 ; r++)
    {
        for(let c = 0; c <= 3; c++){
            
            sum = 
            arr[r][c] + arr[r][c + 1] + arr[r][c + 2] 
            arr[r + 1][c + 1] +
            arr[r + 2][c] + arr[r + 2][c + 1] + arr[r + 2][c + 2] ;

            if(sum > count)  count = sum;
            
        }
    }
    return count

}

console.log(hourglassSum(myArray2));