function removeDuplicates(arr) {
    if(!arr || arr.length == 0) return null
    const newArr = [... new Set(arr)];

    return newArr;
}

const arr = [1,2,3,5,6,2,6,2,1,4];
console.log(removeDuplicates(arr));


/* 
    create a new array that will only store single value

    const arrayB = []

    for(let i = 0; i < arr.lnegth; i ++){
        if(arrayB.indexOf(arr[i]) === -1){
            arrayB.push(arr[i])
        }
    }

*/

/* 
        create an object that store key value pair

        const obj = {}

        for( let item of arr){
            obj[i] = true
        }

        const newArr = Object.keys(obj)

*/