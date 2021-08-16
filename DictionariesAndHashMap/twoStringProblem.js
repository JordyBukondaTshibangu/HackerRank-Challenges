const twoString = (s1,s2) => {
    string1Map = {};
    for(let i = 0; i < s1.length; i++){
        const s1Letter = s1[i];
        string1Map[s1Letter] = true;
    }
    for(let i = 0; i < s2.length; i++){
        const s2Letter = s2[i];
        if(string1Map[s2Letter]){
            return "YES";
        }
    }

    return "NO";
}

console.log(twoString("hello", "pasting"));

/* 
    const twoStringProblem = (stringOne, stringTwo) => {
    const stringOneArray = stringOne.split('');
    const stringTwoArray = stringTwo.split('');

    let wordCount = 0;
    stringOneArray.length >= stringTwoArray.length ? 
    wordCount = stringTwoArray.length 
    : wordCount = stringOneArray.length;

    for(let i = 0; i <= wordCount; i++){
        for(let j = 0; j <= wordCount; j++){
            console.log(stringOneArray[i], stringTwoArray[j])
            if(stringOneArray[i] === stringTwoArray[j])  return true;
            if(!stringOneArray[i]) return false
        }
    }
    return false;
}

*/