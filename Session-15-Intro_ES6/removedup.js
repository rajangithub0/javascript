const arr = [1, 2, 1, 3, 4, 2, 5, 6, 3, 6, 9];

const set = new Set(arr);

console.log(set); //printing a set in object
console.log(...set); //new method for arry conversion
console.log(Array.from(set)); //old method conversion
