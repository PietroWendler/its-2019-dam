# Lezione del 2019.02.25

* Protocollo HTTP
  * HTTP Method: GET, POST, PUT, DELETE, PATCH, HEAD, OPTION, ...
  * Url
  * Params
    * QueryString
    * Headers
    * Body

* Serializzazione JSON, XML
  * Json.org
* Introduzione servizi REST
* Introduzione a Fastify [https://www.fastify.io/](https://www.fastify.io/)


## Esercitazione

* Create funzione che esegua operazione matematica in GET e ritorni un JSON con il risultato
  * GET api/operations/add?num1=12&num2=34
  * GET api/operations/sub?num1=12&num2=34
  * GET api/operations/mul?num1=12&num2=34
  * GET api/operations/div?num1=12&num2=34
* Creare funzione che esegua le operazioni metematiche in POST
  * POST api/operations/execute
    * body: { "num1" : 12, "num2": 34, "operation": "add" }
* Tutti i metodi devono ritornare un JSON:
  * { "result" : valore }