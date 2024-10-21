async function myDisplay(){
    let MyPromise = new Promise(function(resolve){
        setTimeout(function(){resolve("hello js");},3000)
    });
    document.getElementById("demo").innerHTML= await MyPromise
}
myDisplay();