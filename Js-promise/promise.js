var promise= new Promise (function(resolve,reject){
    const x="welcome to js";
    const y="welcome to jas";
    if(x===y){
        resolve();
    }else{
        reject();
    }
})

promise.then(function(){
    console.log("success");
},function(){
    console.log("reject");
})
// .catch(function(){
//     console.log('error');
// })