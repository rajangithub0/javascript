const mypromise=()=> Promise.resolve('i have resolved')

function FirstFunction(){
    mypromise().then(res=>console.log(res));
    console.log('second');
}

async function secondFunction(){
    console.log(await mypromise());
    console.log("second");
}

FirstFunction();
secondFunction();