function test() {
  var a = 10; //introduction in old javascript
  let b = 20; //introduction in es6
  const c = 30; //introduction in es6
}

//if any variable outside the function declear is called global variable
//variable redeclear with var and also hosting is possible with var keyword

console.log(a);
var a = 10;
console.log(b);
let b = 20;
