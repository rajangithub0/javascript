function fn1() {
    console.log("this is my first function");
}

function fn2(cb){
    setTimeout(function(){console.log("this is my second function");cb()},3000)
}

function fn3(){
    console.log("this is my third function");
}

fn1();
fn2(fn3);
