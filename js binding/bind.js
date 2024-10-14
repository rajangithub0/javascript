let  animal={
    name:'lion',
    color:'yellow',
    live :'jungle'
}

let bird={
    name:"parrat",
    color:"green"
}

function print(){
    console.log(this.name+' '+this.color);
}

let print_animal=print.bind(animal);
let print_bird=print.bind(bird);
// console.log(animal.name);
print_animal();
print_bird();
