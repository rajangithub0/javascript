class BaseModel{

    constructor(modelNo){
        this.modelNo=modelNo;
    }
    display(){
        console.log(`model no ${this.modelNo}`);
    }
}

class TopModel extends BaseModel {
    constructor(modelNo,extra){
        super(modelNo);
        this.extra=extra;
    }
    displayDetails(){
        console.log(this.modelNo+ " "+'extra details'+ this.extra);
    }
}
const rajan=new BaseModel(2024);
const monika= new TopModel(2024,`360 degree camera`);
rajan.display();
monika.displayDetails();