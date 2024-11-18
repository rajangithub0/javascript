const pattern = /hello/;

console.log(pattern.test("hello")); //true
console.log(pattern.test("hello rajan")); //true
console.log(pattern.test("hello 123")); //true
console.log(pattern.test("welcome to world")); //false
