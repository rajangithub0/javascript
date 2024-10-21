let  animal={
    name:'lion',
    color:'yellow',
    live :'jungle',
     print:function(){
        console.log(this.name+' '+this.color);
    }
}

let bird={
    name:"parrat",
    color:"green"
}



let print_bird=animal.print.bind(bird);
animal.print();
print_bird();
