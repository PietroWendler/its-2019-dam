const fastify = require('fastify')({
    logger: true,
    ignoreTrailingSlash: true
});

fastify.register(require('./products'), { prefix: '/api/products' });

fastify.get('/api/operations/add', async (request, reply) => {
    if(!request.query["num1"]){
        reply.status(400).send({message: "Field num1 required!"});
        return;
    }
    if(!request.query["num2"]){
        reply.status(400).send({message: "Field num2 required!"});
        return;
    }

    let n1 = parseInt(request.query["num1"]);
    let n2 = parseInt(request.query["num2"]);
    let r = n1 + n2;

    return { result: r };
});

fastify.get('/api/operations/sub', async (request, reply) => {
    let n1 = parseInt(request.query["num1"]);
    let n2 = parseInt(request.query["num2"]);
    let r = n1 - n2;

    return { result: r };
});

fastify.get('/api/operations/mul', async (request, reply) => {
    let n1 = parseInt(request.query["num1"]);
    let n2 = parseInt(request.query["num2"]);
    let r = n1 * n2;

    return { result: r };
});

fastify.get('/api/operations/div', async (request, reply) => {

    if(request.query["num2"] == 0){
        reply.status(400).send({message: "Non è possibile dividere un numero per zero."});
        return;
    }

    let n1 = parseInt(request.query["num1"]);
    let n2 = parseInt(request.query["num2"]);
    let r = n1 / n2;

    return { result: r };
});

fastify.post('/api/operations/execute', async (request, reply) => {
    var obj = request.body;
    let r = null;

    switch (obj.operation) {
        case 'add':
            r = obj.num1 + obj.num2;
            break;
        case 'sub':
            r = obj.num1 - obj.num2;
            break;
        case 'mul':
            r = obj.num1 * obj.num2;
            break;
        case 'div':
            r = obj.num1 / obj.num2;
            break;
    }

    return { result: r };
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