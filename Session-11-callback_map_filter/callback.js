function add(n1,n2,print){
    const res= n1+n2;
    print(res);
}
function abc(x){
    console.log(x);
    console.log("hello world");
    // console.log(x +"hello world");
}
add(4,5,abc)