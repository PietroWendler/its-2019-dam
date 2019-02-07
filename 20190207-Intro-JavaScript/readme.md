## Codice della lezione del 2019.02.07

- introduzione a JavaScript
- commenti
- variabili
- array
- operatori
- funzioni
- costrutti

### Esercizio Calc.js

Realizzare una funzione che crei un oggetto per eseguire un calcolo matematico.

Implementare il codice di Calc in modo che il seguente blocco funzioni:

```javascript
var op = new Calc(123, 45, "+");
console.log(op.exec()); // 168

var op = new Calc(123, 45, "-");
console.log(op.exec()); // 78

var op = new Calc(123, 45, "*");
console.log(op.exec()); // 5535

var op = new Calc(123, 45, "/");
console.log(op.exec()); // 2.733333333333333
```


### Esercitazione square

Creare una funzione che dato un numero in ingresso, disegni un quadrato pieno di * con il lato della dimensione specificata.

Creare una funzione che dato un numero in ingresso, disegni solo i bordi di un quadrato, con il lato della dimensione specificata.

Utilizzare *process.stdout.write("\*");* per scrivere il singolo carattere.


