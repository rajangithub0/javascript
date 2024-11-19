//function declare
const hello = () => console.log("hello world");

const add = (num1, num2) => num1 + num2; //return implicaity
//function calling
hello();
console.log(add(25, 25));

const calc = (n1, n2) => {
  const num1 = n1 + n2;
  const num2 = n1 * n2;
  return num2;
};
console.log(calc(15, 15));
