let person={
    name:'rajan',
    wroks:"kuantum paper ltd",
    salary:30000
}

let student={
    name:'rohit',
    school:"doaba school",
    rollno:15
}


function print(){
    console.log(this.name+" "+this.wroks+" "+this.school+" "+this.salary+" "+this.rollno);
}

let print_person= print.bind(person);
let print_student=print.bind(student);

print_person();
print_student();