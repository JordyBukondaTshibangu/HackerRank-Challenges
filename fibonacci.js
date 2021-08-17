const fibonacci = num => {
    if(num < 3) return 1;
    let previous = 1;
    let current = 1;

    for(let i = 2; i < num; i++){
        let next = previous + current;
        previous = current;
        current = next;
    }
    return current;
}

const fibonacciWithRecursion = num => {
    if(num < 3) return 1;
    return fibonacciWithRecursion(num - 1) + fibonacciWithRecursion(num - 2);
}

console.log(fibonacci(6));
console.log(fibonacciWithRecursion(6));