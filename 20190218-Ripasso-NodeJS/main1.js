// Esercitazione 1 del https://github.com/andreadottor/its-2019-dam/tree/master/20190214-Intro-NodeJS
var arrayUtilities = require("./utilities/arrayUtils");


// test metodo getList
var list = arrayUtilities.getList(100);
for (let i = 0; i < list.length; i++) {
    console.log("list[" + i + "] " +  list[i]);
}

// test metodo taken
var listTake10 = arrayUtilities.taken(list, 10);
for (let i = 0; i < listTake10.length; i++) {
    console.log("listTake10[" + i + "] " +  listTake10[i]);
}

// test metodo taken
var listReverse = arrayUtilities.sortReverse(list);
for (let i = 0; i < listReverse.length; i++) {
    console.log("listReverse[" + i + "] " +  listReverse[i]);
}

// test metodo getEven
var listEven = arrayUtilities.getEven(list);
for (let i = 0; i < listEven.length; i++) {
    console.log("listEven[" + i + "] " +  listEven[i]);
}