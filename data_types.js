let name="Abir Maruf"
let age=24
let isChild=true
let proffesion;


let Person={
    firstname:"Abir ",
    lastname:"Maruf",
    age:24,
    proffesion:"student",
     fullName()
    {
        return this.firstname+this.lastname;}
}

let countries=["Afganistan", "Albania", "Algeria", ]

// function fullName(firstname="Abir", lastname="Maruf")
// {
//     return firstname + " " + lastname;
// }
// let results=fullName(Person.firstname, Person.proffesion)

console.log(Person.fullName());