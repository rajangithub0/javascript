let person={
    name:'rajan',
    color:'skin',
    age:26,
    print:function(){
        console.log(this.name+" "+this.color+" "+this.age);
    }
}

let student={
    name:"sumit",
    color:"skin",
    age:29,
}

let print_person= person.print.bind(student);
person.print();
print_person();