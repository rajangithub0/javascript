const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newarr = arr.map((value) => value * 2);
console.log(newarr);

const evnarr = arr.filter((value) => value % 2 == 0);
console.log(evnarr);

const sum = arr.reduce((arr, cur) => arr + cur);
console.log(sum);

const max = arr.reduce((arr, cur) => (arr < cur ? cur : arr));
console.log(max);

const min = arr.reduce((arr, cur) => (arr > cur ? cur : arr));
console.log(min);

const find = arr.find((value) => value == 50);
console.log(find);
