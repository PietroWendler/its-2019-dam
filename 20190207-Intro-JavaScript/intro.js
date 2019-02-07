// commento una riga

/* 
    commentare più righe 
*/
var a = 42;
a = "pippo";
var b = true;

// stampare nella console un testo
console.log(a);
// stampare a video il tipo di una variabile
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

var s1 = "Andrea " + "Dottor";
var s2 = "aaa ' bbb";
var s3 = 'aaaa \' bbb';

// conversioni a numero
var n1 = parseInt('123.12');
var n2 = parseFloat('123.12');
console.log("n1: " + n1);
console.log("n2: " + n2);
//console.log(0.1 + 0.2 == 0.3);


// ===== Array ===
var list1 = ["aaa", "bbb", true, 0, null, [1, 2, 3]];
list1.push("ciao");
list1[20] = "pippo";

var count = list1.length;

for (var i = 0; i < list1.length; i++) {
    var item = list1[i];
    console.log(item);
}

var list2 = new Array();
list2.push("ciao");
list2[10] = "Pippo";

var list3 = [];

// ==== funzioni ====

function add(num1, num2){
    console.log(arguments);
    // vale false se num2 è:
    // undefined
    // null
    // 0
    // ""
    // false
    if(num2)
        return num1 + num2;

    return num1;
}

var r1 = add(2, 4);
var r2 = add(2, 4, 89);
var r3 = add(2);


var log = function(message){
    console.log(message);
}

log("ciao");

function add2(num1, num2, success, error){
    try {
        var r = num1 + num2;
        success(r);
    } catch (ex) {
        error(ex);
    }
}

add2(12, 32, function(result){
    console.log("OK " + result);
}, function(err){
    console.log("Errore");
});


// ===== oggetti ====

var user1 = new Object();
user1.name = "Andrea";
user1.surname = "Dottor";

var user2 = new Object();
user2["name"] = "Andrea";
user2["surname"] = "Dottor";

function User(name, surname){
    this.name = name;
    this.surname = surname;
    this.getFullName = function(){
        return this.name + " " + this.surname;
    }
}

var user3 = new User("Andrea", "Dottor");
var user4 = new User("Lorenzo", "Dottor");
var fullName = user3.getFullName();

var user5 = {
    name: "Andrea",
    surname: "Dottor"
};


// ===== costrutti ====
for(var i=0; i < 100; i++){
    console.log(i);
}

for(var i=100; i < 0; i--){

}

// prima eseguo il codice
// poi testo la condizione.
// almeno una volta viene sempre eseguito
var y = 0;
do {

    y++;
} while (y < 100);

// prima testo la condizione
// poi eseguo il codice se la condizione è vera
while (y < 200) {
    
    y++;
}

var color = "red";
switch (color) {
    case "white":
        console.log("BIANCO");
        break;
    case "blue":
        console.log("BLU");
        break;
    case "red":
        console.log("ROSSO");
        break;
    default:
        console.log("non trovato");
        break;
}