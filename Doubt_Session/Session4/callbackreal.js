let data=[];

function fetchdata(cb){
    setTimeout(
        function(){
            data=[1,2,3,4,5,6,7];
            console.log("data is fetched");
            cb();
        },3000
    )
}

function display(){
    console.log('my data',data);
}
fetchdata(display);
