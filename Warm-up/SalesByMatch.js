function sockMerchant(n, ar) {
    const sortedArray = ar.sort();
    let count = 0;
    
    for(let i = 0 ; i < sortedArray.length; i++){
        if(sortedArray[i] == sortedArray[i + 1]){
            i++;
            count ++;
        }
    }
    
    return count;

}