function sum(...nums) {
  let total = 0;
  for (let n of nums) {
    total += n;
  }
  return total;
}

console.log(sum(1, 2, 3));
console.log(sum(10, 20, 30, 40));
console.log(sum(7, 8, 9));

function upp(...data) {
  for (let n of data) {
    console.log(n.toUpperCase());
  }
}
upp("rajan", "monika", "ekaansh");
