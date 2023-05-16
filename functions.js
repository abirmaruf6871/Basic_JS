/* functions */

// let x=9;
// let y=6;
// console.log(x+y);

function add(x, y) 
{
    return x+y;
}

// console.log(add(5, 5));


function fullName(fname,lname)
{
    return fname+" "+lname;
}

// console.log(fullName('Abir','Maruf'));


// function toCelcius(faren)
// {
//     return (faren-32)*5/9;
// }

// console.log(toCelcius(420));

// Arrow functions

let toCelcius=faren=>5/9*faren-32
console.log(toCelcius(210));

let fullNumberPer=total=>total*0.1
console.log(fullNumberPer(90));