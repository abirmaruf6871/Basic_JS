/* String Methods */

// length of string
let intro="Vue JS 3 MasterClass with JavaScript Fundamentals"
console.log(intro.length)

// lowercase & uppercase
console.log(intro.toLowerCase());
console.log(intro.toUpperCase());

// slice,substring,substr
console.log(intro.slice(0,9));
console.log(intro.substring(0,9));
console.log(intro.substr(4,16));

// replace

console.log(intro.replace("Javascript",`JS`));

// Addition
console.log(intro+ " by Abir Ahmed");

let address= "Block A, House 99, Rd No 4, Dhaka 1213";
console.log(address.split(',')[3]);