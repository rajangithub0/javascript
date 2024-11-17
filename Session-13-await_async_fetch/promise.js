const mypromise= new Promise(function(resolve,reject){
    if(2>  26){
        resolve('resolved')
    }else{
        reject('reject')
    }
})

mypromise.then(function(resp){console.log(resp);})
.catch(function(err){console.log(err);})
