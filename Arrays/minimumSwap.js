function minimumSwaps(arr) {
    let numSwaps = 0;

    for(let index = 0 ; index < arr.length; index++){
        
        while(arr[index] !== index + 1){
            let swapIndex = arr[index] - 1;
            let valAtIndex = arr[index];
            let valAtSwapIndex = arr[swapIndex];

            arr[index] = valAtSwapIndex;
            arr[swapIndex] = valAtIndex;

            numSwaps++
        }
    }

    return numSwaps;

}