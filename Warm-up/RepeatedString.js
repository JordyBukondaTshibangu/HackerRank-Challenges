function repeatedString(s, n) {
    let numberofA = 0;
    
    if( n >= s.length){

        let occurenceOfA = [... s].filter(a => a === 'a').length;

        numberofA = Math.floor( n / s.length) * occurenceOfA
    }

    let remaindingPartLength = n % s.length;

    for(let i = 0 ; i < remaindingPartLength; i++){
        if(s[i] === 'a'){
            numberofA ++;
        }
    }

    return numberofA;
}

s = 'aba'
n = 10
repeatedString(s,n)