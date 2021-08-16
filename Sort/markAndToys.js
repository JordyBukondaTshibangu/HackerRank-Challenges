
function maximumToys(prices, k) {
    let count = 0;

    let sortedPrices = prices.sort((a,b) => a - b);

    for (let index = 0; index < sortedPrices.length; index++) {
        if(k - sortedPrices[index] > 0){
            k -= sortedPrices[index]
               count ++;
        } 
    }

    return count;
}
const prices = [1, 12, 5, 111, 200, 1000, 10];
const prices2 = [1,2,3,4]

console.log(maximumToys(prices, 50));
console.log(maximumToys(prices2, 7));


/*  BETTER SOLUTION


function maximumToys(prices, k) {
    let count = 0;
    let curCost = 0;
    let sortedPrices = prices.sort((a,b) => a -b );

    for (let index = 0; index < sortedPrices.length; index++) {
        curCost += sortedPrices[index];
        if(k < curCost )  return count ;
        
        count ++;
    }

    return count;
}
const prices = [1, 12, 5, 111, 200, 1000, 10];
const prices2 = [1,2,3,4]

console.log(maximumToys(prices, 50));
console.log(maximumToys(prices2, 7));

*/