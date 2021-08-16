const stripProperty = (obj, prop) => {
    for(let value in obj){
        if(value === prop)  delete obj[value];
    }

    return obj;
}

let object1 = {
    name : "jordy Tshibss",
    age : 24,
    email : "jordy@test.com"
}

console.log(stripProperty(object1, "age"));