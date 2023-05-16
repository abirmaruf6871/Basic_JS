let car={
    name:'toyota',
    color:'red',
    model:'A4532',
    year:2020

}
// console.log('car :>> ', car);

// console.log(car.name,car.model,car['year']);

let result = Object.getOwnPropertyNames(car)
let result2 = Object.keys(car)
// console.log(result,result2);

// Property values change

car.year=2021
car.model="B62527"
// console.log('car :>> ', car);

Object.defineProperty(car, 'year',{value:2023})
// console.log('car :>> ', car);

let arr = [1,2,3,4,5,6,7]

arr='www.google.com'
for(const x of arr)
{
    console.log(x);
}