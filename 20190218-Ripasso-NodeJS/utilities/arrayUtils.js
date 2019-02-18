/*
getList(count) -> ritorna un'array di string con X elementi
taken(list, maxItems) -> ritorna i primi (maxItems) dell'array passato come argomento
sortReverse(list)	-> ritorna l'array ordinato al contrario
getEven(list)	-> ritorna un array con i soli elementi presenti agli indici pari
*/

module.exports.getList = function(count){
    let list = new Array();
    for (let i = 0; i < count; i++) {
         list.push("ITS " + i);   
    }
    return list;
}

module.exports.taken = function(list, maxItems){
    let result = new Array();
    for (let i = 0; i < maxItems; i++) {
        result.push(list[i]);   
    }
    return result;
}

module.exports.sortReverse = function(list){
    let result = new Array();
    for (let i = list.length; i > 0; i--) {
        result.push(list[i - 1]);   
    }
    return result;
}

module.exports.getEven = function(list){
    let result = new Array();
    for (let i = 0; i < list.length; i++) {
        if(i % 2 == 0)
            result.push(list[i]);   
    }
    return result;
}
