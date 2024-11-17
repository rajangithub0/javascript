const mypromise= new Promise(function(resolve,reject){
setTimeout(function(){resolve(1)},1000)
})

mypromise
.then(function(resp){return resp*2}) //1*2 =2
.then(function(resp){return resp*3}) //2*3=6
.then(function(resp){return resp*4}) //6*4=24     
.then(function(resp){return resp*5}) //24*5=120
.then(function(resp){console.log(resp);})
 .catch(function(err){console.log(err);})
