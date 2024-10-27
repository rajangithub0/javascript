class Employee{

    constructor(id,name,department,salary,yoj){
        this.id=id;
        this.name=name;
        this.department=department;
        this.salary=salary;
        this.yoj=yoj;
    }
    displayDetails(){
        console.log("----------------------------------");
        cosole.log('id:',this.id);
        cosole.log('name',this.name);
        cosole.log('department',this.department);
        console.log('salary:',this.salary);
        console.log('year',this.yoj);
    }

    expInYear(){
    console.log('expernice in this '+(2024-this.yoj)+"year");
    }
}

const emp1=new empl(1,"rajan",'information technology',999999,2020)

const arr=[emp1];
console.log(arr);