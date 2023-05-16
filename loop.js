// basic for

let countries=['Algeria', 'Albenia','Argentina','Brazil','Belarus']
for (let index = 0; index < countries.length; index++) {
    const element = countries[index];
    // console.log(element);
}

countries.forEach(element => {
    // console.log(element);
});

for(let x in countries) {
    // console.log(x);
}

for(let y of countries) {
    // console.log(y);
}

let str="Vue JS 3"

for(let x of str){
    console.log(x);
}
