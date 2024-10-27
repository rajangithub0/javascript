class account{
    constructor(accNo,holderName,balance){
        this.accNo=accNo;
        this.holderName=holderName;
        this.balance=balance;
    }
    display(){
        console.log("------------------------");
        console.log(`account no ${this.accNo}`);
        console.log(`holder ${this.holderName}`);
        console.log(`balance ${this.balance}`);
    }
    disposit(amount){
        this.balance+=amount;
        console.log(`your account balance ${amount}, now balance ${this.balance}`);
    }
    withdraw(amount){
        if(this.balance>=amount){
            this.balance-=amount;
            console.log(`your account debit ${amount} avaible balance ${this.balance}`);
        }else{
            console.log(`no balance to display`);
        }
    }
}

const rajan= new account('SBI0000007','Rajan',5000);
rajan.display();
rajan.disposit(85000);
rajan.withdraw(50000);
rajan.withdraw(90000);
