class Car{
    constructor(brand){
        this.brand = brand;
    }

    getInfo=()=>{
        return 'this car brand is '+this.brand;
    }
}

class carModel extends Car{
    constructor(brand,model){
        super(brand);
        this.model = model;
    }

    printInfo=()=>{
        console.log(this.getInfo()+' and model is '+this.model);
    }
}

let cars=new carModel('BMW','BM_738');
cars.printInfo();


class Student{
    constructor(name,id,age){
        this.name=name;
        this.id=id;
        this.age=age;
    }

    getStudent=()=>{
        return 'Student Name is '+this.name + 'ID is- ' + this.id + ' Age is '+this.age;
    }
}

class StudentsMarks extends Student {
    constructor(name,id,age,bengali,english,math){
        super(name,id,age);
    this.bengali=bengali;
    this.english=english;
    this.math=math;
    }

    getMarks=()=>{
        return 'Bengali : '+this.bengali + 'English : '+this.english + 'Math : '+this.math;
    }
    totalMarks=()=>{
        return 'Total: '+Number((this.bengali + this.english  +this.math));
    }
    fullData=()=>{
        return this.getStudent() + this.getMarks() + this.totalMarks();
    }

}
const std1=new StudentsMarks('Abir','19-29687-1','24',90,96,98,);
console.log(std1.fullData());