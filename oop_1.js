// function Person(name,dob,age,mobile)
// {
//     this.name=name;
//     this.dob=new Date(dob);
//     this.ageCalculate=()=>{
//         const diff=Date.now()-this.dob.getTime();
//         const age=new Date(diff);
//         return age.getFullYear()-1970;
//     }
//     this.mobile=mobile;
// }

// const per1=new Person("Abir","1998-06-10","24","01521237236")
// console.log(per1.ageCalculate());

// class Car{
//     constructor(name,model,weight,year){
//         this.name=name;
//         this.model=model;
//         this.weight=weight;
//         this.year=year;
//     }

//     getFullModel()
//     {
//         return this.name + " " + this.model
//     }

  
// }
// const mazda = new Car("Mazda","RX-8",980,2023)
// // console.log(mazda.getFullModel());

class Person{

    constructor(fname,lname,dob,income){
        this.fname=fname;
        this.lname=lname;
        
        this.dob=new Date(dob);
        this.income=income;
    }

    getFullName=()=>{
        return this.fname + " " + this.lname;
    }

    getAge=()=>{
        const diff=Date.now()-this.dob.getTime();
        const age = new Date(diff)
        return age.getFullYear-1970;
    }

    getTx=()=>{
        let txammount=0;
        if(this.income>200000){
            txammount=this.income*.25
        }
        else if(this.income>300000 && this.income<500000)
        {
            txammount=this.income*.30
        }
        else{
            txammount=this.income*.35
        }
        return txammount;
    }
}

const bhuian =new Person('Babar Ali','Bhuian','1969-01-01',450000);
console.log(bhuian.getFullName(),bhuian.getAge(),bhuian.getTx());