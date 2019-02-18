// Variabili

var a = 12;
let b = 34;

function dummy(){
    var c = "pippo";

    if(a === 12){
        var d = "La variabile 'a' vale 12";
        let e = "ITS";
    }
    if(b === 34){
        var d = "La variabile 'b' vale 34";
    }
    console.log(d);
    
    if((typeof e) != 'undefined')
        console.log(e); // "ReferenceError: e is not defined" in quanto visibile solo all'interno dell'if

    var typeOfB = typeof b;
}

// dummy();
// console.log(typeof c);

// ************************
// Oggetti

let user1 = {
    name: "Andrea",
    surname: "Dottor"
};

// leggo le proprietà
console.log(user1.name);
console.log(user1["name"]);
// scrivo
user1.name = "Tommaso";
user1["name"] = "Lorenzo";
user1.years = 5;    // posso scrivere proprietà che non esistono

let user2 = new Object();
user2.name = "Andrea";
user2.surname = "Dottor";


function User(firstName, lastName){
    this.name = firstName;
    this.surname = lastName;
    this.getFullName = function(){
        return this.name + " " + this.surname;
    }
}

let user3 = new User("Andrea", "Dottor");
let user4 = new User("Lorenzo", "Dottor");
console.log(user3.getFullName());



// ****************
// funzioni

function func1(){
    console.log("Ciao");
}
func1();

function func2(num1, num2){
    console.log("  tipo num1: " + typeof num1);
    console.log("  tipo num2: " + typeof num2);
    console.log(arguments);

    return "Valore1: " + num1 + "; Valore2: " + num2; 
}
let r1 = func2();
let r2 = func2(2,3);
let r3 = func2("pippo");
let r4 = func2("a", "b", "c");

console.log("r1: " + r1);
console.log("r2: " + r2);
console.log("r3: " + r3);
console.log("r4: " + r4);

console.log(typeof func2);

let func3 = function(num1, num2){
    return num1 * num2;
}
// arrow function
let func4 = (num1, num2) => {
    return num1 * num2;
}

let func5 =  (num1, num2) => num1 * num2;

// ******
// if

if(0){
    console.log("vero");
}else{
    console.log("falso");
}
if(''){
    console.log("vero");
}else{
    console.log("falso");
}
if(null){
    console.log("vero");
}else{
    console.log("falso");
}
var u;
if(u){
    console.log("vero");
}else{
    console.log("falso");
}


var user5 = null;
if(a === 123)
    user5 = new User("Andrea", "Dottor");

if(user5 && user5.name === "Andrea"){
    console.log("User5 è Andrea");
}else{

}


var condition = true;
if(condition && a == 13){
    // true
}
if(condition || a == 13){
    // true
}

if(user3 && user3.name == "Andrea"){

}

if(12 == "12"){
    // true
}
if(12 === "12"){
    /// verifica del valore e del tipo 
    // number è diverso da string
}

if(12 != "12"){
    
}
if(12 !== "12"){

}




// ******
// cicli for foreach while do 

for (let i = 0; i < 20; i++) {
    console.log(i);
    
}


