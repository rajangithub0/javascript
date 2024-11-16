function serach(array,num){
    const res=array.find(function(value){return value==num});
    if(res){
        console.log(`${num} found`);
    }else{
        console.log(`${num} no found`);
    }
}
serach([1,2,3,4,5,6,7,8,9,10],2);
serach([12,13,14,15,16,18],15);
serach([11,11,22,33,44,5,55],77);