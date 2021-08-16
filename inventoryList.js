const inventoryList = () => {
    const list = [];
    const add = name => {
        if(list.indexOf(name) === - 1 ) list.push(name);
    };
    const remove = name => {
        let index = list.indexOf(name);
        if(index !== -1 ) list.splice(index, 1);
    }
    const getList = () => list;

    return { add, remove, getList };
}

const fun = inventoryList();
fun.add("JavaScript");
fun.add("C#");
fun.add("Java");
fun.add("Python");
console.log(fun.getList());
fun.remove("Java");
console.log(fun.getList());