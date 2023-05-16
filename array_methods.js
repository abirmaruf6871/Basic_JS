/* Array Methods */

// length property
let countries=['Algeria', 'Albania', 'American','Africa', 'Andorra','Argentina','Armenia','Azerbaijan']
let countriesB=['Bangladesh', 'Barbados', 'Belgrade', 'Belgium', 'Bela','Bosnia']
console.log(countries.length)

// Array Entry/Insert
// push---add in last
// unshift---add in first
countries.push('Brazil','France',)
// console.log(countries);
countries.unshift('Germany')
// console.log(countries);

// Removing from array
// pop---remove in last position
// shift---remove in first

countries.pop()
// console.log(countries);
countries.shift()
// console.log(countries);

// Array Concat
// console.log(countries.concat(countriesB));


// Array reverse

countries.reverse()
// console.log(countries);

// Array string conversion


console.log(countriesB.toString());

// Array include---check if array contains
console.log(countriesB.includes('Bangladesh'));

/*
map
filter
find
every
findIndex-return index number 
reduce
splice


*/

let result=countries.map(element=>element+"-World Cup 2022")
// console.log(result);

let fifaRank=[22,44,2,4,6,8,10,]
// console.log(fifaRank.filter(element => element>5));

// console.log(fifaRank.find(element=>element>22));

// console.log(fifaRank.every(element=>element>1));
// console.log(fifaRank.findIndex(element=>element>2));

// let result2=fifaRank.reduce(prev,curr) =>(prev+curr,1);
// console.log(result2);

console.log(countriesB.splice(0,3));
console.log(countriesB.slice(0,3));


