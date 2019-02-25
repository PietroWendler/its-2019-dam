const fastify = require('fastify')({ 
    logger: true, 
    ignoreTrailingSlash: true 
});


// Esempio gestione GET
fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
});
  
fastify.get('/api/products', async (request, reply) => {
    return ['prodotto1', 'prodotto2', 'prodotto3']
});

fastify.get('/api/products/:id', async (request, reply) => {
    return 'prodotto' + request.params['id'];
});

fastify.post('/api/products/', async (request, reply) => {
    /*
        console.log(request.body)
        console.log(request.query)
        console.log(request.params)
        console.log(request.headers)
        console.log(request.raw)
        console.log(request.id)
    */

    console.log(request.body)
    var name = request.body.name;
    console.log("name: " + name)

    reply.code(204).send();
  });


// Run the server!
const start = async () => {
    try {
      await fastify.listen(3000)
      fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
start();