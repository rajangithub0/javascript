const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9];

//marge the both array
const mergearr = arr1.concat(arr2);
console.log(mergearr);

//using spread operator marge

const merge = [...arr1, ...arr2];
console.log(merge);

const obj1 = { id: 1, name: "rajan" };
const obj2 = { country: "india" };
const user = { ...obj1, ...obj2 };
console.log(user);
console.log(...arr1, 45, 89);
console.log({
  ...obj1,
  ...obj2,
  ...{ age: 28, result: "pass", salary: 550000 },
});
