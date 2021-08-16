const alternatingChar = s => {

    let count = 0;
    let lettersArray = s.split('');

    for(let i = 0; i < s.length; i++){

        const currentLetter = lettersArray[i];
        const nextLetter = lettersArray[i + 1];

        if(nextLetter && currentLetter === nextLetter)  count++;
        
    }

    return count;

}

console.log(alternatingChar("ABABABABAABBAAABBB"));