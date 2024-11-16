const array=[1,2,3,4,5,6,2,3,4,2,34,2,44,22,33,4,422,1,2,2,2,2];

const odd=array.filter(function(value){return value%2!=0});
 
console.log(odd);
console.log(odd.length);

const even=array.filter(function(v){return v%2==0});
console.log(even);
console.log(even.length);
 
const result=array.filter(function(val){return val ==2});
console.log(result);
console.log(result.length);