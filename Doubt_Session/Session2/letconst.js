function test(){

    if(true){
        let num=10;
        console.log(`number in if block ${num}`);
    }
    console.log(`number in function block ${num}`);
}
test();
console.log(`number is outside the function ${num}`);