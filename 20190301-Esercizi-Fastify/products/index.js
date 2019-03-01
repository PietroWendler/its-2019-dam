async function routes (fastify, options) {
    // /api/products
    fastify.get('/', async (request, reply) => {
      return ['prodotto1', 'prodotto2'];
    });

    // /api/products/123
    fastify.get('/:id', async (request, reply) => {
        let id = request.params["id"];

        return {
            id: id,
            name: 'prodotto' + id,
            description :'Descrizione del prodotto con id ' + id
        };
      });

};
  
 module.exports = routes;