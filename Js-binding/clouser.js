var x=30;
function abc(){
    y=40;
    console.log("this is inside the function of abc value of x"+x+"and value of y"+y);
    function qrs(){
        z=50;
        console.log("this is a function of qrs value of x"+ x +"value of y"+ y + "value of z"+z);

    }
    qrs();
}

abc();