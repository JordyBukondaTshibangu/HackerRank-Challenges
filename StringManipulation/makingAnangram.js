const makingAnagrams = (a,b) => {
    const larger = a.length >= b.length ? a : b;
    const smaller = a.length < b.length ? a : b;

    let storage = [];
    let countSimilarLetter = 0;

    for(let letter of larger){
        storage[letter] = (storage[letter] || 0) + 1;
    }
    
    for(let letter of smaller){
        if(storage[letter] && storage[letter] > 0){
            storage[letter] --;
            countSimilarLetter ++;
        }
    }

    const diff_of_smaller = smaller.length - countSimilarLetter;
    const diff_of_larger = larger.length - countSimilarLetter;

    return diff_of_larger + diff_of_smaller;    
}

console.log(makingAnagrams("abcd", "abche"));