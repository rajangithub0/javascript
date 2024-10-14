var name='rajan';
var age=26;
var address='punjab';

let student={
    name:"rohit",
    age:45,
    address:'punjab'
}

let teacher={
    name:'maharaja',
    age:34,
    address:'himchal'
}

function print(){
    console.log(this.name+" "+this.age+" "+this.address);
}

print();