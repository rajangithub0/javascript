const person={
    id:1,
    name:"rajan",
    email:'rajan.rana6@gmail.com',
    country: "india",
    address:'Punjab'
}
console.log(person);
//if i added  new property inside the object with the help of name of ht object then use dot( . ) then name of on the key then equal to value end of this must be added semicolon( ; ).example below:
person.age=45 ;
console.log(person);
//if i update the key inside the object then write the object name then use dot ( . ) the name of the key which you want to be update then assign the value . example below :
person.country="USA";
console.log(person);
//if delete the key value pair inside the object then write delete keyword space name of the object use dot( . ) then name of the key you want to delete.example below :
delete person.address; 
console.log(person);