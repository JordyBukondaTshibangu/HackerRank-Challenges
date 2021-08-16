function palindromeNumber(num){
    if(num < 0 || num > 2 ** 31 - 1) return false;

    let reverseNum = 0;
    let initialNum = num

    while(num > 0){
        let currentDigit = num % 10;
        reverseNum = reverseNum * 10 + currentDigit;
        num = parseInt(num / 10);
    }

    if(reverseNum === initialNum) return true;
    else return false;
}

console.log(palindromeNumber(121));
console.log(palindromeNumber(-121));
console.log(palindromeNumber(12145));