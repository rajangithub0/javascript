function seacrhindex(array,num){
    const res=array.findIndex(function(value){return value==num})
    return res;
}


console.log(seacrhindex([1,2,3,4,4,5,6,76],5));
console.log(seacrhindex([22,12,34,55,66,7,7],12));
