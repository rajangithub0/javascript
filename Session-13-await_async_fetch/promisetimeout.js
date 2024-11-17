let my_promise = new Promise(function(resolve,reject){

    count =1;
    setTimeout(function(){
        if(count<5)
        resolve('time completed'+count)
    else
    reject("reject"+count)
    },5000)
    for(let i=0;i<=10;i++){
        count++;
    }
})

my_promise.then(function(resp){console.log(resp);})
.catch(function(err){console.log(err);})