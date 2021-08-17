// Instructions:
// Given an array of numbers (s)
// count how many segments of length (m)
// sum to the value (d)
//                                                s         d  m 
//console.log(birthday([1, 2, 1, 3, 2], 3, 2)) //Answer 2
// Example: count = 0
//          1 + 2 = 3 count = 1
//          2 + 1 = 3 count = 2
//          1 + 3 = 4 count = 2
//          3 + 2 = 5 count = 2
//console.log(birthday([1, 2, 1, 1, 1, 3], 3, 3)) //Answer 1

const birthday = (s,d,m) => {
    let count = 0, sliced;
    if(s.length < m) return count;

    for(let i = 0; i < s.length; i++){
        
    }


}