function rotLeft(a, d) {

    while (d) {
        a.push(a.shift());
        d--;
     }
  return a;
}

const array = [1, 2, 3, 4, 5];

console.log(rotLeft(array, 4))