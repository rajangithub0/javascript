const emoployee={
    firstname:'rajan',
    lastname:'rajput',
    display:function(){
        let x=document.getElementById("demo");
        x.innerHTML=this.firstname+" "+this.lastname;
    }
}
let display=emoployee.display.bind(emoployee);
setTimeout(display,5000);