function myDisplayer(some){
    document.getElementById('demo').innerHTML=some;
}

async function myFunction(){return"hello";}

myFunction().then(
function(value){myDisplayer(value);}
);