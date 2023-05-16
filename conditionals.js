/* Conditionals */

/*
if
else
else if
switch
*/

let age=200
if(age>18 && age<45)
{
    console.log("You are in mid age");
}

else if(age>45 && age<650)
{
    console.log("You are getting older");
}
else
{
    console.log("you are child");
}

let color="blue";
switch(color)
{
    case "red":
        console.log("red color");
        break;
    case "green":
        console.log("green color");
        break;
    case "yellow":
        console.log("yellow color");
        break;
    default:
        console.log("unknown color");
}