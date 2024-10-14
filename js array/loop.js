let arr=['apple','banana','lichi','gava','mango']
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

for(let student in arr){
    console.log(student);
}// it print index of the array

for(let student of arr){
    console.log(student);
}//it print the value of the  array