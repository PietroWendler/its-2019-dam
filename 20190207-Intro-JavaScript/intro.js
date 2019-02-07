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
