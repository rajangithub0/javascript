const data='{"id":1,"name":"rajan"}'//json data
console.log(data);
//convert in object

const object=JSON.parse(data);
console.log(object);

//convert javascript object

const obj1={id:303,name:'pancil',price:10}
console.log(`javaobj`,obj1);
const json=JSON.stringify(obj1);
console.log(json);